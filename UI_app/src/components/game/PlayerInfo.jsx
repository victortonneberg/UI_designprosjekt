import { useGame } from "../../context/useGame";

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
    <div>
      <p>Det er <strong>{currentPlayer.name}</strong> sin tur</p>
      <p>Vanskelighetsgrad: <strong>{difficultyLabel[currentPlayer.difficulty]}</strong></p>
    </div>
  );
}
