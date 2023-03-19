// Создаем массивы для цветов и достоинств карт
var colors = ["R", "G", "B", "W"];
var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// Создаем функцию для генерации колоды карт
var createDeck = function() {
  var deck = [];
  for (var i = 0; i < colors.length; i++) {
    for (var j = 0; j < values.length; j++) {
      var card = colors[i] + values[j];
      deck.push(card);
    }
  }
  return deck;
};

// Создаем функцию для перемешивания колоды карт
var shuffleDeck = function(deck) {
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
};

// Создаем функцию для раздачи N случайных карт C игрокам
var startGame = function(N, C) {
  // Проверяем корректность входных данных
  if (N < 1 || C < 1) {
    console.error("Неверные параметры игры");
    return;
  }
