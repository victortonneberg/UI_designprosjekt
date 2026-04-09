import { useState } from "react";
import RulesModal from "./rulesButton/rulesButton";
import "../assets/styles/layout.scss";

export default function Layout({ children }) {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <header className="layout-header">
        <h1>Navn på spill...</h1>

        <nav>
          <button className="help-button" onClick={() => setShowRules(true)}>
            ?
          </button>
        </nav>
      </header>

      <main className="layout-main">{children}</main>

      <footer className="layout-footer">
        <p>2026 &copy; Spillnavn...</p>
      </footer>

      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </>
  );
}
