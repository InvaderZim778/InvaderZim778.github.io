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
    },
    {
        name: "Banane",
        type: "Obst",
        fact: "Bananen sind kleine Kraftpakete! Sie geben dir Energie, weil sie voller gesunder Kohlenhydrate und Kalium sind. Das hilft deinen Muskeln, stark zu bleiben!",
        image: "images/banane.jpg",
        source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/jgzelaya-5725431/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2449019">Juan Zelaya</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2449019">Pixabay</a>',
        audioFact: "audio/banane-fact.mp3"
      },
      {
        name: "Paprika",
        type: "Gemüse",
        fact: "Karotten sind eine hervorragende Quelle für Beta-Carotin.",
        image: "images/paprika.jpg",
        source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/nikiko-268709/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=421087">Nicole Köhler</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=421087">Pixabay</a>',
        audioFact: "audio/paprika-fact.mp3"
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
  
    // Spiele Audio ab
    function playAudio(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
  }
  // Warte, bis das Audio zu Ende ist, bevor die nächste Frage geladen wird
  function playAudioWithDelay(audioFile, callback) {
    const audio = new Audio(audioFile);
    audio.play();
    audio.onended = callback; 
  }

  // Hover-Sound abspielen
const hoverSoundFruit = new Audio("audio/hover-fruit.mp3");
const hoverSoundVegetable = new Audio("audio/hover-vegetable.mp3");
const falsch = new Audio("audio/Falsch.mp3");

fruitButton.addEventListener("mouseover", () => hoverSoundFruit.play());
vegetableButton.addEventListener("mouseover", () => hoverSoundVegetable.play());


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
    // Mische das Array zufällig
    shuffleArray(data);
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
       // Spiele den Audio-Fakt ab und warte, bis das Audio fertig ist
    playAudioWithDelay(item.audioFact, () => {
        currentItem++;
        if (currentItem < data.length) {
          loadItem(); // Lade die nächste Frage
        } else {
          endGame(); // Beende das Spiel, wenn alle Fragen beantwortet wurden
        }
      });
      /*
      const itemfact = new Audio(item.audioFact);
      itemfact.play();
      currentItem++;
      if (currentItem < data.length) {
        setTimeout(loadItem, 2000); // Lade nach 2 Sekunden die nächste Frage
      } else {
        setTimeout(endGame, 2000); // Beende das Spiel, wenn alle Fragen beantwortet wurden
      }*/
    } else {
      feedbackElement.textContent = "Falsch! Das Spiel ist vorbei.";
      falsch.play();
      setTimeout(endGame, 3000);
    }
  }
  
  // Antwort prüfen
  fruitButton.addEventListener("click", () => checkAnswer("Obst"));
  vegetableButton.addEventListener("click", () => checkAnswer("Gemüse"));
  
  // Spiel neu starten
  restartButton.addEventListener("click", () => {
    showContainer(startContainer);
  });
  // Funktion zum zufälligen Mischen eines Arrays (Fisher-Yates-Algorithmus)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  