import { useState, useRef } from "react";
import { categoryNames } from "../../data/questions";
import { useGame } from "../../context/useGame";
import "./dice.scss";

export default function D20Roller({ onRollComplete }) {
  const { selectedCategories } = useGame();
  const [result, setResult] = useState(null);
  const [displayValue, setDisplayValue] = useState(null);
  const [rolling, setRolling] = useState(false);
  const intervalRef = useRef(null);

  const roll = () => {
    const r = Math.floor(Math.random() * 20) + 1;
    setRolling(true);
    setDisplayValue(Math.floor(Math.random() * 20) + 1);

    const duration = 1000;
    const intervalMs = 60;
    const start = Date.now();

    // Denne arrow-funksjonen er generert med hjelp av Claude Code 13.04.26 med følgende prompt: "Er det mulig å endre på terningene, at det er en illusjon at terningen kastes? F.eks. at tallet går fort fra 1-20 og 1-6, også stopper den på det tallet generatoren lager. Logikken trengs ikke å endres på. Still spørsmål hvis du lurer på noe."
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      if (elapsed >= duration) {
        clearInterval(intervalRef.current);
        setDisplayValue(r);
        setRolling(false);
        setResult(r);
      } else {
        setDisplayValue(Math.floor(Math.random() * 20) + 1);
      }
    }, intervalMs);
  };

  const category = result
    ? selectedCategories[(result - 1) % selectedCategories.length]
    : null;
  const categoryName = category ? categoryNames[category] : null;

  return (
    <div className="diceContainer">
      <div className="diceArea diceArea--d20">
        <button
          type="button"
          className="diceButton diceButton--d20"
          onClick={roll}
          disabled={rolling || !!result}
        >
          Kast D20
        </button>
        {displayValue && (
          <>
            <p className="diceText" aria-live="polite" aria-atomic="true">
              Resultat:{" "}
              <strong className="diceResult diceResult--d20">
                {displayValue}
              </strong>
            </p>
            {!rolling && (
              <>
                <p className="diceText" aria-live="polite">
                  Kategori: <strong>{categoryName}</strong>
                </p>
                <button
                  type="button"
                  className="diceButton diceButton--d20"
                  onClick={() => onRollComplete(result)}
                >
                  Fortsett
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
