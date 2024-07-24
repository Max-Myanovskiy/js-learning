// хранение позиции каждой клетки корабля
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

//  номер текущей попытки
var guess;

// количество попаданий
var hits = 0;

// количество попыток
var guesses = 0;

// хранение информации о том, потоплен корабль или нет
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Enter a number from 0 to 6?: ");
  if (guess < 0 || guess > 6) {
    alert("Wrong number, enter correct number!");
  } else {
    guesses += 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits += 1;
      if (guess == location1) {
        location1 = 0;
      } else if (guess == location2) {
        location2 = 0;
      } else if (guess == location3) {
        location3 = 0;
      }
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}

var stats =
  "You took " +
  guesses +
  " guesses to sink the battleship, " +
  "which means your shooting accuracy was " +
  3 / guesses;

alert(stats);
