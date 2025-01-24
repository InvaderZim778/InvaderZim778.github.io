const data = [
    {
      name: "Apfel",
      type: "Obst",
      fact: "Äpfel sind reich an Ballaststoffen und Vitamin C.",
      image: "images/apple.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/pexels-2286921/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1834639">Pexels</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1834639">Pixabay</a>',
      audioFact: "audio/apple-fact.mp3"
    },
    {
      name: "Karotte",
      type: "Gemüse",
      fact: "Karotten sind eine hervorragende Quelle für Beta-Carotin.",
      image: "images/carrot.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/maxmann-665103/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2309814">Th G</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2309814">Pixabay</a>',
      audioFact: "audio/carrot-fact.mp3"
    }
  ];
  
  let currentItem = 0;
  let score = 0;
  
  const startContainer = document.getElementById("start-container");
  const gameContainer = document.getElementById("game-container");
  const endContainer = document.getElementById("end-container");
  
  const imageElement = document.getElementById("fruit-image");
  const sourceElement = document.getElementById("image-source");
  const feedbackElement = document.getElementById("feedback");
  const fruitButton = document.getElementById("fruit-button");
  const vegetableButton = document.getElementById("vegetable-button");
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const finalScoreElement = document.getElementById("final-score");
  
  // Lade das aktuelle Item
  function loadItem() {
    const item = data[currentItem];
    imageElement.src = item.image;
    sourceElement.innerHTML = `Quelle: ${item.source}`;
    feedbackElement.textContent = "";
  }
  
  // Zeige einen Container an
  function showContainer(container) {
    startContainer.classList.remove("active");
    gameContainer.classList.remove("active");
    endContainer.classList.remove("active");
    container.classList.add("active");
  }
  
  // Starte das Spiel
  startButton.addEventListener("click", () => {
    score = 0;
    currentItem = 0;
    showContainer(gameContainer);
    loadItem();
  });
  
  // Beende das Spiel
  function endGame() {
    finalScoreElement.textContent = `Du hast ${score} richtige Antworten gegeben!`;
    showContainer(endContainer);
  }
  
  // Überprüfe die Antwort
  function checkAnswer(answer) {
    const item = data[currentItem];
    if (answer === item.type) {
      score++;
      feedbackElement.textContent = "Richtig! " + item.fact;
      currentItem++;
      if (currentItem < data.length) {
        setTimeout(loadItem, 2000); // Lade nach 2 Sekunden die nächste Frage
      } else {
        setTimeout(endGame, 2000); // Beende das Spiel, wenn alle Fragen beantwortet wurden
      }
    } else {
      feedbackElement.textContent = "Falsch! Das Spiel ist vorbei.";
      setTimeout(endGame, 2000);
    }
  }
  
  // Antwort prüfen
  fruitButton.addEventListener("click", () => checkAnswer("Obst"));
  vegetableButton.addEventListener("click", () => checkAnswer("Gemüse"));
  
  // Spiel neu starten
  restartButton.addEventListener("click", () => {
    showContainer(startContainer);
  });
  