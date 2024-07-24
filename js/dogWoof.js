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
