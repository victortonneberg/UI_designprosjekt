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

  // Keyboard/click alternative to drag: clicking an option selects it into the drop zone.
  // Clicking the already-selected option deselects it.
  function selectOption(option) {
    if (answered) return;
    setDropped((prev) => (prev === option ? "" : option));
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
            aria-label={dropped ? `Valgt svar: ${dropped}` : "Tom – dra eller klikk et svar hit"}
            aria-live="polite"
          >
            {dropped || "???"}
          </span>
        </div>

        <div className={styles.options} role="group" aria-label="Svaralternativer">
          {question.options.map((option) => (
            <button
              key={option}
              draggable
              onDragStart={drag}
              onClick={() => selectOption(option)}
              className={`${styles.option} ${dropped === option ? styles.optionSelected : ""}`}
              aria-pressed={dropped === option}
              disabled={answered}
            >
              {option}
            </button>
          ))}
        </div>

        {!answered && (
          <div className={styles.dragActions}>
            <button
              className={styles.confirmBtn}
              onClick={confirm}
              disabled={!dropped}
            >
              Bekreft svar
            </button>
            <button className={styles.resetBtn} onClick={reset}>
              Reset
            </button>
          </div>
        )}

        {answered && (
          <p
            role="alert"
            className={`${styles.result} ${isCorrect ? styles.correct : styles.wrong}`}
          >
            {isCorrect ? "Riktig!" : `Feil! Riktig svar er: ${question.correct}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;
