import React from "react";

export default function RulesModal({ onClose }) {
  return (
    <div className="rules-modal" onClick={onClose}>
      <div className="rules-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <h2>Regler</h2>

        <div className="rules-text">
          <ul>
            <li>Boss: Når man lander på eller forbi boss...</li>
            <li>Regel 2:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
