const View = require("./ttt-view.js");
const Game = require("../../node_solution/game.js");

  $(() => {
    let $rootEl = $('.ttt');
    let game = new Game();
    let view = new View(game, $rootEl);
  });
