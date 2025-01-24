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
  
  const imageElement = document.getElementById("fruit-image");
  const feedbackElement = document.getElementById("feedback");
  const sourceElement = document.getElementById("image-source");
  const fruitButton = document.getElementById("fruit-button");
  const vegetableButton = document.getElementById("vegetable-button");
  
  // Lade das aktuelle Item
  function loadItem() {
    const item = data[currentItem];
    imageElement.src = item.image;
    sourceElement.textContent = `Quelle: ${item.source}`;
    feedbackElement.textContent = "";
  }
  
  // Spiele Audio ab
  function playAudio(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
  }
  
  // Überprüfe die Antwort
  function checkAnswer(answer) {
    const item = data[currentItem];
    if (answer === item.type) {
      feedbackElement.textContent = "Richtig! " + item.fact;
      playAudio(item.audioFact); // Spiele den Audio-Fact ab
      currentItem = (currentItem + 1) % data.length;
      setTimeout(loadItem, 3000); // Lade nach 3 Sekunden die nächste Frage
    } else {
      feedbackElement.textContent = "Falsch! Versuch es nochmal.";
    }
  }
  
  // Hover-Sound abspielen
  const hoverSoundFruit = new Audio("audio/hover-fruit.mp3");
  const hoverSoundVegetable = new Audio("audio/hover-vegetable.mp3");
  
  fruitButton.addEventListener("mouseover", () => hoverSoundFruit.play());
  vegetableButton.addEventListener("mouseover", () => hoverSoundVegetable.play());
  
  // Antwort prüfen
  fruitButton.addEventListener("click", () => checkAnswer("Obst"));
  vegetableButton.addEventListener("click", () => checkAnswer("Gemüse"));
  
  // Lade das erste Item
  loadItem();
  