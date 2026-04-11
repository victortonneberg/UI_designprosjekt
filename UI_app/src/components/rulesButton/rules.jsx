export default function RulesModal({ onClose }) {
  return (
    <div className="rules-modal" onClick={onClose}>
      <div className="rules-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="rules-text">
          <h3>Oppsett</h3>
          <p>
            Velg vanskelighetsgrad og huk av hvilke kapitler som skal inkluderes
            i spillet før dere begynner.
          </p>

          <h3>Spillets gang</h3>
          <p>
            Kast en D20 for å bestemme kategori. Svarer du riktig, kaster du en
            D6 og rykker frem det antallet ruter.
          </p>

          <h3>Wildcard </h3>
          <p>
            Lander du på en stjerne, trekker du et wildcard. Kortet kan benyttes
            når som helst i løpet av spillet.
          </p>

          <h3>Bosskamp</h3>
          <p>
            Lander du på eller passerer en boss-rute, stanser du der. I neste
            runde kjemper du mot bossen: kast en D20 for å bestemme kategori og
            besvar <strong>to spørsmål</strong> innen{" "}
            <strong>60 sekunder</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
