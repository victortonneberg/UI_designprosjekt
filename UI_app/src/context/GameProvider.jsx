import { useState } from "react";
import { GameContext } from "./GameContext";

export const GameProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [phase, setPhase] = useState("roll-d20");
  const [activeBossFight, setActiveBossFight] = useState(false);
  const [d20Result, setD20Result] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([
    "variables", "functions", "arrays", "loops", "dom",
  ]);

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

  // Kilde: https://www.w3schools.com/react/react_usecontext.asp
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
        d20Result,
        setD20Result,
        selectedCategories,
        setSelectedCategories,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
