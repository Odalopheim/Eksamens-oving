// Liste med spørsmålene for "Jeg har aldri" drikkelek
const questions = [
    "Jeg har aldri drukket alkohol på et jobbintervju.",
    "Jeg har aldri kysset en fremmed på en fest.",
    "Jeg har aldri hatt et one-night stand med en ukjent person.",
    "Jeg har aldri vært på en fest og angret på det dagen etter.",
    "Jeg har aldri brukt en falsk ID for å komme inn på en klubb.",
    "Jeg har aldri hatt en affære med en kollega.",
    "Jeg har aldri vært arrestert for offentlig ordensforstyrrelse.",
    "Jeg har aldri gjort noe ulovlig for å få oppmerksomhet.",
    "Jeg har aldri sendt en flørtende melding til feil person.",
    "Jeg har aldri delt en intim hemmelighet som jeg angret på."
];

// Variabel for å holde styr på hvilket spørsmål som vises
let currentIndex = 0;

// Funksjon for å oppdatere spørsmålet på skjermen
function updateQuestion() {
    const questionElement = document.getElementById("questions_JHA");
    questionElement.textContent = questions[currentIndex];
}

// Funksjon for å navigere til neste spørsmål
function nextQuestion() {
    if (currentIndex < questions.length - 1) {
        currentIndex++;  // Øker indeksen for å vise neste spørsmål
        updateQuestion();  // Oppdaterer visningen
    }
}

// Funksjon for å navigere til forrige spørsmål
function previousQuestion() {
    if (currentIndex > 0) {
        currentIndex--;  // Reduserer indeksen for å vise forrige spørsmål
        updateQuestion();  // Oppdaterer visningen
    }
}

// Initialiser første spørsmål ved å kalle updateQuestion
updateQuestion();
