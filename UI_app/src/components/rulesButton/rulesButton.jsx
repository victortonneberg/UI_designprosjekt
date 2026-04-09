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
            <li>
              Først: Velger man vanskelighetsgrad og huker av hvilke kapitler
              man vil spille med
            </li>
            <li>
              Generelt: Man kaster en D-20 terning for å bestemme kategori, om
              man svarer rett triller man deretter en d-6 terning som bestemmer
              antall ruter man flytter.
            </li>
            <li>
              Wild card: Når man lander på stjerne trekker man et kort og kan
              bruke det når man ønsker
            </li>
            <li>
              Boss: Når man lander på eller forbi boss, stopper man brikken på
              boss, og venter til neste runde med å bekjempe boss. Man får 60
              sekunder på å bekjempe boss. I boss-kampen triller man D-20
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
