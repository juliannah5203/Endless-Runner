class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image('pinkback', './assets/pinkback.png');
        this.load.image('blueback', './assets/blueback.png');
        this.load.image('blueboy', './assets/blueboy.png');
        this.load.image('pinkgirl', './assets/pinkgirl.png');
    }
    create() {
        if (game.settings.players == 1) {
            this.playBack = this.add.tileSprite(0, 0, 525, 700, 'pinkback').setOrigin(0, 0);
            this.player1 = new Player(this, centerX, centerY + centerX, 'pinkgirl').setOrigin(0.5, 0);
        }
        if (game.settings.players == 2) {
            this.playBack = this.add.tileSprite(0, 0, 525, 700, 'blueback').setOrigin(0, 0);
            this.player1 = new Player(this, centerX, centerY + centerX, 'blueboy').setOrigin(0.5, 0);
        }
        
    }
}