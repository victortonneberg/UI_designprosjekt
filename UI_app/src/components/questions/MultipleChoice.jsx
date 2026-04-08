import { useState } from "react";

function MultipleChoice({ question, onAnswer }) {
  const [valgtIndex, setValgtIndex] = useState(null);

  const handleSvar = (index) => {
    if (valgtIndex !== null) return;
    setValgtIndex(index);
    onAnswer(index === question.correct);
  };

  return (
    <div>
      <p>{question.question}</p>

      {question.options.map((option, index) => (
        <button key={index} onClick={() => handleSvar(index)}>
          {option}
        </button>
      ))}

      {valgtIndex !== null && (
        <p>
          {valgtIndex === question.correct
            ? "Riktig!"
            : `Feil! Riktig svar er: ${question.options[question.correct]}`}
        </p>
      )}
    </div>
  );
}

export default MultipleChoice;
