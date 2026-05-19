import { useGame } from "../../context/useGame";
import "./GameScreen.scss";

const difficultyLabel = {
  easy: "Lett",
  medium: "Medium",
  hard: "Vanskelig",
};

export default function PlayerInfo() {
  const { players, currentPlayerIndex } = useGame();

  const currentPlayer = players[currentPlayerIndex];

  if (!currentPlayer) return null;

  return (
    <div className="player-info" role="status" aria-live="polite" aria-atomic="true">
      <p className="player-turn">
        Det er <strong>{currentPlayer.name}</strong> sin tur
      </p>
      <p className="player-difficulty">
        {difficultyLabel[currentPlayer.difficulty]}
      </p>
    </div>
  );
}
