import { useState } from "react";
import styles from "./StyleQuestion.module.scss";

const DragAndDrop = () => {
  const [dropped, setDropped] = useState("");
  const [result, setResult] = useState(null);
  const correctAnswer = "===";

  function allowDrop(e) { e.preventDefault(); }
  function drag(e) { e.dataTransfer.setData("text", e.target.innerText); }
  function drop(e) {
    e.preventDefault();
    const value = e.dataTransfer.getData("text");
    setDropped(value);
    setResult(value === correctAnswer);
  }
  function reset() {
    setDropped("");
    setResult(null);
  }

  return (
    <div className={styles.dragAndDrop}>
      <h3>Dra riktig operator inn i koden:</h3>

      <pre className={styles.codeBlock}>
        {"if (name "}
        <span
          onDrop={drop}
          onDragOver={allowDrop}
          className={`${styles.dropZone} ${dropped ? styles.filled : ""}`}
        >
          {dropped || "???"}
        </span>
        {' "")'}
      </pre>

      <div className={styles.options}>
        {["==", "===", "="].map((option) => (
          <div key={option} draggable onDragStart={drag} className={styles.option}>
            {option}
          </div>
        ))}
      </div>

      <button onClick={reset} className={styles.resetBtn}>Reset</button>

      {result !== null && (
        <p className={`${styles.result} ${result ? styles.correct : styles.wrong}`}>
          {result ? " Riktig! Bra jobbet!" : " Feil, prøv igjen"}
        </p>
      )}
    </div>
  );
};

export default DragAndDrop;