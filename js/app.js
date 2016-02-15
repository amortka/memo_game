(function() {

  var game = new Phaser.Game(640, 960, Phaser.AUTO, 'game');

  game.state.add('Game', Memory.Game);
	game.state.start('Game');

}());
