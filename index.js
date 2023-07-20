const body = document.querySelector("body")
body.style.backgroundColor = "rgba(20, 30, 40)"

// defining the DOM node
const theDiv = document.querySelector("#theDiv");
theDiv.style.margin = "auto";
theDiv.style.marginTop = "80px";
theDiv.style.width = "660px";
theDiv.style["grid-template-rows"] = "100px 100px 100px";
theDiv.style["grid-template-columns"] = "100px 100px";
theDiv.style.justifyItems = "center";

// styling above the buttons
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
  linear-gradient(rgba(0, 0, 255, 0.5),\
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

theDiv.appendChild(cow);
theDiv.appendChild(baby);
theDiv.appendChild(rooster);
theDiv.appendChild(cat);
theDiv.appendChild(bass);
theDiv.appendChild(dog);
theDiv.appendChild(goat);
theDiv.appendChild(geese);
theDiv.appendChild(alien);
theDiv.appendChild(guitar);

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
console.log(buttons);
buttons.forEach((button) => {
  button.style.height = "100px";
  button.style.width = "100px";
  button.style.padding = "10px";
  button.style.margin = "10px";
  button.style.backgroundiSize = "20px";
  button.addEventListener("mouseover", () => {
    addShadow(button);  
  });
  button.addEventListener("mouseleave", () => {
    removeShadow(button);
   });
});

// variables for file location
const cowSound = "./sounds/cow.ogg";
const babySound = "./sounds/baby.ogg";
const bassSound = "./sounds/bass.ogg";
const dogSound = "./sounds/dog.ogg";
const catSound = "./sounds/cat.ogg";
const roosterSound = "./sounds/rooster.wav";
const goatSound = "./sounds/goat.wav";
const geeseSound = "./sounds/geese.mp3";
const alienSound = "./sounds/alien.wav";
const guitarSound = "./sounds/guitar.mp3";

// function for playing sound
function playSound(fileName) {
  let sound = new Audio(fileName);
  sound.play();
}


// event listeners for particular buttons
cow.addEventListener("click", () => {
  playSound(cowSound); 
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
const hrOne = document.createElement("hr")
hrOne.style.width = "578px";
hrOne.style.marginLeft = "10px";
hrOne.style.marginTop = "30px";
hrOne.style.marginBottom = "0";

const caption = document.createElement("caption");
caption.textContent = "click here for attribution";
caption.style.width = "578px";
caption.style.marginLeft = "10px";
caption.style.marginTop = "10px";
caption.style.marginBottom = "0";
caption.style.fontSize = "0.9em";

const hrTwo = document.createElement("hr")
hrTwo.style.width = "578px";
hrTwo.style.marginLeft = "10px";
hrTwo.style.marginTop = "10px";

theDiv.appendChild(hrOne);
theDiv.appendChild(caption);
theDiv.appendChild(hrTwo);

caption.addEventListener("mouseover", () => {
  caption.style.color = "blue";
});

caption.addEventListener("mouseleave", () => {
  caption.style.color = "black";
});

caption.addEventListener("click", () => {
  location = "./attribution.html";
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
        break;
      case "KeyS":
        playSound(babySound);
        break;
      case "KeyD":
        playSound(roosterSound);
        break;
      case "KeyF":
        playSound(catSound);
        break;
      case "KeyG":
        playSound(bassSound);
        break;
      case "KeyH":
        playSound(dogSound);
        break;
      case "KeyJ":
        playSound(goatSound);
        break;
      case "KeyK":
        playSound(geeseSound);
        break;
      case "KeyL":
        playSound(alienSound);
        break;
      case "Semicolon":
        playSound(guitarSound);
        break;
     
    }

  },
  true,
);

