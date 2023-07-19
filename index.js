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
cow.textContent = "A";

const baby = document.createElement("button");
baby.classList.add('baby');
baby.textContent = "S";

const rooster = document.createElement("button");
rooster.classList.add('rooster');
rooster.textContent = "D";

const cat = document.createElement("button");
cat.classList.add('cat');
cat.textContent = "F";

const bass = document.createElement("button");
bass.classList.add('bass');
bass.textContent = "G";

const dog = document.createElement("button");
dog.classList.add('dog');
dog.textContent = "H";

const goat = document.createElement("button");
goat.classList.add('goat');
goat.textContent = "J";

const geese = document.createElement("button");
geese.classList.add('geese');
geese.textContent = "K";

const alien = document.createElement("button");
alien.classList.add('alien');
alien.textContent = "L";

const guitar = document.createElement("button");
guitar.classList.add('guitar');
guitar.textContent = ";";

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
  button.style.boxShadow = "1px 2px 17px 11px rgba(224, 151, 141, 0.90)";
  button.addEventListener("mouseover", () => {
    removeShadow(button);  
  });
  button.addEventListener("mouseleave", () => {
    addShadow(button);
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


