import { useState, useRef } from "react";
import { useGame } from "../../context/useGame";
import QuestionCard from "../questions/QuestionCard";
import D6Roller from "../game/D6Roller";

export default function BossFight() {
  const { nextPlayer, endBossFight } = useGame();

  const d20Results = useRef([
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1,
  ]);

  const [bossPhase, setBossPhase] = useState("q1");
  const [explanation, setExplanation] = useState(null);

  function handleQ1Answer(correct, expl) {
    if (correct) {
      setBossPhase("q2");
    } else {
      setExplanation(expl);
      setBossPhase("failed");
    }
  }

  function handleQ2Answer(correct, expl) {
    if (correct) {
      setBossPhase("roll-d6");
    } else {
      setExplanation(expl);
      setBossPhase("failed");
    }
  }

  function handleFail() {
    endBossFight();
    nextPlayer();
  }

  switch (bossPhase) {
    case "q1":
      return (
        <>
          <h2>Boss-kamp – Spørsmål 1 av 2</h2>
          <QuestionCard
            key="boss-q1"
            d20Result={d20Results.current[0]}
            onAnswer={handleQ1Answer}
          />
        </>
      );

    case "q2":
      return (
        <>
          <h2>Boss-kamp – Spørsmål 2 av 2</h2>
          <QuestionCard
            key="boss-q2"
            d20Result={d20Results.current[1]}
            onAnswer={handleQ2Answer}
          />
        </>
      );

    case "roll-d6":
      return (
        <>
          <h2>Du bekjempet bossen! Kast terningen</h2>
          <D6Roller
            onRollComplete={() => {
              endBossFight();
              nextPlayer();
            }}
          />
        </>
      );

    case "failed":
      return (
        <div className="wrong-answer-panel">
          <div
            className="wrong-label"
            style={{ fontSize: "1.2em", marginBottom: "20px" }}
          >
            Bossen drepte deg, prøv igjen neste runde!
          </div>
          {explanation && <p>{explanation}</p>}
          <button className="btn-next" onClick={handleFail}>
            Neste spiller
          </button>
        </div>
      );

    default:
      return null;
  }
}
