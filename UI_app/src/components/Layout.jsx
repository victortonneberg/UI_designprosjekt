import { useState } from "react";
import "../assets/styles/Layout.scss";
import RulesModal from "./rulesButton/rules";

export default function Layout({ children, onHome }) {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <header>
        <span
          className="game-title"
          onClick={onHome}
          style={{ cursor: "pointer" }}
        >
          Dungeons, Bugs & Bosses
        </span>
        <nav>
          <ul>
            <li>
              <button
                className="help-button"
                onClick={() => setShowRules(true)}
              >
                Regler
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>2026 &copy; Dungeons, Bugs & Bosses</p>
      </footer>

      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </>
  );
}
