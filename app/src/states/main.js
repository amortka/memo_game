import Phaser from 'phaser';
import _ from 'lodash';

class MainState {
    constructor(stateName) {
        this.stateName = stateName;
    }

    /** -- methods required by phaser state manager -- **/
    preload() {

    }

    create() {

        this.boxes = [];

        for (let i=0; i < 50; i++) {
            let box = this.game.add.sprite(Math.random() * this.game.world.width, Math.random() * this.game.world.height, 'dummy');
            box.width = 20;
            box.height = 20;
            box.anchor.setTo(0.5, 0.5);
            box._maxSpeed = Math.random() * 100;
            box._destination = new Phaser.Point(Math.random() * this.game.world.width, Math.random() * this.game.world.height);
            this.game.physics.enable(box, Phaser.Physics.ARCADE);
            this.boxes.push(box);
        }
    }

    update() {

        this.boxes.forEach((box) => {

            if (!_.isNull(box._destination)) {
                box.rotation =  this.game.physics.arcade.moveToXY(box, box._destination.x, box._destination.y, 50, 500);
            }

            if (box._destination.distance(box) < 1) {
                box._destination = new Phaser.Point(Math.random() * this.game.world.width, Math.random() * this.game.world.height);
            }

        });
    }
    /** -- EoF phaser methods -- **/

    getName() {
        return this.stateName;
    }
}

export default new MainState('main');