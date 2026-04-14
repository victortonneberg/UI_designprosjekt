import { useState, useRef } from "react";
import "./dice.scss";

export default function D6Roller({ onRollComplete }) {
  const [result, setResult] = useState(null);
  const [displayValue, setDisplayValue] = useState(null);
  const [rolling, setRolling] = useState(false);
  const intervalRef = useRef(null);

  const roll = () => {
    const r = Math.floor(Math.random() * 6) + 1;
    setRolling(true);
    setDisplayValue(Math.floor(Math.random() * 6) + 1);

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
        setDisplayValue(Math.floor(Math.random() * 6) + 1);
      }
    }, intervalMs);
  };

  return (
    <div className="diceContainer">
      <span className="diceText diceText--d6">Riktig svar!</span>
      <div className="diceArea diceArea--d6">
        <button
          type="button"
          className="diceButton diceButton--d6"
          onClick={roll}
          disabled={rolling || !!result}
        >
          Kast D6
        </button>
        {displayValue && (
          <>
            <p className="diceText diceText--d6">
              Flytt brikken{" "}
              <span className="diceResult diceResult--d6">{displayValue}</span>{" "}
              ruter fremover!
            </p>
            {!rolling && (
              <button
                type="button"
                className="diceButton diceButton--d6"
                onClick={() => onRollComplete(result)}
              >
                Neste spiller
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
