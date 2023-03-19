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

var startGame = function(N, C) {
  if (N < 1 || C < 1) {
    console.log("Неверные параметры игры");
    return;
  }

  var deck = createDeck();
  shuffleDeck(deck);

  // Проверяем, хватает ли карт для всех игроков
  if (N * C > deck.length) {
    console.error("Недостаточно карт в колоде");
    return;
  }

  // Создаем массив для хранения карт игроков
  var players = [];

  // Раздаем карты игрокам по очереди
  for (var i = 0; i < C; i++) {
    for (var j = 0; j < N; j++) {
      // Берем верхнюю карту из колоды и добавляем ее в массив игрока
      var card = deck.pop();
      if (!players[j]) {
        players[j] = [];
      }
      players[j].push(card);
    }
  }
// Сохраняем массив игроков в глобальную переменную
  window.players = players;
};

// Создаем функцию для получения карт игрока по номеру
var getCards = function(C) {
  // Проверяем корректность входных данных
  if (C < 1) {
    console.error("Неверный номер игрока");
    return;
  }

  // Проверяем, существует ли массив игроков
  if (!window.players) {
    console.error("Игра не начата");
    return;
  }

  // Проверяем, существует ли игрок с таким номером
  if (!window.players[C - 1]) {
    console.error("Такого игрока нет");
    return;
  }

  // Выводим номер игрока и список его карт через пробел
  var output = C + " ";
  for (var i = 0; i < window.players[C - 1].length; i++) {
    output += window.players[C - 1][i] + " ";}
  console.log(output);
};

// Создаем функцию для обработки консольных команд
var processCommand = function(command) {
  // Разбиваем команду на слова по пробелу
  var words = command.split(" ");

  // Проверяем, какая команда введена
  if (words[0] === "start") {
    // Вызываем функцию startGame с параметрами N и C
    var N = parseInt(words[1]);
    var C = parseInt(words[2]);
    startGame(N, C);
  } else if (words[0] === "get-cards") {
    // Вызываем функцию getCards с параметром C
    var C = parseInt(words[1]);
    getCards(C);
  } else {
    // Выводим сообщение об ошибке
    console.error("Неверная команда");
  }
};