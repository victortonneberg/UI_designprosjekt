import { useState } from "react";
import styles from "./StyleQuestion.module.scss";

const DragAndDrop = ({ question, onAnswer }) => {
  const [dropped, setDropped] = useState("");
  const [answered, setAnswered] = useState(false);

  function allowDrop(e) { e.preventDefault(); }
  function drag(e) { e.dataTransfer.setData("text", e.target.innerText); }
  function drop(e) {
    e.preventDefault();
    if (answered) return;
    const value = e.dataTransfer.getData("text");
    setDropped(value);
  }
  function confirm() {
    if (!dropped || answered) return;
    setAnswered(true);
    onAnswer(dropped === question.correct, question.explanation);
  }
  function reset() {
    if (answered) return;
    setDropped("");
  }

  const isCorrect = answered && dropped === question.correct;

  return (
    <div className={styles.questionWrapper}>
      <div className={styles.dragAndDrop}>
        <h3>{question.question}</h3>

        <div className={styles.codeBlock}>
          <span
            onDrop={drop}
            onDragOver={allowDrop}
            className={`${styles.dropZone} ${dropped ? styles.filled : ""}`}
          >
            {dropped || "???"}
          </span>
        </div>

        <div className={styles.options}>
          {question.options.map((option) => (
            <div key={option} draggable onDragStart={drag} className={styles.option}>
              {option}
            </div>
          ))}
        </div>

        {!answered && (
          <div className={styles.dragActions}>
            <button className={styles.confirmBtn} onClick={confirm} disabled={!dropped}>
              Bekreft svar
            </button>
            <button className={styles.resetBtn} onClick={reset}>
              Reset
            </button>
          </div>
        )}

        {answered && (
          <p className={`${styles.result} ${isCorrect ? styles.correct : styles.wrong}`}>
            {isCorrect ? "Riktig!" : `Feil! Riktig svar er: ${question.correct}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;
