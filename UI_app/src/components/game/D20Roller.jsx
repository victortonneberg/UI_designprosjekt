import { useState } from "react";
import { categoryNames } from "../../data/questions";
import { useGame } from "../../context/useGame";
import "./dice.scss";

export default function D20Roller({ onRollComplete }) {
  const { selectedCategories } = useGame();
  const [result, setResult] = useState(null);

  const roll = () => {
    const r = Math.floor(Math.random() * 20) + 1;
    setResult(r);
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
          disabled={!!result}
        >
          Kast D20
        </button>
        {result && (
          <>
            <p className="diceText">
              Resultat: <strong className="diceResult diceResult--d20">{result}</strong>
            </p>
            <p className="diceText">
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
      </div>
    </div>
  );
}
