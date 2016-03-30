//(function(Memory) {

var Memory = {};

Memory.Game = function() {

  this.busy = false;
  this.counter = 0;
  this.prevTile;
};

Memory.Game.prototype = {
  preload: function() {
    this.load.image('bg', './assets/bg.png');
    this.load.image('playButton', 'assets/play.png');
    this.load.atlas('animals', 'assets/animals.png', 'assets/animals.json');
  },
  create: function() {
    var _this = this;
    var tileSize = 128;
    var noOfcolumns = 5;

    this.background = this.game.add.sprite(0, 0, 'bg');
    this.tiles = this.game.add.group();
    this.prevTile = null;

    var animals = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "pig", "rabbit", "snake", "penguin"];
    animals = animals.concat(animals);
    animals = _.shuffle(animals);

    _.forEach(animals, function(animal, idx) {
      var xx = (idx % noOfcolumns) * tileSize;
      var yy = Math.floor(idx / noOfcolumns) * tileSize;
      var nextAnimal = animals.pop()
      var tile = new Tile(_this.game, xx, yy, 'animals', nextAnimal + '.png');
      tile.tap.add(_this.onTap, _this);

      _this.tiles.add(tile);
    })

    //      this.tiles.anchor.setTo(0.5);
    var scale = 0.5;
    this.tiles.scale.setTo(scale);
    this.tiles.x = this.game.width / 2 - this.tiles.width / 2 + ((tileSize / 2) * scale);
    this.tiles.y = this.game.height / 2 - this.tiles.height / 2 + ((tileSize / 2) * scale);
  },

  onTap: function(tile) {
    //console.log('game clicked @', tile.animal)
    //console.log('this busy?', this.busy);
    //console.log('this prev?', this.prevTile ? this.prevTile.animal : '---');

    var _this = this;

    if (this.busy) {
      return;
    }
    this.busy = true;

    tile.reveal();

    if (_.isNull(this.prevTile)) {
      this.prevTile = tile;
      this.busy = false;
      return;
    }

    this.counter++;
    console.log('step #' + this.counter);

    setTimeout(function() {
      if (_this.prevTile.animal !== tile.animal) {
        console.log('no match!')

        _this.prevTile.hide();
        tile.hide();
        _this.prevTile = null;
      } else {
        console.log('match!')
        _this.tiles.removeChild(_this.prevTile);
        _this.tiles.removeChild(tile);
        _this.prevTile = null;
      }

      _this.busy = false;
    }, 1000)

  },

  update: function() {

  }
}

//}(window.Memory = window.Memory || {}))
