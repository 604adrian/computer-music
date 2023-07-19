// defining the DOM node
const theDiv = document.querySelector("#theDiv");
theDiv.style.margin = "auto";
theDiv.style.marginTop = "80px";
theDiv.style.width = "660px";
theDiv.style["grid-template-rows"] = "100px 100px 100px";
theDiv.style["grid-template-columns"] = "100px 100px";
theDiv.style.justifyItems = "center";

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

// defining the size for each button at once
const buttons = document.querySelectorAll("button")
console.log(buttons);
buttons.forEach((button) => {
  button.style.height = "100px";
  button.style.width = "100px";
  button.style.padding = "10px";
  button.style.margin = "10px";
  button.addEventListener("mouseover", () => {
    button.style.boxShadow = "1px 2px 17px 11px rgba(224, 151, 141, 0.90)";
  });
   button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0)";
   });
});

// event listeners for particular buttons
cow.addEventListener("click", () => {
  let sound = new Audio("./sounds/cow.ogg");
  sound.play();
});

baby.addEventListener("click", () => {
  let sound = new Audio("./sounds/baby.ogg");
  sound.play();
});

dog.addEventListener("click", () => {
  let sound = new Audio("./sounds/dog.ogg");
  sound.play();
});

bass.addEventListener("click", () => {
  let sound = new Audio("./sounds/bass.ogg");
  sound.play();
});

cat.addEventListener("click", () => {
  let sound = new Audio("./sounds/cat.ogg");
  sound.play();
});

bass.addEventListener("click", () => {
  let sound = new Audio("./sounds/bass.ogg");
  sound.play();
});

rooster.addEventListener("click", () => {
  let sound = new Audio("./sounds/rooster.wav");
  sound.play();
});

goat.addEventListener("click", () => {
  let sound = new Audio("./sounds/goat.wav");
  sound.play();
});

geese.addEventListener("click", () => {
  let sound = new Audio("./sounds/geese.mp3");
  sound.play();
});

alien.addEventListener("click", () => {
  let sound = new Audio("./sounds/alien.wav");
  sound.play();
});

guitar.addEventListener("click", () => {
  let sound = new Audio("./sounds/guitar.mp3");
  sound.play();
});

// styling below the buttons
const hr = document.createElement("hr")
hr.style.width = "578px";
hr.style.marginLeft = "10px";
hr.style.marginTop = "10px";
theDiv.appendChild(hr);

const 
