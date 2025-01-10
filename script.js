let people = [];

// Liste med spørsmålene
const questions = [
    "Hvem er mest sannsynlig til å gå på en date med en kjent person?",
    "Hvem har mest lyst å havne i slåsskamp?",
    "Hvem er sykt sjenert?",
    "Hvem er mest sannsynlig til å dra på tur til Bali?",
    "Hvem er mest kreativ?",
    "Hvem er jævlig dum",
    "Hvem spry i kveld?",
    "Hvem er mest sannsynlig til å bli millionær?",
    "Hvem er mest tålmodig?",
    "Hvem er mest organisert?",
    "Hvem hadde fått flest følgere på OnlyFans?",
    "Hvem er mest sannsynlig til å starte en bedrift?",
    "Hvem er mest sannsynlig til å ende opp i fengsel?",
    "Hvem er mest sannsynlig til å dra på en fest og drikke altfor mye?",
    "Hvem er mest sannsynlig til å ha en hemmelig tatovering?",
    "Hvem er mest sannsynlig til å bli sett på en date med en totalt ukjent person?",
    "Hvem er mest sannsynlig til å gjøre noe helt sprøtt for penger?",
    "Hvem er mest sannsynlig til å gjøre noe farlig bare for å få oppmerksomhet?",
    "Hvem er mest sannsynlig til å sove med noen de bare har møtt?",
    "Hvem er mest sannsynlig til å bryte ut i tårer på et offentlig sted?",
    "Hvem er mest sannsynlig til å ha et eventyr med en fremmed på ferie?",
    "Hvem er mest sannsynlig til å ligge på et intervju for å få drømmejobben?",
    "Hvem er mest sannsynlig til å bruke en falsk ID for å komme inn på en klubb?",
    "Hvem er mest sannsynlig til å bruke appen 'Tinder' for å finne en tilfeldig affære?",
    "Hvem er mest sannsynlig til å gjøre en vill handling etter en natt ute på byen?",
    "Hvem er mest sannsynlig til å få et rykte som den personen som alltid er ute etter drama?",
    "Hvem er mest sannsynlig til å ha en affære med en kollega?"
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

