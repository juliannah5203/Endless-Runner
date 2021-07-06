// Donut prefab
class Donut extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.foodSpeed;
    }
    update() {
        this.y -= this.moveSpeed;
        if(this.y <= 0 - this.height) {
            this.y = game.config.height;
        }
    }
    reset() {
        this.y = game.config.height;
    }
}