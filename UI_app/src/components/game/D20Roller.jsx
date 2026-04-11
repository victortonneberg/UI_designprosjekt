import { useState } from "react";
import "./dice.scss";

export default function D20Roller({ onRollComplete }) {
  const [result, setResult] = useState(null);

  const roll = () => {
    const r = Math.floor(Math.random() * 20) + 1;
    setResult(r);
  };

  return (
    <div className="diceArea diceArea--d20">
      <button type="button" onClick={roll} disabled={!!result}>
        Kast D20
      </button>
      {result && (
        <>
          <p>
            Resultat: <strong>{result}</strong>
          </p>
          <button type="button" onClick={() => onRollComplete(result)}>
            Fortsett
          </button>
        </>
      )}
    </div>
  );
}
