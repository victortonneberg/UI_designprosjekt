// Spørsmål organisert etter kategori og vanskelighetsgrad.
// D20-resultat bestemmer kategori, spillerens difficulty bestemmer spørsmålsnivå.

export const categoryByD20 = {
  1:  "intro",
  2:  "intro",
  3:  "variables",
  4:  "variables",
  5:  "debugging",
  6:  "debugging",
  7:  "conditionals",
  8:  "conditionals",
  9:  "conditionals",
  10: "arrays",
  11: "arrays",
  12: "loops",
  13: "loops",
  14: "loops",
  15: "functions",
  16: "functions",
  17: "functions",
  18: "userinput",
  19: "userinput",
  20: "userinput",
};

export const categoryNames = {
  intro:        "Introduksjon til programmering",
  variables:    "Variabler",
  debugging:    "Feilsøking",
  conditionals: "Betinget logikk",
  arrays:       "Arrayer og objekter",
  loops:        "Løkker",
  functions:    "Funksjoner",
  userinput:    "Brukerinput",
};

export const questions = {
  // ─── 1. Introduksjon til programmering ───────────────────────────────────
  intro: {
    easy: [
      {
        id: "intro-e1",
        type: "mc",
        question: "Hva er programmering?",
        options: [
          "Å designe nettsider med bilder og farger",
          "Å gi datamaskinen en sekvens av instruksjoner den skal følge",
          "Å koble til internett",
          "Å installere programmer på en datamaskin",
        ],
        correct: 1,
        explanation: "Programmering handler om å skrive instruksjoner (kode) som datamaskinen utfører i riktig rekkefølge.",
      },
      {
        id: "intro-e2",
        type: "drag",
        question: "Dra riktig begrep: En steg-for-steg-oppskrift datamaskinen følger for å løse et problem kalles en …",
        options: ["algoritme", "variabel", "funksjon"],
        correct: "algoritme",
        explanation: "En algoritme er en endelig, presis sekvens av steg for å løse et problem.",
      },
    ],
    medium: [
      {
        id: "intro-m1",
        type: "mc",
        question: "Hva er en kommentar i kode, og hva brukes den til?",
        options: [
          "En feil i koden som må rettes opp",
          "Tekst som forklarer koden, og som datamaskinen ignorerer",
          "En variabel uten verdi",
          "En spesiell type løkke",
        ],
        correct: 1,
        explanation: "Kommentarer (// eller /* */) er forklarende tekst for programmereren. De kjøres ikke av datamaskinen.",
      },
      {
        id: "intro-m2",
        type: "drag",
        question: "Dra riktig begrep: Et program skrevet i vanlig språk (ikke kode) for å planlegge løsningen kalles …",
        options: ["pseudokode", "algoritme", "variabel"],
        correct: "pseudokode",
        explanation: "Pseudokode er en uformell beskrivelse av programlogikk skrevet i vanlig språk, brukt til planlegging.",
      },
    ],
    hard: [
      {
        id: "intro-h1",
        type: "mc",
        question: "Hva er viktigst for at kode skal være lett å lese og forstå for andre?",
        options: [
          "At koden er så kort som mulig",
          "At variabel- og funksjonsnavn beskriver hva de gjør",
          "At det ikke finnes kommentarer",
          "At all kode skrives på én linje",
        ],
        correct: 1,
        explanation: "Gode, beskrivende navn gjør koden selvforklarende og enklere for andre (og deg selv) å forstå.",
      },
      {
        id: "intro-h2",
        type: "drag",
        question: "Dra riktig begrep: En samling ferdiglagde funksjoner og verktøy du kan bruke i programmet ditt kalles et …",
        options: ["bibliotek", "algoritme", "scope"],
        correct: "bibliotek",
        explanation: "Et bibliotek (library) er gjenbrukbar kode andre har skrevet, som du kan importere og bruke i ditt program.",
      },
    ],
  },

  // ─── 2. Variabler ────────────────────────────────────────────────────────
  variables: {
    easy: [
      {
        id: "var-e1",
        type: "mc",
        question: "Hva er riktig syntaks for å lage en variabel som kan endres?",
        options: ["const navn = 'Ola'", "let navn = 'Ola'", "variable navn = 'Ola'", "var: navn = 'Ola'"],
        correct: 1,
        explanation: "'let' brukes for variabler som kan om-tildeles. 'const' brukes for konstanter.",
      },
      {
        id: "var-e2",
        type: "drag",
        question: "Dra riktig nøkkelord for å deklarere en variabel som ikke kan endres:",
        options: ["let", "const", "var"],
        correct: "const",
        explanation: "'const' brukes for å deklarere en variabel som ikke kan om-tildeles.",
      },
    ],
    medium: [
      {
        id: "var-m1",
        type: "mc",
        question: "Hva er resultatet av typeof null?",
        options: ["'null'", "'undefined'", "'object'", "'boolean'"],
        correct: 2,
        explanation: "typeof null returnerer 'object' – dette er en kjent historisk feil i JavaScript.",
      },
      {
        id: "var-m2",
        type: "drag",
        question: "Dra riktig operator for å sjekke både verdi og type:",
        options: ["==", "===", "="],
        correct: "===",
        explanation: "=== sjekker både verdi og type (strict equality).",
      },
    ],
    hard: [
      {
        id: "var-h1",
        type: "mc",
        question: "Hva er forskjellen mellom var og let i en for-løkke?",
        options: [
          "Ingen forskjell",
          "var er block-scoped, let er function-scoped",
          "let er block-scoped, var er function-scoped",
          "let kan ikke brukes i løkker",
        ],
        correct: 2,
        explanation: "let er block-scoped (begrenset til blokken den er i), mens var er function-scoped.",
      },
      {
        id: "var-h2",
        type: "drag",
        question: "Dra riktig nøkkelord: Hva skjer om du prøver å tilordne en ny verdi til en variabel deklarert med … ?",
        options: ["const", "let", "var"],
        correct: "const",
        explanation: "Forsøk på å endre en const-variabel gir en TypeError. let og var kan begge tilordnes på nytt.",
      },
    ],
  },

  // ─── 3. Feilsøking ───────────────────────────────────────────────────────
  debugging: {
    easy: [
      {
        id: "dbg-e1",
        type: "mc",
        question: "Hva er en 'bug' i programmering?",
        options: [
          "Et insekt som har kommet inn i datamaskinen",
          "En feil i koden som gjør at programmet ikke oppfører seg riktig",
          "En type variabel",
          "En kommentar i koden",
        ],
        correct: 1,
        explanation: "En bug er en feil i koden. Begrepet stammer fra 1940-tallet da en faktisk møll ble funnet i et relé.",
      },
      {
        id: "dbg-e2",
        type: "drag",
        question: "Dra riktig metode for å skrive ut en verdi i nettleserens konsoll for feilsøking:",
        options: ["console.log()", "print()", "alert()"],
        correct: "console.log()",
        explanation: "console.log() er det vanligste verktøyet for å inspisere verdier under kjøring.",
      },
    ],
    medium: [
      {
        id: "dbg-m1",
        type: "mc",
        question: "Hva er en syntaksfeil?",
        options: [
          "Programmet krasjer fordi logikken er feil",
          "Koden bryter reglene for språkets grammatikk og kan ikke kjøres",
          "En variabel har feil verdi",
          "En funksjon returnerer undefined",
        ],
        correct: 1,
        explanation: "En syntaksfeil betyr at koden ikke følger språkets grammatikkregler, f.eks. manglende parentes eller feilstavet nøkkelord.",
      },
      {
        id: "dbg-m2",
        type: "drag",
        question: "Dra riktig nøkkelord: Du vil skrive en melding i konsollen for å sjekke verdien av en variabel. Hvilken metode bruker du?",
        options: ["console.log()", "alert()", "prompt()"],
        correct: "console.log()",
        explanation: "console.log() er standardmåten å inspisere verdier på under feilsøking.",
      },
    ],
    hard: [
      {
        id: "dbg-h1",
        type: "mc",
        question: "Hva er en logisk feil (logic error)?",
        options: [
          "Koden kan ikke kjøres fordi det er skrivefeil",
          "Programmet kjører uten feilmelding, men gir feil resultat",
          "En variabel er ikke deklarert",
          "Programmet krasjer med en gang det starter",
        ],
        correct: 1,
        explanation: "En logisk feil gjør at programmet kjører uten å krasje, men produserer feil output fordi algoritmens logikk er gal.",
      },
      {
        id: "dbg-h2",
        type: "drag",
        question: "Dra riktig svar: Hva skrives ut av console.log(1 + '2') ?",
        options: ["'12'", "3", "NaN"],
        correct: "'12'",
        explanation: "Når du legger til et tall og en streng, konverterer JavaScript tallet til streng og slår dem sammen: 1 + '2' = '12'.",
      },
    ],
  },

  // ─── 4. Betinget logikk ──────────────────────────────────────────────────
  conditionals: {
    easy: [
      {
        id: "cond-e1",
        type: "mc",
        question: "Hva gjør en if-setning?",
        options: [
          "Gjentar kode flere ganger",
          "Kjører en blokk med kode bare hvis en betingelse er sann",
          "Definerer en funksjon",
          "Deklarerer en variabel",
        ],
        correct: 1,
        explanation: "if-setningen utfører kodeblokken kun når betingelsen evalueres til true.",
      },
      {
        id: "cond-e2",
        type: "drag",
        question: "Dra riktig nøkkelord for kodeblokken som kjøres når if-betingelsen er usann:",
        options: ["else", "then", "default"],
        correct: "else",
        explanation: "'else' kjøres når if-betingelsen er false.",
      },
    ],
    medium: [
      {
        id: "cond-m1",
        type: "mc",
        question: "Hva er den ternære operatoren i JavaScript?",
        options: [
          "En operator med tre operander på formen: betingelse ? verdiHvisTrue : verdiHvisFalse",
          "En operator som sammenligner tre verdier",
          "En forkortelse for tre if-setninger",
          "En operator som alltid returnerer true",
        ],
        correct: 0,
        explanation: "Ternær: `x > 0 ? 'positiv' : 'ikke positiv'` – en kompakt if/else på én linje.",
      },
      {
        id: "cond-m2",
        type: "drag",
        question: "Dra riktig operator for å kombinere to betingelser der begge må være sanne:",
        options: ["&&", "||", "!"],
        correct: "&&",
        explanation: "&& er logisk OG – begge sider må være true for at uttrykket skal bli true.",
      },
    ],
    hard: [
      {
        id: "cond-h1",
        type: "mc",
        question: "Hva er forskjellen mellom == og === i en betingelse?",
        options: [
          "Ingen forskjell",
          "== sjekker bare verdi og konverterer typer; === sjekker både verdi og type",
          "=== sjekker bare verdi; == sjekker type også",
          "== brukes bare med tall",
        ],
        correct: 1,
        explanation: "== gjør type-koersjon (f.eks. '5' == 5 er true). === krever samme type OG verdi.",
      },
      {
        id: "cond-h2",
        type: "drag",
        question: "Dra riktig nøkkelord for en flerveistest av én verdi (alternativ til mange if/else if):",
        options: ["switch", "match", "select"],
        correct: "switch",
        explanation: "switch-setningen sammenligner én verdi mot flere case-grener og er ofte mer lesbar enn mange if/else if.",
      },
    ],
  },

  // ─── 5. Arrayer og objekter ──────────────────────────────────────────────
  arrays: {
    easy: [
      {
        id: "arr-e1",
        type: "mc",
        question: "Hvordan får du det første elementet i en array kalt 'liste'?",
        options: ["liste[1]", "liste[0]", "liste.first()", "liste.get(0)"],
        correct: 1,
        explanation: "Arrays er nullindekserte – det første elementet er på indeks 0.",
      },
      {
        id: "arr-e2",
        type: "drag",
        question: "Dra riktig metode for å legge til et element på slutten av en array:",
        options: ["push()", "pop()", "shift()"],
        correct: "push()",
        explanation: "push() legger til ett eller flere elementer på slutten av arrayen.",
      },
    ],
    medium: [
      {
        id: "arr-m1",
        type: "mc",
        question: "Hvilken metode lager en ny array med bare elementene som oppfyller en betingelse?",
        options: ["map()", "filter()", "reduce()", "find()"],
        correct: 1,
        explanation: "filter() returnerer en ny array med elementene der callback-funksjonen returnerer true.",
      },
      {
        id: "arr-m2",
        type: "drag",
        question: "Dra riktig notasjon for å lese en egenskap kalt 'navn' fra et objekt kalt 'person':",
        options: ["person.navn", "person[navn]", "person->navn"],
        correct: "person.navn",
        explanation: "Dot-notasjon (person.navn) er den vanligste måten å lese egenskaper fra et objekt på.",
      },
    ],
    hard: [
      {
        id: "arr-h1",
        type: "mc",
        question: "Hva er forskjellen mellom push() og pop() på en array?",
        options: [
          "push() fjerner det siste elementet, pop() legger til",
          "push() legger til et element på slutten, pop() fjerner det siste elementet",
          "De gjør det samme",
          "push() legger til foran, pop() fjerner foran",
        ],
        correct: 1,
        explanation: "push() legger til ett eller flere elementer på slutten. pop() fjerner og returnerer det siste elementet.",
      },
      {
        id: "arr-h2",
        type: "drag",
        question: "Dra riktig metode for å finne antall elementer i en array kalt 'liste':",
        options: ["liste.length", "liste.size()", "liste.count()"],
        correct: "liste.length",
        explanation: ".length er en egenskap (ikke en metode) som gir antall elementer i arrayen.",
      },
    ],
  },

  // ─── 6. Løkker ───────────────────────────────────────────────────────────
  loops: {
    easy: [
      {
        id: "loop-e1",
        type: "mc",
        question: "Hva gjør en for-løkke?",
        options: [
          "Kjører kode én gang",
          "Gjentar kode et bestemt antall ganger",
          "Stopper programmet",
          "Lager en ny funksjon",
        ],
        correct: 1,
        explanation: "En for-løkke gjentar en blokk med kode et bestemt antall ganger basert på en teller.",
      },
      {
        id: "loop-e2",
        type: "drag",
        question: "Dra riktig nøkkelord for å avslutte en løkke umiddelbart:",
        options: ["break", "stop", "exit"],
        correct: "break",
        explanation: "'break' avbryter løkken umiddelbart og hopper ut av den.",
      },
    ],
    medium: [
      {
        id: "loop-m1",
        type: "mc",
        question: "Hva gjør 'continue' inne i en løkke?",
        options: [
          "Stopper løkken helt",
          "Hopper over resten av denne iterasjonen og går til neste",
          "Starter løkken på nytt fra begynnelsen",
          "Gjør ingenting",
        ],
        correct: 1,
        explanation: "'continue' hopper over resten av gjeldende iterasjon og fortsetter med neste.",
      },
      {
        id: "loop-m2",
        type: "drag",
        question: "Dra riktig løkketype som fortsetter så lenge en betingelse er sann:",
        options: ["while", "for", "do"],
        correct: "while",
        explanation: "while-løkken kjører kroppen sin så lenge betingelsen er true, uten en forhåndsbestemt teller.",
      },
    ],
    hard: [
      {
        id: "loop-h1",
        type: "mc",
        question: "Hva er forskjellen mellom for...in og for...of?",
        options: [
          "Ingen forskjell",
          "for...in itererer over nøkler/indekser, for...of itererer over verdier",
          "for...of itererer over nøkler/indekser, for...in itererer over verdier",
          "for...in brukes bare på objekter, for...of bare på arrays",
        ],
        correct: 1,
        explanation: "for...in gir nøkler/indekser; for...of gir selve verdiene direkte.",
      },
      {
        id: "loop-h2",
        type: "drag",
        question: "Dra riktig array-metode for å kjøre en funksjon på hvert element uten å lage ny array:",
        options: ["forEach()", "map()", "filter()"],
        correct: "forEach()",
        explanation: "forEach() kjører callback-funksjonen for hvert element, men returnerer undefined (lager ikke ny array).",
      },
    ],
  },

  // ─── 7. Funksjoner ───────────────────────────────────────────────────────
  functions: {
    easy: [
      {
        id: "fn-e1",
        type: "mc",
        question: "Hva gjør en funksjon i JavaScript?",
        options: [
          "Lagrer en verdi permanent",
          "Utfører en gjenbrukbar blokk med kode når den kalles",
          "Lager en ny variabel automatisk",
          "Printer alltid noe til konsollen",
        ],
        correct: 1,
        explanation: "En funksjon er en gjenbrukbar blokk med kode som kjøres når den kalles.",
      },
      {
        id: "fn-e2",
        type: "drag",
        question: "Dra riktig nøkkelord for å definere en funksjon:",
        options: ["function", "func", "def"],
        correct: "function",
        explanation: "I JavaScript bruker man nøkkelordet 'function' for å deklarere en navngitt funksjon.",
      },
    ],
    medium: [
      {
        id: "fn-m1",
        type: "mc",
        question: "Hva returnerer en funksjon som ikke har en eksplisitt return-setning?",
        options: ["0", "null", "undefined", "false"],
        correct: 2,
        explanation: "En funksjon uten eksplisitt return-setning returnerer undefined.",
      },
      {
        id: "fn-m2",
        type: "drag",
        question: "Dra riktig symbol som brukes i en pilfunksjon (arrow function):",
        options: ["=>", "->", ">>"],
        correct: "=>",
        explanation: "Arrow functions bruker => som syntaks: const fn = (x) => x * 2",
      },
    ],
    hard: [
      {
        id: "fn-h1",
        type: "mc",
        question: "Hva er forskjellen mellom en parameter og et argument?",
        options: [
          "De er det samme",
          "En parameter er variabelen i funksjonsdefinisjonen; et argument er verdien som sendes inn ved kall",
          "Et argument er variabelen i definisjonen; en parameter er verdien ved kall",
          "Parametere brukes bare i pilfunksjoner",
        ],
        correct: 1,
        explanation: "Parameter: navnene i funksjonsdefinisjonen (function legg(a, b)). Argument: de faktiske verdiene du sender inn (legg(3, 4)).",
      },
      {
        id: "fn-h2",
        type: "drag",
        question: "Dra riktig nøkkelord: Hva brukes for å sende en verdi tilbake fra en funksjon?",
        options: ["return", "send", "output"],
        correct: "return",
        explanation: "'return' avslutter funksjonen og sender en verdi tilbake til der funksjonen ble kalt.",
      },
    ],
  },

  // ─── 8. Brukerinput ──────────────────────────────────────────────────────
  userinput: {
    easy: [
      {
        id: "ui-e1",
        type: "mc",
        question: "Hva gjør prompt() i JavaScript?",
        options: [
          "Viser en melding i konsollen",
          "Viser en dialogboks der brukeren kan skrive inn tekst",
          "Sender et skjema til serveren",
          "Henter et HTML-element",
        ],
        correct: 1,
        explanation: "prompt() viser en nettleserdialog med et tekstfelt og returnerer det brukeren skriver inn.",
      },
      {
        id: "ui-e2",
        type: "drag",
        question: "Dra riktig hendelsesnavn for å reagere på et knappetrykk:",
        options: ["click", "keydown", "submit"],
        correct: "click",
        explanation: "Hendelsen 'click' fyres når brukeren klikker på et element.",
      },
    ],
    medium: [
      {
        id: "ui-m1",
        type: "mc",
        question: "Hva returnerer prompt() hvis brukeren trykker Avbryt?",
        options: ["''", "undefined", "null", "false"],
        correct: 2,
        explanation: "Hvis brukeren avbryter prompt()-dialogen returneres null (ikke en tom streng).",
      },
      {
        id: "ui-m2",
        type: "drag",
        question: "Dra riktig egenskap for å hente tekstverdien fra et input-felt i DOM:",
        options: [".value", ".text", ".content"],
        correct: ".value",
        explanation: "inputElement.value gir deg den nåværende teksten brukeren har skrevet inn i feltet.",
      },
    ],
    hard: [
      {
        id: "ui-h1",
        type: "mc",
        question: "Hva gjør event.preventDefault() i en skjema-hendelseslytter?",
        options: [
          "Sletter innholdet i skjemaet",
          "Hindrer nettleseren fra å sende skjemaet og laste siden på nytt",
          "Validerer alle feltene automatisk",
          "Fjerner hendelseslytteren",
        ],
        correct: 1,
        explanation: "event.preventDefault() stopper nettleserens standardoppførsel – for skjemaer betyr det at siden ikke lastes på nytt ved innsending.",
      },
      {
        id: "ui-h2",
        type: "drag",
        question: "Dra riktig hendelsesnavn for å fange opp innsending av et HTML-skjema:",
        options: ["submit", "change", "input"],
        correct: "submit",
        explanation: "Hendelsen 'submit' fyres når brukeren sender inn et skjema (klikker send-knapp eller trykker Enter).",
      },
    ],
  },
};
