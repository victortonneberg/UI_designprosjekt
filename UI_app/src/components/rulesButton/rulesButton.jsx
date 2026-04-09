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
              Generelt: Kast en D20 for å velge kategori, man får 60 sekund på å
              svare. Svarer du riktig, kaster du en D6 og flytter det antallet
              ruter.
            </li>
            <li>
              Wild card: Når man lander på stjerne trekker man et kort og kan
              bruke det når man ønsker
            </li>
            <li>
              Boss: O man lander på eller passer boss så stopp der. Neste runde
              kjemper du mot bossen. Du får 60 sekunder og må svare på to
              spørsmål. Kategori bestemmes med en D20, som vanlig.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
