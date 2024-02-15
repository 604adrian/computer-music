const body = document.querySelector("body")
body.style.backgroundColor = "rgba(20, 30, 40)"

// defining the DOM node
const theDiv = document.querySelector("#theDiv");
theDiv.style.margin = "auto";
theDiv.style.marginTop = "10px";
theDiv.style.width = "660px";
theDiv.style.display = "grid";
theDiv.style["grid-template-columns"] = "minmax(3rem, 1fr) minmax(min-content, 94rem) minmax(rem, 11fr)";
theDiv.style.justifyItems = "center";

const hero = document.createElement('hero');
hero.style.gridColumn = "1/-1";
hero.style.display = "grid";
hero.style.marginBottom = "20px";
hero.style.marginBottom = "50px";
hero.style.rowGap = "25px";

const heroImg = document.createElement('img');
heroImg.src = "./images/hero.jpg";
heroImg.style.width = "100%";
heroImg.style.height = "auto";
heroImg.style.margin = "auto";
heroImg.style.marginTop = "-20px";

const title = document.createElement("h1");
title.textContent = "10 WAYS TO MAKE BEAUTIFUL COMPUTER MUSIC FOR THE WHOLE FAMILY TO ENJOY";
title.style.color = "orangered";
title.style.textAlign = "center";
title.style.fontSize = "2.6rem";
title.style.margin = "auto";

const subtitle = document.createElement('p');
subtitle.textContent = "Each one of the 10 buttons below unlocks a whole new world of musical potential";
subtitle.style.color = "orangered";
subtitle.style.fontFamily = "'Raleway', sans-seif";
subtitle.style.textAlign = "center";
subtitle.style.fontSize = "1.3rem";
subtitle.style.marginLeft = "auto";
subtitle.style.marginRight = "auto";
subtitle.style.marginTop = "0";
subtitle.style.marginBottom = "0";

hero.appendChild(heroImg)
hero.appendChild(title);
hero.appendChild(subtitle);
theDiv.appendChild(hero);

// container for all the buttons + the attribution
const platter = document.createElement('div');
platter.style.display = "grid";
platter.style.gridTemplateRows = "3fr 1fr"

// container for all the buttons 
const plate = document.createElement("div");
plate.style.display = "grid";
plate.style["grid-template-columns"] = "1fr 1fr 1fr 1fr 1fr";

//the buttons
const cow = document.createElement("button");
cow.classList.add('cow');
cow.style.backgroundImage = '\
  linear-gradient(rgba(0, 0, 255, 0.5),\
  rgba(255, 255, 255, 0.5)),\
  url("./images/cow.jpg")';
cow.style.backgroundSize = "contain";
cow.style.backgroundPosition = "center";
cow.textContent = "A";
cow.style.color = "white";

const baby = document.createElement("button");
baby.classList.add('baby');
baby.style.backgroundImage = '\
  linear-gradient(rgba(0, 0, 255, 0.5),\
  rgba(255, 255, 255, 0.5)),\
  url("./images/baby.jpg")';
baby.style.backgroundSize = "contain";
baby.style.backgroundPosition = "center";
baby.textContent = "S";
baby.style.color = "white"

const rooster = document.createElement("button");
rooster.classList.add('rooster');
rooster.style.backgroundImage = '\
  linear-gradient(rgba(0, 0, 255, 0.5),\
  rgba(255, 255, 255, 0.5)),\
  url("./images/rooster.jpg")';
rooster.style.backgroundSize = "contain";
rooster.style.backgroundPosition = "center";
rooster.textContent = "D";
rooster.style.color = "white"

const cat = document.createElement("button");
cat.classList.add('cat');
cat.style.backgroundImage = '\
  linear-gradient(rgba(0, 0, 255, 0.5),\
  rgba(255, 255, 255, 0.5)),\
  url("./images/cat.jpg")';
cat.textContent = "F";
cat.style.backgroundSize = "contain";
cat.style.backgroundPosition = "center";
cat.style.color = "white";

const bass = document.createElement("button");
bass.classList.add('bass');
bass.style.backgroundImage = '\
  linear-gradient(rgba(0, 0, 255, 0.6),\
  rgba(255, 255, 255, 0.5)),\
  url("./images/bass.jpg")';
bass.style.backgroundSize = "contain";
bass.style.backgroundPosition = "center";
bass.textContent = "G";
bass.style.color = "white";

const dog = document.createElement("button");
dog.classList.add('dog');
dog.style.backgroundImage = '\
  linear-gradient(rgba(0, 0, 255, 0.5),\
  rgba(255, 255, 255, 0.5)),\
  url("./images/dog.jpg")';
dog.style.backgroundSize = "contain";
dog.style.backgroundPosition = "center";
dog.textContent = "H";
dog.style.color = "white";

const goat = document.createElement("button");
goat.classList.add('goat');
goat.style.backgroundImage = '\
  linear-gradient(rgba(0, 0, 255, 0.5),\
  rgba(255, 255, 255, 0.5)),\
  url("./images/goat.jpg")';
goat.style.backgroundSize = "contain";
goat.style.backgroundPosition = "center";
goat.textContent = "J";
goat.style.color = "white";

