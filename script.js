let people = [];

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
        resultDiv.textContent = `${person}: ${drinkAmount} ml`;
        resultsDiv.appendChild(resultDiv);
    });
}
