import { useMemo } from "react";
import { useGame } from "../../context/useGame";
import { questions, categoryByD20 } from "../../data/questions";
import MultipleChoice from "./MultipleChoice";
import DragAndDrop from "./DragAndDrop";

export default function QuestionCard({ d20Result, onAnswer }) {
  const { players, currentPlayerIndex } = useGame();

  const difficulty = players[currentPlayerIndex]?.difficulty ?? "easy";
  const category = categoryByD20[d20Result];
  const categoryQuestions = questions[category]?.[difficulty] ?? [];
  // Claude Agent kom med denne useMemo-løsningen med denne prompten: "Jeg opplever en feil i koden. Ved bossfight, hopper den veldig rart. Hvis man svarer på 1. spørsmål, hopper den videre til neste, og gir deg "feil svar". Dette skjer ikke kontinuerlig, men noen ganger. Mistenker at det har noe å gjøre med komponentets livssyklus."
  const question = useMemo(
    () =>
      categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)],
    [],
  );

  if (!category || !question)
    return <p>Fant ikke spørsmål for terningresultat {d20Result}.</p>;

  switch (question.type) {
    case "mc":
      return <MultipleChoice question={question} onAnswer={onAnswer} />;
    case "drag":
      return <DragAndDrop question={question} onAnswer={onAnswer} />;
    default:
      return <p>Ukjent spørsmålstype: {question.type}</p>;
  }
}
