class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();

  }

  bindEvents() {
    this.$el.on('click', "#square", (e) => {
      let $target = $(e.target);
      this.makeMove($target);
    });
  }

  makeMove($square) {
  
    let $pos = $square.data('pos');
    let $class = $square.attr('class');

    if($class === 'grey'){
    
      if (this.game.currentPlayer === 'x'){
        $square.removeClass();
        $square.addClass('x');
        $square.text('X');
      }else{
        $square.removeClass();
        $square.addClass('o');
        $square.text('O');
      }

      this.game.playMove($pos);
      

      if(this.game.winner()){
        // alert(`The winner is ${this.game.winner()}!`);
        let $h3 = $('h3');
        $h3.text(`The winner is ${this.game.winner()}!`);
      }
    }else{
      alert('Invalid');
    }
  }


  setupBoard() {
    const $board = $('<ul>');
    $board.addClass('black');
    let color = 'grey';

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++){
        let $square = $('<li>');
        $square.attr('id', 'square');
        $square.data('pos', [i,j]);
        $square.addClass(color);
        $board.append($square);
      }
    }

    this.$el.append($board);
  }
}

module.exports = View;