const geese = document.createElement("button");
geese.classList.add('geese');
geese.style.backgroundImage = '\
  linear-gradient(rgba(0, 0, 255, 0.5),\
  rgba(255, 255, 255, 0.5)),\
  url("./images/geese.jpg")';
geese.style.backgroundSize = "contain";
geese.style.backgroundPosition = "center";
geese.textContent = "K";
geese.style.color = "white";

const alien = document.createElement("button");
alien.classList.add('alien');
alien.style.backgroundImage = '\
  linear-gradient(rgba(0, 0, 255, 0.5),\
  rgba(255, 255, 255, 0.5)),\
  url("./images/alien.jpg")';
alien.style.backgroundSize = "contain";
alien.style.backgroundPosition = "center";
alien.textContent = "L";
alien.style.color = "white";

const guitar = document.createElement("button");
guitar.classList.add('guitar');
guitar.style.backgroundImage = '\
  linear-gradient(rgba(0, 0, 255, 0.5),\
  rgba(255, 255, 255, 0.5)),\
  url("./images/guitar.jpg")';
guitar.style.backgroundSize = "contain";
guitar.style.backgroundPosition = "center";
guitar.textContent = ";";
guitar.style.color = "white";

plate.appendChild(cow);
plate.appendChild(baby);
plate.appendChild(rooster);
plate.appendChild(cat);
plate.appendChild(bass);
plate.appendChild(dog);
plate.appendChild(goat);
plate.appendChild(geese);
plate.appendChild(alien);
plate.appendChild(guitar);
platter.appendChild(plate);
theDiv.appendChild(platter);

// to easily change the shadow effect of a button
function addShadow(buttonClass) {
  buttonClass.style.boxShadow = "1px 2px 17px 11px rgba(224, 151, 141, 0.90)";
  return;
}

function removeShadow(buttonClass) {
  buttonClass.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0)";
  return;
}

// defining the size for each button at once
const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
  button.style.height = "90%";
  button.style.width = "90%";
  button.style.margin = "auto";
  button.style.backgroundiSize = "20px";
  button.addEventListener("mouseover", () => {
    addShadow(button);  
    button.style.cursor = "pointer";
  });
  button.addEventListener("mouseleave", () => {
    removeShadow(button);
  });
  button.style.fontFamily = "monospace";
  button.style.fontWeight = "bold";
  button.style.fontSize = "3em";
  button.style.textShadow = "0px 3px 10px rgba(0,0,0,1)"
});

// variables for file location
const cowSound = new Audio("./sounds/cow.mp3");
const babySound = new Audio("./sounds/baby.mp3");
const bassSound = new Audio("./sounds/bass.wav");
const dogSound = new Audio("./sounds/dog.mp3");
const catSound = new Audio("./sounds/cat.mp3");
const roosterSound = new Audio("./sounds/rooster.mp3");
const goatSound = new Audio("./sounds/goat.mp3");
const geeseSound = new Audio("./sounds/geese.mp3");
const alienSound = new Audio("./sounds/alien.mp3");
const guitarSound = new Audio("./sounds/guitar.mp3");

const playSound = (sound, elem) => {
  return (!sound.paused) 
    ? sound.pause()
    : sound.play()
}

// event listeners for particular buttons
cow.addEventListener("click", () => {
  playSound(cowSound, cow);
});

baby.addEventListener("click", () => {
  playSound(babySound);
});

dog.addEventListener("click", () => {
  playSound(dogSound);
});

bass.addEventListener("click", () => {
  playSound(bassSound);
});

cat.addEventListener("click", () => {
  playSound(catSound);
});

rooster.addEventListener("click", () => {
  playSound(roosterSound); 
});

goat.addEventListener("click", () => {
  playSound(goatSound);
});

geese.addEventListener("click", () => {
  playSound(geeseSound);
});

alien.addEventListener("click", () => {
  playSound(alienSound);
});

guitar.addEventListener("click", () => {
  playSound(guitarSound);
});

// styling below the buttons
const fancyAttro = document.createElement('div');

//fancyAttro.style.gridColumn = "2 / 2";
fancyAttro.style.display = "grid";
fancyAttro.gridTemplateColumns = "1fr auto";
fancyAttro.gridTemplateRows = "1fr 1fr 1fr";

const hrOne = document.createElement("hr")
hrOne.style.width = "578px";
hrOne.style.marginLeft = "10px";
hrOne.style.marginTop = "30px";
hrOne.style.marginBottom = "0";

const caption = document.createElement("caption");
caption.textContent = "click here for attribution";
caption.style.fontFamily = "'Raleway', sans-seif";
caption.style.color = "white";
caption.textAlign = "center";
caption.style.width = "100%"
caption.style.marginTop = "10px";
caption.style.marginBottom = "0";
caption.style.fontSize = "0.9em";

const hrTwo = document.createElement("hr")
hrTwo.style.width = "578px";
hrTwo.style.marginLeft = "10px";
hrTwo.style.marginTop = "10px";

fancyAttro.appendChild(hrOne);
fancyAttro.appendChild(caption);
fancyAttro.appendChild(hrTwo);

