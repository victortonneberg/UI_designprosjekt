import { useState, useRef } from "react";
import "../assets/styles/Layout.scss";
import RulesModal from "./rulesButton/rules";

export default function Layout({ children, onHome }) {
  const [showRules, setShowRules] = useState(false);
  const rulesButtonRef = useRef(null);

  const openRules = () => setShowRules(true);
  const closeRules = () => {
    setShowRules(false);
    requestAnimationFrame(() => rulesButtonRef.current?.focus());
  };

  return (
    <>
      <header>
        <button
          className="game-title"
          onClick={onHome}
          aria-label="Gå til startside – Dungeons & Bosses"
        >
          Dungeons & Bosses
        </button>
        <nav aria-label="Navigasjon">
          <ul>
            <li>
              <button
                className="help-button"
                onClick={openRules}
                ref={rulesButtonRef}
                aria-haspopup="dialog"
                aria-expanded={showRules}
              >
                Regler
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>2026 &copy; Dungeons & Bosses</p>
      </footer>

      {showRules && <RulesModal onClose={closeRules} />}
    </>
  );
}
