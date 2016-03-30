'use strict';

import Phaser from 'phaser';
import Enemy from './Enemy';

export default class SpawnPoint extends Phaser.Group {
  constructor(game, ...points) {
    super(game);
    this.points = points.map((point) => {
      return {x: point[0], y: point[1]}
    });
    this.enemies = [];
    this.count = 0;

  }

  createEnemies(count) {
    this.maxCount = count;
    let enemy = new Enemy(this.game, this.points);
    this.add(enemy);
  }

}
