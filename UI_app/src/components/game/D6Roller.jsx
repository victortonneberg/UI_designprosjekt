import { useState } from "react";
import "./dice.scss";

export default function D6Roller({ onRollComplete }) {
  const [result, setResult] = useState(null);

  const roll = () => {
    const r = Math.floor(Math.random() * 6) + 1;
    setResult(r);
  };

  return (
    <div className="diceContainer">
      <div className="diceArea diceArea--d6">
        <button
          type="button"
          className="diceButton diceButton--d6"
          onClick={roll}
          disabled={!!result}
        >
          Kast D6
        </button>
        {result && (
          <>
            <p className="diceText diceText--d6">
              Flytt brikken{" "}
              <span className="diceResult diceResult--d6">{result}</span>{" "}
              ruter fremover!
            </p>
            <button
              type="button"
              className="diceButton diceButton--d6"
              onClick={() => onRollComplete(result)}
            >
              Neste spiller
            </button>
          </>
        )}
      </div>
    </div>
  );
}
