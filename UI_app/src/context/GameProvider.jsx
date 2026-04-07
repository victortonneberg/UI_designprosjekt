import { useState } from "react";
import { GameContext } from "./GameContext";

export const GameProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [phase, setPhase] = useState("roll-d20");
  const [activeBossFight, setActiveBossFight] = useState(false);

  const nextPlayer = () => {
    if (players.length === 0) return;

    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
    setPhase("roll-d20");
  };

  const startBossFight = () => {
    setActiveBossFight(true);
    setPhase("question");
  };

  const endBossFight = () => {
    setActiveBossFight(false);
    setPhase("roll-d20");
  };

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayers,
        currentPlayerIndex,
        phase,
        setPhase,
        nextPlayer,
        activeBossFight,
        setActiveBossFight,
        startBossFight,
        endBossFight,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
