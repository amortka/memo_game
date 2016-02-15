
Concentration.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

Concentration.Preloader.prototype = {

	preload: function () {

		this.load.image('bg','images/bg.png');
		this.load.image('playButton', 'images/play.png');
		this.load.image('retryButton', 'images/retry.png');
		this.load.atlas('animals', 'images/animals.png', 'images/animals.json');

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.state.start("MainMenu");
	},

	update: function () {


	}

};
