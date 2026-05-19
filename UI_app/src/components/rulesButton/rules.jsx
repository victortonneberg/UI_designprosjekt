import { useEffect, useRef } from "react";

export default function RulesModal({ onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="rules-modal" onClick={onClose}>
      <div
        className="rules-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rules-modal-title"
        ref={dialogRef}
      >
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Lukk regler"
          ref={closeRef}
        >
          ×
        </button>

        <h2 id="rules-modal-title">Regler</h2>

        <div className="rules-text">
          <h3>Oppsett</h3>
          <p>
            Velg vanskelighetsgrad og huk av hvilke kapitler som skal inkluderes
            i spillet før dere begynner.
          </p>

          <h3>Spillets gang</h3>
          <p>
            Kast en D20 for å bestemme kategori. Svarer du riktig, kaster du en
            D6 og rykker frem det antallet ruter.
          </p>

          <h3>Wildcard</h3>
          <p>
            Lander du på en stjerne, trekker du et wildcard. Kortet kan benyttes
            når som helst i løpet av spillet.
          </p>

          <h3>Bosskamp</h3>
          <p>
            Lander du på eller passerer en boss-rute, stanser du der. I neste
            runde kjemper du mot bossen: kast en D20 for å bestemme kategori og
            besvar <strong>to spørsmål</strong> innen{" "}
            <strong>60 sekunder</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
