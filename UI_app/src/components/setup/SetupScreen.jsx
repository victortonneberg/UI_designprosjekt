import { useState } from "react";
import { useGame } from "../../context/useGame";
import { categoryNames } from "../../data/questions";
import "./SetupScreen.scss";

const alleKategorier = Object.keys(categoryNames);

export default function SetupScreen({ onStartGame }) {
  const { setPlayers, setSelectedCategories } = useGame();

  const [antallSpillere, setAntallSpillere] = useState(2);
  const [spillere, setSpillere] = useState([
    { name: "", difficulty: "easy" },
    { name: "", difficulty: "easy" },
  ]);
  const [valgtKategorier, setValgtKategorier] = useState(alleKategorier);

  const toggleKategori = (key) => {
    setValgtKategorier((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  // Oppdater antall spillere og endrer spiller-listen hvis nødvendig:
  const handleAntall = (n) => {
    setAntallSpillere(n);
    setSpillere(
      // Lager en liste med n spillere: bruker eksisterende spiller hvis den finnes, ellers en tom standardspiller.
      // Github Copilot foreslo denne løsningen med Array.from.
      Array.from(
        { length: n },
        (_, i) => spillere[i] || { name: "", difficulty: "easy" },
      ),
    );
  };

  const handleChange = (index, field, value) => {
    const oppdatert = [...spillere];
    oppdatert[index][field] = value;
    setSpillere(oppdatert);
  };

  const handleStart = () => {
    setPlayers(spillere);
    setSelectedCategories(valgtKategorier);
    onStartGame();
  };

  return (
    <div className="setup-screen">
      <h1 className="setup-title">Spilloppsett</h1>

      <div className="setup-section">
        <span className="setup-section-label">Antall spillere</span>
        <div className="player-count-row">
          <select
            className="setup-select"
            value={antallSpillere}
            onChange={(e) => handleAntall(Number(e.target.value))}
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} spiller{n > 1 ? "e" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      {spillere.map((spiller, i) => (
        <div key={i} className="player-card">
          <div className="player-card-header">Spiller {i + 1}</div>
          <div className="player-fields">
            <input
              className="setup-input"
              placeholder="Spillerens navn"
              value={spiller.name}
              onChange={(e) => handleChange(i, "name", e.target.value)}
            />
            <select
              className="setup-select"
              value={spiller.difficulty}
              onChange={(e) => handleChange(i, "difficulty", e.target.value)}
            >
              <option value="easy">Lett</option>
              <option value="medium">Medium</option>
              <option value="hard">Vanskelig</option>
            </select>
          </div>
        </div>
      ))}

      <div className="setup-section">
        <span className="setup-section-label">Kategorier</span>
        <div className="category-grid">
          {alleKategorier.map((key) => (
            <label key={key} className="category-toggle">
              <input
                type="checkbox"
                checked={valgtKategorier.includes(key)}
                onChange={() => toggleKategori(key)}
              />
              {categoryNames[key]}
            </label>
          ))}
        </div>
      </div>

      <button
        className="btn-start"
        onClick={handleStart}
        disabled={
          spillere.some((s) => s.name.trim() === "") ||
          valgtKategorier.length === 0
        }
      >
        Start spill
      </button>
    </div>
  );
}
