'use strict';

import Phaser from 'phaser';

export default class Enemy extends Phaser.Sprite {
  constructor(game, path) {
    console.log('path', path)
    super(game, path[0].x, path[0].y, 'dummy');
    game.physics.arcade.enable(this);
    this.width = 15;
    this.height = 15;
    this.anchor.setTo(0.5);
    this.path = path;
    this.destination = null;
  }

  update() {

    if (this.destination) {
       this.game.physics.arcade.moveToXY(this, this.destination.x, this.destination.y, 0, 100);
       this.destination = Phaser.Math.distance(this.x, this.y, this.destination.x, this.destination.y) < 1 ? null : this.destination;
    } else if (this.path.length > 0) {
      this.destination = this.path.shift();
      console.log('got new destination! @', this.destination)
    } else {
      this.body.velocity.setTo(0, 0);
      this.kill();
    }
  }
}
