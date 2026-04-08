import { useState } from "react"
import "./D6dice.scss"

export default function D6dice() {
  const [results, setResults] = useState({
    d20: "",
    d6: "",
  })

  const rollDie = (key, sides) => {
    setResults((previousResults) => ({
      ...previousResults,
      [key]: Math.floor(Math.random() * sides) + 1,
    }))
  }

  return (
    <section className="diceContainer" aria-label="Terningkast">
      <div className="diceArea diceArea--d20">
        <button type="button" className="diceButton diceButton--d20" onClick={() => rollDie("d20", 20)}>
          Roll d20
        </button>
        <p className="diceText diceText--d20">
          Vanskelighetsgrad:
          <span id="d20Result" className="diceResult diceResult--d20"> {results.d20}</span>
        </p>
      </div>

      <div className="diceArea diceArea--d6">
        <button type="button" className="diceButton diceButton--d6" onClick={() => rollDie("d6", 6)}>
          Roll d6
        </button>
        <p className="diceText diceText--d6">
          Flytt brikken:
          <span id="d6Result" className="diceResult diceResult--d6"> {results.d6} </span> 
          ruter fremover!
        </p>
      </div>
    </section>
  )
}