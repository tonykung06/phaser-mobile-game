BunnyDefender.Preloader = function(game) {
	this.preloadBar = null;
	this.titleText = null;
	this.ready = false;
};

BunnyDefender.Preloader.prototype = {
	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
		this.load.image('hill', 'images/hill.png');
		this.load.image('sky', 'images/sky.png');
		this.load.atlasXML('bunny', 'images/spritesheets/bunny.png', 'images/spritesheets/bunny.xml');
		this.load.atlasXML('spacerock', 'images/spritesheets/SpaceRock.png', 'images/spritesheets/SpaceRock.xml');
		this.load.image('explosion', 'images/explosion.png');
		this.load.image('ghost', 'images/ghost.png');
		this.load.audio('explosion_audio', 'audio/explosion.mp3');
		this.load.audio('hurt_audio', 'audio/hurt.mp3');
		this.load.audio('select_audio', 'audio/select.mp3');
		this.load.audio('game_audio', 'audio/bgm.mp3');

		// christmas
		this.load.image("christmas_background","images/christmas/background.png");
		this.load.image("christmas_snow_mask","images/christmas/snow_mask.png");
		this.load.image("christmas_gametitle","images/christmas/gametitle.png");
		this.load.image("christmas_gamesubtitle","images/christmas/gamesubtitle.png");
		this.load.image("christmas_blackfade","images/christmas/blackfade.png");
		this.load.spritesheet("christmas_snowflakes", "images/christmas/snowflakes.png", 17, 17);
		this.load.spritesheet("christmas_snowflakes_large", "images/christmas/snowflakes_large.png", 64, 64);
		this.load.audio("christmas_music","audio/christmas/music.mp3");  
	},
	create: function () {
		this.preloadBar.cropEnabled = false; //force show the whole thing
	},
	update: function () {
		if (this.ready || !this.cache.isSoundDecoded('game_audio') || !this.cache.isSoundDecoded('christmas_music')) {
			return;
		}
	   	this.ready = true;
	   	this.state.start('StartMenu');
	}
};