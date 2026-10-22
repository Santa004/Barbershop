"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { sendQuote } from "@/app/actions";
import { FIELD_LABEL, INITIAL_QUOTE_STATE, URGENCY, type FieldName } from "@/lib/quote-schema";
import { QUOTE_EVENT } from "@/lib/quote";
import { SITE } from "@/lib/site";

type FieldProps = {
  name: FieldName;
  type?: string;
  required?: boolean;
  optional?: boolean;
  full?: boolean;
  autoComplete?: string;
  error?: string;
  value?: string;
  onChange?: (v: string) => void;
  inputMode?: "text" | "tel" | "email";
};

function Field({ name, type = "text", required, optional, full, autoComplete, error, value, onChange, inputMode }: FieldProps) {
  const id = `f-${name}`;
  const errId = `${id}-fel`;
  return (
    <div className={`field${full ? " field--full" : ""}`}>
      <label htmlFor={id}>
        {FIELD_LABEL[name]}
        {required && (
          <span className="req" aria-hidden="true">
            {" "}*
          </span>
        )}
        {optional && <span className="opt"> (frivilligt)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        {...(onChange ? { value, onChange: (e) => onChange(e.target.value) } : {})}
      />
      {error && (
        <p id={errId} className="field__error">
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(sendQuote, INITIAL_QUOTE_STATE);
  const [galler, setGaller] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Förifyll "Gäller" från offertknappar på sidan och från ?galler= i adressen.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("galler");
    const modell = params.get("modell");
    if (fromUrl) setGaller(fromUrl);
    if (modell && formRef.current) {
      const el = formRef.current.elements.namedItem("modell");
      if (el instanceof HTMLInputElement && !el.value) el.value = modell;
    }
    const onQuote = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (typeof detail === "string") setGaller(detail);
    };
    window.addEventListener(QUOTE_EVENT, onQuote);
    return () => window.removeEventListener(QUOTE_EVENT, onQuote);
  }, []);

  // Flytta fokus till första felet, eller till kvittot.
  useEffect(() => {
    if (state.status === "invalid" && state.errors) {
      const first = Object.keys(FIELD_LABEL).find((k) => state.errors?.[k as FieldName]);
      if (first) document.getElementById(`f-${first}`)?.focus();
    } else if (state.status !== "idle") {
      statusRef.current?.focus();
    }
    if (state.status === "success") {
      formRef.current?.reset();
      setGaller("");
    }
  }, [state]);

  const errors = state.errors ?? {};

  return (
    <form
      ref={formRef}
      className="form"
      action={formAction}
      noValidate
      onSubmit={(e) => {
        // Skicka utan att React nollställer formuläret, så ifyllda fält finns kvar vid fel.
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        startTransition(() => formAction(data));
      }}
    >
      <div ref={statusRef} tabIndex={-1} className="field--full form__status" aria-live="polite">
        {state.status === "success" && (
          <div className="alert alert--ok" role="status">
            <strong>Tack, vi har tagit emot din förfrågan</strong>
            <p>
              Den gick till {state.sentTo?.join(" och ")}. Vi hör av oss
              {state.replyEmail ? ` till ${state.replyEmail}` : ""} så snart vi kan. Brådskar det – ring{" "}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>.
            </p>
          </div>
        )}
        {state.status === "invalid" && (
          <div className="alert alert--error" role="alert">
            <strong>Några fält behöver fyllas i</strong>
            <ul>
              {Object.entries(errors).map(([k, msg]) => (
                <li key={k}>
                  <a href={`#f-${k}`}>{FIELD_LABEL[k as FieldName]}</a>: {msg}
                </li>
              ))}
            </ul>
          </div>
        )}
        {(state.status === "unconfigured" || state.status === "failed") && (
          <div className="alert alert--warn" role="alert">
            <strong>
              {state.status === "unconfigured"
                ? "Formuläret kan inte skicka e-post just nu"
                : "Förfrågan kunde inte skickas"}
            </strong>
            <p>
              Mejla oss på <a href={state.mailto ?? `mailto:${SITE.orderEmail}`}>{SITE.orderEmail}</a> eller ring{" "}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>. Klickar du på mejladressen följer det du
              skrivit med i mejlet.
            </p>
          </div>
        )}
      </div>

      <Field name="galler" required full error={errors.galler} value={galler} onChange={setGaller} />
      <Field name="modell" error={errors.modell} />
      <Field name="serienummer" optional error={errors.serienummer} />
      <Field name="foretag" required autoComplete="organization" error={errors.foretag} />
      <Field name="kontakt" required autoComplete="name" error={errors.kontakt} />
      <Field name="telefon" type="tel" required autoComplete="tel" inputMode="tel" error={errors.telefon} />
      <Field name="epost" type="email" required autoComplete="email" inputMode="email" error={errors.epost} />

      <div className="field field--full">
        <label htmlFor="f-bradska">{FIELD_LABEL.bradska}</label>
        <select id="f-bradska" name="bradska" defaultValue="dagar">
          {URGENCY.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field field--full">
        <label htmlFor="f-beskrivning">{FIELD_LABEL.beskrivning}</label>
        <textarea id="f-beskrivning" name="beskrivning" rows={5} />
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor="f-webbplats">Lämna tomt</label>
        <input id="f-webbplats" name="webbplats" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form__actions">
        <button type="submit" className="btn" disabled={pending}>
          {pending ? "Skickar…" : "Skicka förfrågan"}
        </button>
        <p className="form__note">
          Fält med * är obligatoriska. Vi använder uppgifterna bara för att besvara förfrågan.{" "}
          <a href="/integritetspolicy">Integritetspolicy</a>
        </p>
      </div>
    </form>
  );
}
