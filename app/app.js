'use strict';

import 'pixi.js';
import 'p2';
import Phaser from 'phaser';

import MemoGame from './src/MemoGame';
import MainState from './src/states/main';

var engine = new Phaser.Game(640, 960, Phaser.AUTO, 'game');
var game = new MemoGame(engine);

game.addState(MainState);

game.start(MainState);
