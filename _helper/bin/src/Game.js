
Concentration.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;	//	the tween manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

    this.bg;
    this.prevTile;
    this.tiles;
    this.busy;
};

Concentration.Game.prototype = {

	create: function () {
        this.prevTile = null;



        this.bg = this.game.add.sprite(0,0,'bg');
        this.tiles = this.game.add.group();
        var animals = ["elephant","giraffe","hippo","monkey","panda","parrot","pig","rabbit","snake","penguin"];
        animals = animals.concat(animals);
        var tileSize = 128;
        var cols = 5;
        for (var i = 0; i < 20; i++) {
            var xx = (i%cols) * tileSize;
            var yy = Math.floor(i/cols) * tileSize;
            var randomName = Phaser.ArrayUtils.removeRandomItem(animals);
            var tile = new Tile(this.game,xx,yy,"animals",randomName+".png");
            this.tiles.add(tile);
            tile.animal = randomName;
            tile.onTap.add(this.onTileTap,this);
        }
        this.tiles.x = this.game.width/2 - this.tiles.width/2 + (tileSize/2);
        this.tiles.y = this.game.height/2 - this.tiles.height/2 + (tileSize/2);
	},

    onTileTap:function (tile) {
        if(this.busy){
            return;
        }
        this.busy = true;
        tile.reveal();

        var t = this.game.time.create(true);
        if(this.prevTile === null){
            this.prevTile = tile;
            this.busy = false;
            return;
        }
        t.add(1000,function () {
            if(this.prevTile.animal !== tile.animal){
                console.log("No match: ",this.prevTile.animal,tile.animal);
                this.prevTile.hide();
                tile.hide();
                this.prevTile = null;
            }else if(this.prevTile.animal === tile.animal){
                console.log("Match: ",this.prevTile.animal,tile.animal);
                this.tiles.removeChild(this.prevTile);
                this.tiles.removeChild(tile);
                this.prevTile = null;
                if(this.tiles.children.length===0){
                    this.quitGame();
                }
            }
            this.busy = false;
        },this);
        t.start();

    },

	update: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');

	}

};
