const data = [
    {
      name: "Apfel",
      type: "Obst",
      fact: "Äpfel sind reich an Ballaststoffen und Vitamin C.",
      image: "apple.jpg",
      audioFact: "apple-fact.mp3"
    },
    {
      name: "Karotte",
      type: "Gemüse",
      fact: "Karotten sind eine hervorragende Quelle für Beta-Carotin.",
      image: "carrot.jpg",
      audioFact: "carrot-fact.mp3"
    },
    // Weitere Früchte und Gemüse hinzufügen...
  ];
  
  let currentItem = 0;
  
  const imageElement = document.getElementById("fruit-image");
  const feedbackElement = document.getElementById("feedback");
  const fruitButton = document.getElementById("fruit-button");
  const vegetableButton = document.getElementById("vegetable-button");
  
  function loadItem() {
    const item = data[currentItem];
    imageElement.src = item.image;
    feedbackElement.textContent = "";
  }
  
  function playAudio(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
  }
  
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
  
  fruitButton.addEventListener("click", () => checkAnswer("Obst"));
  vegetableButton.addEventListener("click", () => checkAnswer("Gemüse"));
  
  loadItem();
  