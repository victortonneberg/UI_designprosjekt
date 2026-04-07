import { useState } from "react";
import { GameProvider } from "./context/GameProvider";
import SetupScreen from "./components/setup/SetupScreen";
import GameScreen from "./components/game/GameScreen";

function App() {
  const [screen, setScreen] = useState("setup");

  return (
    <GameProvider>
      {screen === "setup" && (
        <SetupScreen onStartGame={() => setScreen("game")} />
      )}
      {screen === "game" && <GameScreen />}
    </GameProvider>
  );
}
export default App;
