/** Diagonalrandig platshållare som visas när en bild ännu inte levererats. */
export function Placeholder({ label = "Bild kommer" }: { label?: string }) {
  return (
    <div className="placeholder" aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}
