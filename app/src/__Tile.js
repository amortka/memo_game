(function(window) {


  Tile = (function() {


    var Tile = function(game, x, y, image, frame) {
      window.Phaser.Group.call(this, game);
      this.animal = frame;
      this.hidden = true;

      this.tap = new Phaser.Signal();

      this.front = this.create(0, 0, image, frame);
      this.front.anchor.setTo(0.5);
      this.front.scale.setTo(0, 1);

      this.back = this.create(0, 0, image, 'blind.png');
      this.back.anchor.setTo(0.5);
      this.back.inputEnabled = true;
      this.back.events.onInputDown.add(this.click, this);


      this.x = x;
      this.y = y;
    }

    Tile.prototype = Object.create(Phaser.Group.prototype);
    Tile.prototype.constructor = Tile;

    Tile.prototype.click = function() {
      //var _this = this;
      //console.log('clicked @', this);

      this.tap.dispatch(this);

      /*this.reveal();
      setTimeout(function() {
      	_this.hide();
      }, 500);*/
    }


    Tile.prototype.reveal = function() {
      this.hidden = false;
      var t1 = this.game.add.tween(this.back.scale).to({
        x: 0
      }, 100, Phaser.Easing.Quadratic.Out);
      var t2 = this.game.add.tween(this.front.scale).to({
        x: 1
      }, 100, Phaser.Easing.Quadratic.InOut);
      t1.chain(t2);
      t1.start();
    }


    Tile.prototype.hide = function() {
      this.hidden = true;
      var t1 = this.game.add.tween(this.back.scale).to({
        x: 1
      }, 100, Phaser.Easing.Quadratic.InOut);
      var t2 = this.game.add.tween(this.front.scale).to({
        x: 0
      }, 100, Phaser.Easing.Quadratic.InOut);
      t2.chain(t1);
      t2.start();
    }

    return Tile;
  }());


  window.Tile = Tile;
}(window));