caption.addEventListener("mouseover", () => {
  caption.style.color = "grey";
  caption.textContent = "click me";
  caption.style.cursor = 'pointer';
});

caption.addEventListener("mouseleave", () => {
  caption.style.color = "white";
  caption.textContent = "click here for attribution";
});

caption.addEventListener("click", () => {
  location = "./attribution.html";
});

// putting the attribution and the buttons in the same grid
platter.appendChild(fancyAttro);
theDiv.appendChild(platter);

// the heading
const textGrid = document.createElement("div");
textGrid.display = "grid";
textGrid.display["grid-template-rows"] = "1fr 1fr";

const heading = document.createElement("h2");
heading.textContent = "WHAT IS THIS WEBSITE?";
heading.style.color = "#00beef";
heading.classList.add("subheading");
heading.style.fontFamily = "'Raleway', sans-seif";
heading.style.textAlign = "center";
heading.style.marginTop = "50px";
heading.style.marginBottom = "0px";
heading.gridRow = "1/2";

const readMe = document.createElement("div");
readMe.gridRow = "2/2";
readMe.style.display = "grid";
readMe.style.gridTemplateRows = "1fr 1fr"
readMe.style.margin = "auto";
readMe.style.marginTop = "0";
readMe.style.padding = "45px";
readMe.style.rowGap = "10px";
readMe.style.paddingTop = "30px";
readMe.style.paddingBottom = "12px";

const readMeOne = document.createElement("p");
readMeOne.textContent =
`Do you ever think to yourself: "man, if only I had access to a website with a bunch of buttons that each produce a sound that shares seemingly no relation to the sounds produced by other buttons on the website, then I could be a world-class musician"?`
readMeOne.gridRow = "1/3";
readMeOne.style.marginTop = "0";
readMeOne.style.marginBottom = "0";
readMeOne.classList.add('expo');
readMeOne.style.color = "white";
readMeOne.style.fontFamily = "'Raleway', sans-serif";

const readMeTwo = document.createElement("p");
readMeTwo.textContent =
"If you answered yes to that question, then this website is for you. So what are you waiting for? Get started. Click away at the above buttons, or press their corresponding keys on your keyboard, and your ears will thank you for it! Good luck and stay safe!"
readMeTwo.style.gridRow = "2/3";
readMeTwo.style.marginTop = "0";
readMeTwo.classList.add('expo');
readMeTwo.style.color = "white";
readMeTwo.style.fontFamily = "'Raleway', sans-serif";

readMe.appendChild(readMeOne); 
readMe.appendChild(readMeTwo);
textGrid.appendChild(readMe);
textGrid.appendChild(heading);
textGrid.appendChild(readMe);
theDiv.appendChild(textGrid);

const footer = document.createElement("footer");
footer.style.textAlign = "center";

const link = document.createElement("a");
link.href = "https://github.com/604adrian";
link.textContent = "Check out my GitHub";
link.textAlign = "center";
link.style.fontSize = "0.7em"
link.style.margin = "0";
link.style.color = "grey";
link.style.fontFamily = "'Raleway', sans-serif";
link.style.textDecoration = "none";

footer.appendChild(link);
body.appendChild(footer);

link.addEventListener("mouseover", () => {
  link.style.color = "white";
});

link.addEventListener("mouseleave", () => {
  link.style.color = "grey";
});

// sound effects and animation when press down on specified keys
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled
    }

    switch (event.code) {
      case "KeyA":
        playSound(cowSound);
        addShadow(cow);
        break;
      case "KeyS":
        playSound(babySound);
        addShadow(baby);
        break;
      case "KeyD":
        playSound(roosterSound);
        addShadow(rooster);
        break;
      case "KeyF":
        playSound(catSound);
        addShadow(cat);
        break;
      case "KeyG":
        playSound(bassSound);
        addShadow(bass);
        break;
      case "KeyH":
        playSound(dogSound);
        addShadow(dog);
        break;
      case "KeyJ":
        playSound(goatSound);
        addShadow(goat);
        break;
      case "KeyK":
        playSound(geeseSound);
        addShadow(geese);
        break;
      case "KeyL":
        playSound(alienSound);
        addShadow(alien);
        break;
      case "Semicolon":
        playSound(guitarSound);
        addShadow(guitar);
        break;
    }

  },
  true,
);

// sound effects and animation when press down on specified keys
window.addEventListener(
  "keyup",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled
    }

    switch (event.code) {
      case "KeyA":
        removeShadow(cow);
        break;
      case "KeyS":
        removeShadow(baby);
        break;
      case "KeyD":
        removeShadow(rooster);
        break;
      case "KeyF":
        removeShadow(cat);
        break;
      case "KeyG":
        removeShadow(bass);
        break;
      case "KeyH":
        removeShadow(dog);
        break;
      case "KeyJ":
        removeShadow(goat);
        break;
      case "KeyK":
        removeShadow(geese);
        break;
      case "KeyL":
        removeShadow(alien);
        break;
      case "Semicolon":
        removeShadow(guitar);
        break;
    }

  },
  true,
);



