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
    "Jeg har aldri delt en intim hemmelighet som jeg angret på.",
    "Jeg har aldri hatt sex på offentlig sted.",
    "Jeg har aldri vært ute og drukket alene på en ukedag.",
    "Jeg har aldri vært i en trekant med to personer av samme kjønn.",
    "Jeg har aldri vært full på en jobb eller skole.",
    "Jeg har aldri gått ut på byen uten å ha noen planer for hvordan kvelden skulle ende.",
    "Jeg har aldri brukt en annen persons klær uten å spørre først.",
    "Jeg har aldri sendt en upassende tekstmelding til min sjef eller lærer.",
    "Jeg har aldri hatt en hemmelig beundrer.",
    "Jeg har aldri vært på en blind date.",
    "Jeg har aldri sendt nakenbilder til noen.",
    "Jeg har aldri kysset noen jeg egentlig ikke liker.",
    "Jeg har aldri latt som om jeg var på telefonen for å unngå et samtale.",
    "Jeg har aldri hatt et forhold med noen jeg møtte på nettet.",
    "Jeg har aldri gjort noe ulovlig for å få en gratis fordel.",
    "Jeg har aldri løyet om hvor mye penger jeg tjener.",
    "Jeg har aldri vært i et forhold jeg visste var dårlig for meg.",
    "Jeg har aldri fått en hemningsløs drøm om noen i rommet.",
    "Jeg har aldri vært i et forhold med noen for pengene deres.",
    "Jeg har aldri hatt sex uten å bruke kondom.",
    "Jeg har aldri sagt at jeg elsket noen, men ikke ment det.",
    "Jeg har aldri vært i et forhold og vært utro.",
    "Jeg har aldri gjort noe kriminelt som jeg aldri har blitt tatt for.",
    "Jeg har aldri sendt et upassende bilde til min sjef.",
    "Jeg har aldri vært i et forhold med noen som er betydelig eldre enn meg.",
    "Jeg har aldri gjort noe for å få noen til å tro at jeg var mer seksuelt erfaren enn jeg egentlig var.",
    "Jeg har aldri latt som om jeg var noen andre for å få oppmerksomhet.",
    "Jeg har aldri hatt sex uten samtykke.",
    "Jeg har aldri gjort noe i sengen jeg senere har angret på.",
    "Jeg har aldri hatt et skjult forhold.",
    "Jeg har aldri stjålet fra en venn eller familie.",
    "Jeg har aldri vært på et erotisk show.",
    "Jeg har aldri delt en intens intimsamtale på nettet.",
    "Jeg har aldri vært med på å arrangere en skjult fest med alkohol og narkotika.",
    "Jeg har aldri sagt nei, men sagt ja i det skjulte.",
    "Jeg har aldri hatt et forhold kun for pengene.",
    "Jeg har aldri hatt sex på et fly.",
    "Jeg har aldri brukt noen for min egen gevinst uten at de visste det.",
    "Jeg har aldri hatt en sexfantasi som har overrasket meg selv.",
    "Jeg har aldri latt som om jeg ikke har interesse, men fortsatt jaktet på noen.",
    "Jeg har aldri hatt en hemmelig affære med en gift person."
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
