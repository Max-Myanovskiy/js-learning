function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}

bark("rover", 23);
bark("lady", 17);
bark("spike", 40);
bark("fido", "20");
bark("dino", 0, 0);
bark("scottie", -1);

// ==============================

function whatShallIWear(temp) {
  if (temp < 60) {
    console.log("Wear a jacket");
  } else if (temp < 70) {
    console.log("Wear a sweater");
  } else {
    console.log("Wear t-shirt");
  }
}

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);

// ==============================

function calculateArea(r) {
  var area;
  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area;
  }
}
var radius = 6.2;
var theArea = calculateArea(radius);
console.log("The area is: " + theArea);

// ==============================

function youSayGoodBye() {
  alert("Good Bye!");
  function andISayHello() {
    alert("Hello!");
  }
  return andISayHello;
}

let something = youSayGoodBye();
something();

// ==============================

function stopWatch() {
  let startTime = Date.now();
  function getDelay() {
    let elapsedTime = Date.now() - startTime;
    alert(elapsedTime);
  }
  return getDelay;
}

let timer = stopWatch();

// Сделать что-нибудь за некоторое время.
for (let i = 0; i < 1000000; i++) {
  let foo = Math.random() * 10000;
}

timer();

// ==============================

// let thingToPrint = "";
// function drawText() {
//   thingToPrint += "*";
//   document.writeln(thingToPrint);
// }
// let intervalID = setInterval(drawText, 2000);
//   clearInterval(intervalID);

// ==============================

let myButton = document.querySelector("#myButton");
myButton.addEventListener("click", doSomething, false);
let counter = 0;
function doSomething(e) {
  //   alert("Is this working?");
  //   console.log("We clicked on: " + e.target.id);
  counter++;
  console.log("Button clicked " + counter + " times!");
  if (counter == 3) {
    showMore();
  }
}

function showMore() {
  console.warn("This is a warning!");
  console.error("This is an error!");
}
