import { useState } from "react"
import MultipleChoice from "./MultipleChoice"

const testSpørsmål = {
  question: "Hva er en array i programmering?",
  options: [
    { id: "A", text: "En enkelt variabel som lagrer én verdi" },
    { id: "B", text: "En liste som kan lagre flere verdier i én variabel" },
    { id: "C", text: "En funksjon som returnerer tall" },
    { id: "D", text: "Et nøkkelord for å lage løkker" },
  ],
  correct: "B",
}

export default function QuestionCard() {
  const [valgtSvar, setValgtSvar] = useState(null)

  return (
    <div>
      <MultipleChoice
        question={testSpørsmål}
        valgtSvar={valgtSvar}
        onSvar={setValgtSvar}
      />
    </div>
  )
}