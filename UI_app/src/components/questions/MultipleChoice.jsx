import { useState } from "react";
import styles from "./StyleQuestion.module.scss";

function MultipleChoice({ question, onAnswer }) {
  const [valgtIndex, setValgtIndex] = useState(null);

  const handleSvar = (index) => {
    if (valgtIndex !== null) return;
    setValgtIndex(index);
    onAnswer(index === question.correct, question.explanation);
  };

  const isCorrect = valgtIndex !== null && valgtIndex === question.correct;

  return (
    <div className={styles.questionWrapper}>
      <div className={styles.multipleChoice}>
        <p className={styles.questionText}>{question.question}</p>

        <ul className={styles.optionsList}>
          {question.options.map((option, index) => {
            let stateClass = "";
            if (valgtIndex !== null) {
              if (index === question.correct) stateClass = styles.correct;
              else if (index === valgtIndex)  stateClass = styles.wrong;
            }

            return (
              <li key={index}>
                <button
                  className={`${styles.optionBtn} ${stateClass}`}
                  onClick={() => handleSvar(index)}
                  disabled={valgtIndex !== null}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>

        {valgtIndex !== null && (
          <p
            role="alert"
            className={`${styles.feedbackText} ${isCorrect ? styles.correct : styles.wrong}`}
          >
            {isCorrect
              ? "Riktig!"
              : `Feil! Riktig svar er: ${question.options[question.correct]}`}
          </p>
        )}
      </div>
    </div>
  );
}

export default MultipleChoice;
