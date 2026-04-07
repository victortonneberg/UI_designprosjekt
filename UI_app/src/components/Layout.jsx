import { useState } from "react";
import "../assets/styles/layout.scss";

export default function Layout({ children }) {
  const [showRules, setShowRules] = useState(false);
  const close = () => setShowRules(false);

  return (
    <>
      <header>
        Navn på spill...
        <nav>
          <ul>
            <li>
              <button onClick={() => setShowRules(true)}>?</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>2026 &copy; Spillnavn... </p>
      </footer>

      {showRules && (
        <div className="modal" onClick={close}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={close}>
              X
            </button>
            <h2>Regler</h2>
            <ul id="rulesBox">
              <li>
                Boss: Når man lander på eller forbi boss, stopper man brikken på
                boss, og venter til neste runde med å bekjempe boss. Man får 30
                sekunder på å bekjempe boss. I boss-kampen triller man D-20
                sidet terning
              </li>
              <li>Regel 2:</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
