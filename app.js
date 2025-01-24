  const data = [
    // Obst
    {
      name: "Apfel",
      type: "Obst",
      fact: "Ein Apfel am Tag hält dich gesund! Er enthält viele Vitamine und gibt dir Energie.",
      image: "images/apple.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/pexels-2286921/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1834639">Pexels</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1834639">Pixabay</a>',
      audioFact: "audio/apple-fact.mp3"
    },
    {
      name: "Banane",
      type: "Obst",
      fact: "Bananen sind voller Kalium, das deinen Muskeln hilft, stark zu bleiben.",
      image: "images/banana.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/jgzelaya-5725431/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2449019">Juan Zelaya</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2449019">Pixabay</a>',
      audioFact: "audio/banana-fact.mp3"
    },
    {
      name: "Birne",
      type: "Obst",
      fact: "Birnen sind süß und saftig – sie haben viele Ballaststoffe, die deiner Verdauung helfen.",
      image: "images/pear.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/publicdomainpictures-14/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2280">PublicDomainPictures</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2280">Pixabay</a>',
      audioFact: "audio/pear-fact.mp3"
    },
    {
      name: "Erdbeere",
      type: "Obst",
      fact: "Erdbeeren sind kleine Vitamin-C-Bomben, die dich fit halten.",
      image: "images/strawberry.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/shutterbug75-2077322/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1238295">Robert Owen-Wahl</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1238295">Pixabay</a>',
      audioFact: "audio/strawberry-fact.mp3"
    },
    {
      name: "Trauben",
      type: "Obst",
      fact: "Trauben sind perfekt für unterwegs – sie sind süß und geben dir schnell Energie!",
      image: "images/grapes.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/nickype-10327513/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5889697">Nicky ❤️🌿🐞🌿❤️</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5889697">Pixabay</a>',
      audioFact: "audio/grapes-fact.mp3"
    },
    {
      name: "Kirsche",
      type: "Obst",
      fact: "Kirschen sind nicht nur lecker, sie helfen auch, besser zu schlafen.",
      image: "images/cherry.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/bru-no-1161770/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3480616">Bruno</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3480616">Pixabay</a>',
      audioFact: "audio/cherry-fact.mp3"
    },
    {
      name: "Pfirsich",
      type: "Obst",
      fact: "Pfirsiche haben eine samtige Haut und sind voller Vitamine, die gut für deine Haut sind.",
      image: "images/peach.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/gerdschiffler-6537510/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2784944">Gerd</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2784944">Pixabay</a>',
      audioFact: "audio/peach-fact.mp3"
    },
    {
      name: "Ananas",
      type: "Obst",
      fact: "Ananas ist exotisch und enthält ein Enzym, das beim Verdauen hilft.",
      image: "images/pineapple.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/shutterbug75-2077322/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1239116">Robert Owen-Wahl</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1239116">Pixabay</a>',
      audioFact: "audio/pineapple-fact.mp3"
    },
    {
      name: "Mango",
      type: "Obst",
      fact: "Mangos sind herrlich süß und enthalten Vitamin A für gute Augen.",
      image: "images/mango.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/ancelin-1987740/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1218147">Ancelin Bonnet</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1218147">Pixabay</a>',
      audioFact: "audio/mango-fact.mp3"
    },
    {
      name: "Melone",
      type: "Obst",
      fact: "Wassermelonen bestehen zu 90 % aus Wasser – perfekt an heißen Tagen!",
      image: "images/watermelon.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/stephaniealbert-8562402/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3584717">Stephanie Albert</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3584717">Pixabay</a>',
      audioFact: "audio/watermelon-fact.mp3"
    },
    {
      name: "Pflaume",
      type: "Obst",
      fact: "Pflaumen helfen deiner Verdauung, wenn dein Bauch mal nicht so gut drauf ist.",
      image: "images/plum.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/couleur-1195798/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1690579">Couleur</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1690579">Pixabay</a>',
      audioFact: "audio/plum-fact.mp3"
    },
    {
      name: "Orange",
      type: "Obst",
      fact: "Orangen sind voll mit Vitamin C, das dich vor Erkältungen schützt.",
      image: "images/orange.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/noname_13-2364555/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4637398">NoName_13</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4637398">Pixabay</a>',
      audioFact: "audio/orange-fact.mp3"
    },
    {
      name: "Himbeere",
      type: "Obst",
      fact: "Himbeeren haben viele kleine Kerne, die gut für deinen Magen sind.",
      image: "images/raspberry.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/publicdomainpictures-14/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2270">PublicDomainPictures</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2270">Pixabay</a>',
      audioFact: "audio/raspberry-fact.mp3"
    },
    {
      name: "Blaubeere",
      type: "Obst",
      fact: "Blaubeeren sind super für dein Gehirn und helfen dir, besser zu lernen.",
      image: "images/blueberry.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/azzurrodesign-837253/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=873784">Gabor Mika</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=873784">Pixabay</a>',
      audioFact: "audio/blueberry-fact.mp3"
    },
    {
      name: "Zitrone",
      type: "Obst",
      fact: "Zitronen sind sauer, aber sie geben deinem Körper viel Vitamin C.",
      image: "images/lemon.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/varintorn-2453766/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2121307">Varintorn Kantawong</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2121307">Pixabay</a>',
      audioFact: "audio/lemon-fact.mp3"
    },
  
    // Gemüse
    {
      name: "Karotte",
      type: "Gemüse",
      fact: "Karotten sind reich an Beta-Carotin, das in deinem Körper zu Vitamin A wird – für gute Augen!",
      image: "images/carrot.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/maxmann-665103/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2309814">Th G</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2309814">Pixabay</a>',
      audioFact: "audio/carrot-fact.mp3"
    },
    {
      name: "Gurke",
      type: "Gemüse",
      fact: "Gurken bestehen fast nur aus Wasser und halten dich erfrischt.",
      image: "images/cucumber.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/ka_re-14461006/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4672972">Kai Reschke</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4672972">Pixabay</a>',
      audioFact: "audio/cucumber-fact.mp3"
    },
    {
      name: "Tomate",
      type: "Gemüse",
      fact: "Tomaten sind ein Gemüse, obwohl viele denken, sie seien Obst. Sie sind gut fürs Herz!",
      image: "images/tomato.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/bru-no-1161770/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2096306">Bruno</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2096306">Pixabay</a>',
      audioFact: "audio/tomato-fact.mp3"
    },
    {
      name: "Paprika",
      type: "Gemüse",
      fact: "Rote Paprika hat mehr Vitamin C als eine Orange – perfekt für deine Abwehrkräfte.",
      image: "images/paprika.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/nikiko-268709/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=421087">Nicole Köhler</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=421087">Pixabay</a>',
      audioFact: "audio/pepper-fact.mp3"
    },
    {
      name: "Brokkoli",
      type: "Gemüse",
      fact: "Brokkoli sieht aus wie ein kleiner Baum und macht dich stark, weil er viele Vitamine hat.",
      image: "images/broccoli.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/schwarzenarzisse-128813/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1450274">Holger Grybsch</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1450274">Pixabay</a>',
      audioFact: "audio/broccoli-fact.mp3"
    },
    {
      name: "Spinat",
      type: "Gemüse",
      fact: "Spinat enthält Eisen und macht dich stark – das wusste sogar Popeye!",
      image: "images/spinach.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/shingo_no-1039647/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1125420">Shingo_No</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1125420">Pixabay</a>',
      audioFact: "audio/spinach-fact.mp3"
    },
    {
      name: "Erbsen",
      type: "Gemüse",
      fact: "Erbsen sind klein, aber voller Proteine, die deinen Muskeln helfen.",
      image: "images/peas.jpg",
      source: "",
      audioFact: "audio/peas-fact.mp3"
    },
    {
      name: "Zucchini",
      type: "Gemüse",
      fact: "Zucchini kannst du roh oder gekocht essen – sie ist gut für deine Verdauung.",
      image: "images/zucchini.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/katiklinski-14208351/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7882719">Katharina Klinski</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7882719">Pixabay</a>',
      audioFact: "audio/zucchini-fact.mp3"
    },
    {
      name: "Kohlrabi",
      type: "Gemüse",
      fact: "Kohlrabi ist knackig und lecker – er stärkt dein Immunsystem!",
      image: "images/kohlrabi.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/lebensmittelfotos-13/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=74276">Lebensmittelfotos</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=74276">Pixabay</a>',
      audioFact: "audio/kohlrabi-fact.mp3"
    },
    {
      name: "Mais",
      type: "Gemüse",
      fact: "Maiskolben sind süß und haben viele Ballaststoffe, die gut für deinen Bauch sind.",
      image: "images/corn.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/ignartonosbg-21428489/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8028831">hartono subagio</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8028831">Pixabay</a>',
      audioFact: "audio/corn-fact.mp3"
    },
    {
      name: "Kartoffel",
      type: "Gemüse",
      fact: "Kartoffeln sind ein wichtiges Gemüse, das dir viel Energie gibt.",
      image: "images/potato.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/publicdomainpictures-14/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=72254">PublicDomainPictures</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=72254">Pixabay</a>',
      audioFact: "audio/potato-fact.mp3"
    },
    {
      name: "Blumenkohl",
      type: "Gemüse",
      fact: "Blumenkohl sieht aus wie eine weiße Wolke und ist gut für deinen Magen.",
      image: "images/cauliflower.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/pixaline-1569622/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4621686">Sabine Kroschel</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4621686">Pixabay</a>',
      audioFact: "audio/cauliflower-fact.mp3"
    },
    {
      name: "Lauch",
      type: "Gemüse",
      fact: "Lauch hat einen milden Geschmack und ist gut für dein Immunsystem.",
      image: "images/leek.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/anaterate-2348028/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2653127">Wolfgang Eckert</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2653127">Pixabay</a>',
      audioFact: "audio/leek-fact.mp3"
    },
    {
      name: "Sellerie",
      type: "Gemüse",
      fact: "Sellerie ist sehr knackig und hat wenig Kalorien – perfekt für einen gesunden Snack.",
      image: "images/celery.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/buntysmum-5497946/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2486251">Beverly Buckley</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2486251">Pixabay</a>',
      audioFact: "audio/celery-fact.mp3"
    },
    {
      name: "Rote Beete",
      type: "Gemüse",
      fact: "Rote Beete macht dein Blut stark und gibt dir viel Energie.",
      image: "images/beetroot.jpg",
      source: 'Bild von <a href="https://safesearch.pixabay.com/de/users/webdesignnewcastle-9695209/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3590359">Nick Collins</a> auf <a href="https://safesearch.pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3590359">Pixabay</a>',
      audioFact: "audio/beetroot-fact.mp3"
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
  