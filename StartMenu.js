BunnyDefender.StartMenu = function(game) {
    this.startBG;
    this.startPrompt;
};

BunnyDefender.StartMenu.prototype = {
    create: function() {
        this.music = this.add.audio("christmas_music");
        this.music.play('', 0, 1, true);
        this.music.onLoop.add(this.repeatMusic, this);
        this.startBG = this.add.image(0, 0, "christmas_background");
        this.startBG.inputEnabled = true;

        var backSnow = this.add.emitter(320, -32, 600);
        backSnow.makeParticles("christmas_snowflakes", [0, 1, 2, 3, 4, 5]);
        backSnow.maxParticleScale = 0.6;
        backSnow.minParticleScale = 0.2;
        backSnow.setYSpeed(20, 100);
        backSnow.setXSpeed(-15, 15);
        backSnow.gravity = 0;
        backSnow.width = 960;
        backSnow.minRotation = 0;
        backSnow.maxRotation = 40;
        backSnow.start(false, 14000, 20);

        this.add.image(0, 415, "christmas_snow_mask");
        this.title = this.add.sprite(-320, 170, "christmas_gametitle");
        this.title.anchor.setTo(0.5);
        this.subtitle = this.add.image(960, 270, "christmas_gamesubtitle");
        this.subtitle.anchor.setTo(0.5);
        this.time.events.add(Phaser.Timer.SECOND * 2, this.showTitle, this);

        var frontSnow = this.add.emitter(320, -32, 50);
        frontSnow.makeParticles("christmas_snowflakes_large", [0, 1, 2, 3, 4, 5]);
        frontSnow.maxParticleScale = 0.75;
        frontSnow.minParticleScale = 0.5;
        frontSnow.setYSpeed(50, 150);
        frontSnow.setXSpeed(-20, 20);
        frontSnow.gravity = 0;
        frontSnow.width = 960;
        frontSnow.minRotation = 0;
        frontSnow.maxRotation = 40;
        frontSnow.start(false, 14000, 1000);

        var blackFade = this.add.sprite(0, 0, "christmas_blackfade");
        var fadeTween = this.add.tween(blackFade);
        fadeTween.to({
            alpha: 0
        }, 4000, Phaser.Easing.Linear.Out, true);
    },
    startGame: function(pointer) {
        this.music.stop();
        this.state.start('Game');
    },
    showTitle: function() {
        var titleTween = this.add.tween(this.title);
        titleTween.to({
            x: 320
        }, 2000, Phaser.Easing.Cubic.Out, true);
        titleTween.onComplete.add(function() {
            var subtitleTween = this.add.tween(this.subtitle);
            subtitleTween.to({
                x: 390
            }, 2000, Phaser.Easing.Cubic.Out, true);
            subtitleTween.onComplete.add(function() {
                this.startBG.events.onInputDown.addOnce(this.startGame, this);
            }, this);
        }, this);
    },
    repeatMusic() {
        this.music.play('', 0, 1, true);
    }
};