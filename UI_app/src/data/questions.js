// Spørsmål organisert etter kategori og vanskelighetsgrad.
// D20-resultat bestemmer kategori, spillerens difficulty bestemmer spørsmålsnivå.

export const categoryByD20 = {
  1: "variables",
  2: "variables",
  3: "variables",
  4: "variables",
  5: "functions",
  6: "functions",
  7: "functions",
  8: "functions",
  9: "arrays",
  10: "arrays",
  11: "arrays",
  12: "arrays",
  13: "loops",
  14: "loops",
  15: "loops",
  16: "loops",
  17: "dom",
  18: "dom",
  19: "dom",
  20: "dom",
};

export const categoryNames = {
  variables: "Variabler & Datatyper",
  functions: "Funksjoner",
  arrays: "Arrays & Objekter",
  loops: "Løkker & Kontrollflyt",
  dom: "DOM & Hendelser",
};

export const questions = {
  variables: {
    easy: [
      {
        id: "var-e1",
        type: "mc",
        question: "Hva er riktig syntaks for å lage en variabel som kan endres later?",
        options: ["const navn = 'Ola'", "let navn = 'Ola'", "variable navn = 'Ola'", "var: navn = 'Ola'"],
        correct: 1,
        explanation: "'let' brukes for variabler som kan om-tildeles. 'const' brukes for konstanter.",
      },
      {
        id: "var-e2",
        type: "mc",
        question: "Hvilken datatype er verdien true?",
        options: ["string", "number", "boolean", "object"],
        correct: 2,
        explanation: "true og false er boolske verdier (boolean).",
      },
      {
        id: "var-e3",
        type: "drag",
        question: "Dra riktig nøkkelord for å deklarere en konstant:",
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
        explanation: "typeof null returnerer 'object' – dette er en kjent feil i JavaScript som aldri ble rettet.",
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
        explanation: "let er block-scoped (begrenset til blokken den er deklarert i), mens var er function-scoped.",
      },
    ],
  },

  functions: {
    easy: [
      {
        id: "fn-e1",
        type: "mc",
        question: "Hva gjør en funksjon i JavaScript?",
        options: [
          "Lagrer en verdi",
          "Utfører en blokk med kode når den kalles",
          "Lager en ny variabel",
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
        explanation: "I JavaScript bruker man nøkkelordet 'function' for å deklarere en funksjon.",
      },
    ],
    medium: [
      {
        id: "fn-m1",
        type: "mc",
        question: "Hva returnerer en funksjon uten return-setning?",
        options: ["0", "null", "undefined", "false"],
        correct: 2,
        explanation: "En funksjon uten eksplisitt return-setning returnerer undefined.",
      },
      {
        id: "fn-m2",
        type: "mc",
        question: "Hva er en pilfunksjon (arrow function)?",
        options: [
          "En funksjon som peker på en annen funksjon",
          "En kortere syntaks for å skrive funksjoner",
          "En funksjon som alltid returnerer true",
          "En funksjon uten parametere",
        ],
        correct: 1,
        explanation: "Arrow functions er en kortere syntaks: const fn = () => { ... }",
      },
    ],
    hard: [
      {
        id: "fn-h1",
        type: "mc",
        question: "Hva er en closure i JavaScript?",
        options: [
          "En funksjon som ikke har parametere",
          "En funksjon som husker variablene fra scopet den ble opprettet i",
          "En funksjon som returnerer undefined",
          "En innebygd JavaScript-funksjon",
        ],
        correct: 1,
        explanation: "En closure er en funksjon som har tilgang til variabler i det ytre scopet selv etter at det ytre scopet er avsluttet.",
      },
    ],
  },

  arrays: {
    easy: [
      {
        id: "arr-e1",
        type: "mc",
        question: "Hvordan får du det første elementet i en array kalt 'liste'?",
        options: ["liste[1]", "liste[0]", "liste.first()", "liste.get(0)"],
        correct: 1,
        explanation: "Arrays er nullindekserte, så det første elementet er på indeks 0.",
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
        question: "Hvilken metode lager en ny array basert på en betingelse?",
        options: ["map()", "filter()", "reduce()", "find()"],
        correct: 1,
        explanation: "filter() returnerer en ny array med elementene som oppfyller betingelsen.",
      },
      {
        id: "arr-m2",
        type: "mc",
        question: "Hvilken av disse muterer den opprinnelige arrayen?",
        options: ["map()", "filter()", "slice()", "push()"],
        correct: 3,
        explanation: "push() endrer originalen. De andre returnerer en ny array.",
      },
    ],
    hard: [
      {
        id: "arr-h1",
        type: "mc",
        question: "Hva returnerer reduce() på en tom array uten initialverdi?",
        options: ["null", "undefined", "0", "TypeError"],
        correct: 3,
        explanation: "reduce() på en tom array uten initialverdi kaster en TypeError.",
      },
    ],
  },

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
        explanation: "En for-løkke gjentar en blokk med kode et bestemt antall ganger.",
      },
      {
        id: "loop-e2",
        type: "drag",
        question: "Dra riktig nøkkelord for å stoppe en løkke tidlig:",
        options: ["break", "stop", "exit"],
        correct: "break",
        explanation: "'break' avbryter løkken umiddelbart.",
      },
    ],
    medium: [
      {
        id: "loop-m1",
        type: "mc",
        question: "Hva gjør 'continue' i en løkke?",
        options: [
          "Stopper løkken",
          "Hopper til neste iterasjon",
          "Starter løkken på nytt fra begynnelsen",
          "Gjør ingenting",
        ],
        correct: 1,
        explanation: "'continue' hopper over resten av den nåværende iterasjonen og går til neste.",
      },
    ],
    hard: [
      {
        id: "loop-h1",
        type: "mc",
        question: "Hva er forskjellen mellom for...in og for...of?",
        options: [
          "Ingen forskjell",
          "for...in itererer over indekser/nøkler, for...of itererer over verdier",
          "for...of itererer over indekser/nøkler, for...in itererer over verdier",
          "for...in brukes bare på objekter, for...of bare på arrays",
        ],
        correct: 1,
        explanation: "for...in gir nøkler/indekser, for...of gir verdiene direkte.",
      },
    ],
  },

  dom: {
    easy: [
      {
        id: "dom-e1",
        type: "mc",
        question: "Hva står DOM for?",
        options: [
          "Document Object Model",
          "Data Object Method",
          "Dynamic Output Mode",
          "Document Output Manager",
        ],
        correct: 0,
        explanation: "DOM = Document Object Model – en trestruktur som representerer HTML-dokumentet.",
      },
      {
        id: "dom-e2",
        type: "drag",
        question: "Dra riktig metode for å hente et element med en spesifikk id:",
        options: ["getElementById()", "getElement()", "querySelector()"],
        correct: "getElementById()",
        explanation: "getElementById() henter ett element basert på id-attributtet.",
      },
    ],
    medium: [
      {
        id: "dom-m1",
        type: "mc",
        question: "Hvordan legger du til en hendelseslytter på en knapp?",
        options: [
          "button.on('click', fn)",
          "button.addEventListener('click', fn)",
          "button.click(fn)",
          "button.listen('click', fn)",
        ],
        correct: 1,
        explanation: "addEventListener() er standardmetoden for å lytte på hendelser i DOM.",
      },
    ],
    hard: [
      {
        id: "dom-h1",
        type: "mc",
        question: "Hva er event bubbling?",
        options: [
          "En feil i JavaScript",
          "At en hendelse sprer seg oppover i DOM-treet til foreldreelementer",
          "At en hendelse bare fyres én gang",
          "At en hendelse sprer seg nedover til barn-elementer",
        ],
        correct: 1,
        explanation: "Event bubbling betyr at en hendelse først fyres på målelementet, deretter bobler oppover til foreldreelementene.",
      },
    ],
  },
};
