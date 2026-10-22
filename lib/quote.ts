/** Händelse som förifyller offertformulärets "Gäller"-fält. */
export const QUOTE_EVENT = "mp:offert";

export function requestQuote(subject: string) {
  window.dispatchEvent(new CustomEvent<string>(QUOTE_EVENT, { detail: subject }));
  const target = document.getElementById("offert");
  if (target) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", "#offert");
  }
}
