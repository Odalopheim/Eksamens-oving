let people = [];

// Liste med spørsmålene
const questions = [
    "Hvem blir påspandert mest på byen?",
  "Hvem bruker lengst tid på do?",
  "Hvem ligger mest med flest?",
  "Hvem startet å drikke i yngst alder?",
  "Hvem får ikke A?",
  "Hvem kaster opp i kveld",
  "Hvem er minst glad i dyr?",
  "Hvem kunne tatt et tramp-stamp?",
  "Hvem har tilbrakt en natt på kontoret?",
  "SKÅL!",
  "Hvem trenger en shot?",
  "Hvem er dårligst til å chugge?",
  "Hvem kommer aldri inn på Harveys?",
  "Hvem lever fremdeles i russetiden?",
  "Hvem avslutter festen først?",
  "Hvem havner oftest på legevakten?",
  "Hvem blir aldri ferdig med studiet?",
  "SKÅL!",
  "Hvem knuser flest hjerter?",
  "Hvem er morsomst?",
  "Hvem har høyest selvtillit?",
  "Hvem koker mest?",
  "Hvem får du vakrest barn med?",
  "Hvem blir gjenkjent på polet?",
  "Hvem er mest inkluderende?",
  "SKÅL",
  "Hvem er mest uskyldig?",
  "Hvem kommer mest sansynlig til å stryke i flest fag?",
  "Hvem er mest kjærestemateriale?",
  "Hvem lukter best?",
  "Hvem har glemt navnet på et ONS?",
  "Hvem blir mest vellykket?",
  "SKÅL!",
  "Hvem spyr i kveld?",
  "Hvem er mest på baksida?",
  "Hvem skal ta en lambo?",
  "Hvem får kjæreste i år?",
  "Hvem klarer ikke å holde en hemmelighet?",
  "Hvem er mest kinky?",
  "Hvem har mest game?",
  "SKÅL!",
  "Hvem kunne ligget med en foreleser?",
  "Hvem har finest øyne?",
  "Hvem blir kastet ut av Harveys i kveld?",
  "Hvem er den beste vennen?",
  "Hvem burde gått på OsloMet",
  "Hvem er et teknisk problem?",
  "Hvem har du et lite øye til?",
  "SKÅL!",
  "Hvem blir fortest sjalu?",
  "Hvem har hatt flest kjønnssykdommer?",
  "Hvem ser mest på porno?",
  "Hvem har blitt pumpa?",
  "Hvem har flest bilder på kamerarullen?",
  "Hvem har finest rumpe?",
  "Hvem ville du vært med på en øde øy?",
  "Hvem har hatt 69?",
  "SKÅL!",
  "Hvem kjenner du minst?",
  "Hvem valgte studiet bare for pengene?",
  "Hvem burde gå på rehab",
  "Hvem er mamma på byen?",
  "Hvem har ligget med flest?",
  "Hvem ville du lest dagboken til?",
  "Hvem sender mest nudes?",
  "SKÅL!",
  "Hvem har hooket flest nasjonaliteter?",
  "Hvem spanderer mest?",
  "Hvem har shavet og er forberedt på alt?",
  "Hvem dør først i en skrekkfilm?",
  "Hvem har hatt trekant?",
  "Hvem er mest fornøyd med eget utseende?",
  "Hvem kommer raskest?",
  "Hvem hooker flest i kveld?",
  "SKÅL!",
  "Hvem er best i senga?",
  "Hvem skiller seg ut i mengden?",
  "Hvem avslutter festen sist?",
  "Hvem blir alltid spurt om leg?",
  "Hvem runker mest?",
  "Hvem kunne hatt sugarmama/sugardaddy?",
  "Hvem blacker ut mest?",
  "Hvem skal ta en bånnski med deg?",
  "SKÅL!",
];

// Variabel for å holde styr på det nåværende spørsmålet
let currentIndex = 0;

// Funksjon for å oppdatere spørsmålet
function updateQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentIndex];
}

// Funksjon for å navigere til neste spørsmål
function nextQuestion() {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        updateQuestion();
    }
}

// Funksjon for å navigere til forrige spørsmål
function previousQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        updateQuestion();
    }
}

// Initialisere første spørsmål når siden lastes
updateQuestion();

// Legg til person i listen
function addPerson() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    if (name) {
        people.push(name);
        nameInput.value = ""; // Tøm input-feltet
        updatePersonList();
    }
}

// Oppdater personlisten
function updatePersonList() {
    const personListDiv = document.getElementById("personList");
    personListDiv.innerHTML = ""; // Tøm eksisterende liste
    people.forEach(person => {
        const personDiv = document.createElement("div");
        personDiv.classList.add("person");
        personDiv.textContent = person;
        personListDiv.appendChild(personDiv);
    });
}

// Generer tilfeldig drikkemengde for hver person
function generateDrinkAmounts() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Tøm tidligere resultater

    if (people.length === 0) {
        resultsDiv.textContent = "Vennligst legg til noen personer først!";
        return;
    }

    people.forEach(person => {
        const drinkAmount = Math.floor(Math.random() * 101); // Tilfeldig tall mellom 0 og 100
        const resultDiv = document.createElement("div");
        resultDiv.textContent = `${person}: ${drinkAmount} dl`;
        resultsDiv.appendChild(resultDiv);
    });
}

function goBack() {
    window.history.back();
}

