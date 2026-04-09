import { useGame } from "../../context/useGame";
import { questions, categoryByD20 } from "../../data/questions";
import MultipleChoice from "./MultipleChoice";
import DragAndDrop from "./DragAndDrop";

export default function QuestionCard({ d20Result, onAnswer }) {
  const { players, currentPlayerIndex } = useGame();

  const difficulty = players[currentPlayerIndex]?.difficulty ?? "easy";
  const category = categoryByD20[d20Result];
  const categoryQuestions = questions[category]?.[difficulty] ?? [];
  const question = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];

  if (!category || !question) return <p>Fant ikke spørsmål for terningresultat {d20Result}.</p>;

  switch (question.type) {
    case "mc":
      return <MultipleChoice question={question} onAnswer={onAnswer} />;
    case "code":
      return <CodeQuestion question={question} onAnswer={onAnswer} />;
    case "drag":
      return <DragAndDrop question={question} onAnswer={onAnswer} />;
    default:
      return <p>Ukjent spørsmålstype: {question.type}</p>;
  }
}
