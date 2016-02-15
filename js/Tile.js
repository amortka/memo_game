(function(window) {


  Tile = (function() {


    var Tile = function(game, x, y, image, frame) {
      window.Phaser.Group.call(this, game);

      this.front = this.create(0, 0, image, frame);
      this.front.anchor.setTo(0.5);

      this.x = x;
      this.y = y;
    }

    Tile.prototype = Object.create(Phaser.Group.prototype);
    Tile.prototype.constructor = Tile;

    return Tile;
  }());


  window.Tile = Tile;
}(window));
