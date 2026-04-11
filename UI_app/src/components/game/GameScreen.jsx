import { useState } from "react";
import { useGame } from "../../context/useGame";
import D20Roller from "./D20Roller";
import D6Roller from "./D6Roller";
import QuestionCard from "../questions/QuestionCard";
import PlayerInfo from "./PlayerInfo";
import BossFight from "../boss/BossFight";
import "./GameScreen.scss";

export default function GameScreen() {
  const {
    phase,
    setPhase,
    nextPlayer,
    d20Result,
    setD20Result,
    activeBossFight,
    startBossFight,
  } = useGame();
  const [forklaring, setForklaring] = useState(null);

  // Funksjon for å bestemme hvilken spillfase som skal rendre.
  function renderPhase() {
    switch (phase) {
      case "roll-d20":
        return (
          <D20Roller
            onRollComplete={(result) => {
              // Lagrer D20 resultatet i context, slik at det kan brukes i spørsmål-fasen for å avgjøre vanskelighetsgrad.
              setD20Result(result);
              setPhase("question");
            }}
          />
        );

      case "question":
        return (
          <QuestionCard
            d20Result={d20Result}
            onAnswer={(correct, explanation) => {
              if (!correct) setForklaring(explanation);
              setPhase(correct ? "roll-d6" : "next");
            }}
          />
        );

      case "roll-d6":
        return <D6Roller onRollComplete={() => nextPlayer()} />;

      case "next":
        return (
          <div className="wrong-answer-panel">
            <div className="wrong-label">Feil svar</div>
            <p>{forklaring}</p>
            <button
              className="btn-next"
              onClick={() => { setForklaring(null); nextPlayer(); }}
            >
              Neste spiller
            </button>
          </div>
        );

      default:
        return null;
    }
  }

  if (activeBossFight) {
    return (
      <div className="game-screen">
        <PlayerInfo />
        <div className="boss-area">
          <BossFight />
        </div>
      </div>
    );
  }

  return (
    <div className="game-screen">
      <PlayerInfo />
      <button className="btn-boss-activate" onClick={startBossFight}>
        Aktiver boss-kamp
      </button>
      <div className="phase-panel">{renderPhase()}</div>
    </div>
  );
}
