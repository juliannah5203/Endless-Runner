let config = {
    type: Phaser.AUTO,
    width: 525,
    height: 700,
    physics: {  // learn from Nathan's example
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);
let centerX = game.config.width / 2;
let centerY = game.config.height / 2;
let highScore;
let newHigh = false;
let keyLEFT, keyRIGHT, keyR;