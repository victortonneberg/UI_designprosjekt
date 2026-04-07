import SetupScreen from "./components/setup/SetupScreen";
import { GameProvider } from "./context/GameProvider";

function App() {
  return (
    <GameProvider>
      <SetupScreen />
    </GameProvider>
  );
}
export default App;
