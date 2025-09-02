
const dictionary = {
  "Feet mention": "Whenever feet are mentioned during the stream.",
  "Vore mention": "A reference to vore, usually as a joke.",
  "WAIT WAIT WAIT WAIT WAIT": "Crelly tends to repeat WAIT dramatically.",
  "ASMR VOICE": "When they switch to a soft ASMR-like voice.",
  "Homestuck": "Mentions or references to the webcomic Homestuck.",
  "Whopper": "A Burger King Whopper meme reference.",
  "Im gay": "Self-explanatory—Crelly saying 'I'm gay'."
  //  Add more explanations
};

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");
const explanationBox = document.getElementById("explanation");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  resultsList.innerHTML = "";

  if (!query) return;

  const matches = Object.keys(dictionary).filter(word =>
    word.toLowerCase().includes(query)
  );

  matches.forEach(match => {
    const li = document.createElement("li");
    li.textContent = match;
    li.addEventListener("click", () => showExplanation(match));
    resultsList.appendChild(li);
  });
});

function showExplanation(term) {
  explanationBox.innerHTML = `<strong>${term}</strong><br>${dictionary[term] || "No explanation available."}`;
}

