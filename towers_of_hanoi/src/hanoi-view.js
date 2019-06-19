class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      const $pile = $('<ul>');
      $pile.data("id", i);
      $pile.addClass('pile');
      this.$el.append($pile);
    }

    for (let i = 0; i < 3; i++) {
      const $disc = $('<li>');
      $disc.data("id", i);
      $disc.addClass('disc');
      let $firstPile = $('ul').eq(0);
      $firstPile.append($disc);
    }
  }



module.exports = View;
