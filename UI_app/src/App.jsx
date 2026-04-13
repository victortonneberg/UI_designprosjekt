import { useState } from "react";
import { GameProvider } from "./context/GameProvider";
import SetupScreen from "./components/setup/SetupScreen";
import GameScreen from "./components/game/GameScreen";
import Layout from "./components/Layout";

function App() {
  const [screen, setScreen] = useState("setup");

  return (
    <Layout onHome={() => setScreen("setup")}>
      <GameProvider>
        {screen === "setup" && (
          <SetupScreen onStartGame={() => setScreen("game")} />
        )}
        {screen === "game" && <GameScreen />}
      </GameProvider>
    </Layout>
  );
}
export default App;
