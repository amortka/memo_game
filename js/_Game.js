(function(Memory) {

  Memory.Game = function(game) {

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

      var animals = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "pig", "rabbit", "snake", "penguin"];
      animals = animals.concat(animals);
      animals = _.shuffle(animals);

      _.forEach(animals, function(animal, idx) {
        var xx = (idx % noOfcolumns) * tileSize;
        var yy = Math.floor(idx / noOfcolumns) * tileSize;
        var nextAnimal = animals.pop()
        var tile = new Tile(_this.game, xx, yy, 'animals', nextAnimal + '.png');
        _this.tiles.add(tile);
      })

//      this.tiles.anchor.setTo(0.5);
      var scale = 1;
      this.tiles.scale.setTo(scale);
      this.tiles.x = this.game.width / 2 - this.tiles.width / 2 + ((tileSize / 2)  * scale);
      this.tiles.y = this.game.height / 2 - this.tiles.height / 2 + ((tileSize / 2) * scale);
    },
    update: function() {

    }
  }

}(window.Memory = window.Memory || {}))
