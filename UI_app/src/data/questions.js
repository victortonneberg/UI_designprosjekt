// Dummy spørsmål generert av Gemini 3, 30.03.26

export const questions = {
    easy: [
        {
            id: "e1",
            type: "mc",
            question: "Hva er riktig syntaks for å lage en variabel som kan endres senere?",
            options: ["const navn = 'Ola'", "let navn = 'Ola'", "variable navn = 'Ola'", "var: navn = 'Ola'"],
            correct: 1,
            explanation: "'let' brukes for å deklarere variabler som kan om-tildeles senere. 'const' brukes for konstanter."
        },
        {
            id: "e2",
            type: "code",
            question: "Skriv koden for å logge ordet 'Hei' til konsollen.",
            answer: "console.log('Hei');",
            explanation: "console.log() er den innebygde funksjonen for å skrive ut informasjon i konsollen."
        }
    ],
    medium: [
        {
            id: "m1",
            type: "mc",
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            options: ["Alternativ A", "Alternativ B", "Alternativ C", "Alternativ D"],
            correct: 0,
            explanation: "Dette er en dummy-forklaring for at du skal se at visningen av fasit fungerer."
        },
        {
            id: "m2",
            type: "code",
            question: "Lag en variabel 'x' og sett verdien til 10 (bruk let).",
            answer: "let x = 10;",
            explanation: "Du bruker 'let', etterfulgt av variabelnavnet, et likhetstegn og verdien."
        }
    ],
    hard: [
        {
            id: "h1",
            type: "mc",
            question: "Hvilken av disse array-metodene muterer (endrer) den opprinnelige arrayen?",
            options: ["map()", "filter()", "slice()", "push()"],
            correct: 3,
            explanation: "push() legger til elementer på slutten av arrayen og endrer originalen. De andre returnerer en ny array."
        },
        {
            id: "h2",
            type: "code",
            question: "Skriv en tom pilfunksjon (arrow function) som lagres i en const kalt 'dummy'.",
            answer: "const dummy = () => {};",
            explanation: "En pilfunksjon skrives med parenteser for argumenter, etterfulgt av '=>' og krøllparenteser for funksjonskroppen."
        }
    ]
};