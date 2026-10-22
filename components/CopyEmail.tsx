"use client";

import { useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

/** Kopierar e-postadressen. Saknas clipboard-API markeras adressen så att den kan kopieras manuellt. */
export function CopyEmail({ email, targetId }: { email: string; targetId: string }) {
  const [state, setState] = useState<"idle" | "done" | "selected">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const flash = (s: "done" | "selected") => {
    setState(s);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2500);
  };

  const selectText = () => {
    const el = document.getElementById(targetId);
    const sel = window.getSelection();
    if (!el || !sel) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    sel.removeAllRanges();
    sel.addRange(range);
    flash("selected");
  };

  const copy = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("no clipboard");
      await navigator.clipboard.writeText(email);
      flash("done");
    } catch {
      selectText();
    }
  };

  return (
    <button type="button" className="copy-btn" data-state={state} onClick={copy} aria-label={`Kopiera e-post ${email}`}>
      {state === "done" ? <CheckIcon /> : <CopyIcon />}
      <span aria-live="polite">
        {state === "done" ? "Kopierad" : state === "selected" ? "Markerad – kopiera med Ctrl+C" : "Kopiera e-post"}
      </span>
    </button>
  );
}
