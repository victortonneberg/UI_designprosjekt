import { useState } from "react";
import { useGame } from "../../context/useGame";
import { categoryNames } from "../../data/questions";

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
    <article>
      <h1>Spilloppsett</h1>

      <label>Antall spillere:</label>
      <select
        value={antallSpillere}
        onChange={(e) => handleAntall(Number(e.target.value))}
      >
        {[1, 2, 3, 4].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>

      {spillere.map((spiller, i) => (
        <div key={i}>
          <h3>Spiller {i + 1}</h3>
          <input
            placeholder="Spillerens navn"
            value={spiller.name}
            onChange={(e) => handleChange(i, "name", e.target.value)}
          />
          <select
            value={spiller.difficulty}
            onChange={(e) => handleChange(i, "difficulty", e.target.value)}
          >
            <option value="easy">Lett</option>
            <option value="medium">Medium</option>
            <option value="hard">Vanskelig</option>
          </select>
        </div>
      ))}

      <fieldset>
        <legend>Kategorier:</legend>
        {alleKategorier.map((key) => (
          <label key={key}>
            <input
              type="checkbox"
              checked={valgtKategorier.includes(key)}
              onChange={() => toggleKategori(key)}
            />
            {categoryNames[key]}
          </label>
        ))}
      </fieldset>

      <button
        onClick={handleStart}
        disabled={
          spillere.some((s) => s.name.trim() === "") ||
          valgtKategorier.length === 0
        }
      >
        Start spill
      </button>
    </article>
  );
}
