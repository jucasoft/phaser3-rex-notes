import DragScalePlugin from '../../plugins/dragscale-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {}

    create() {
        var print = this.add.text(0, 0, '')

        var circle = this.add.circle(400, 300, 200, 0x888888);
        var dragScale = this.plugins.get('rexDragScale').add(this);
        dragScale
            .on('drag1', function (dragScale) {
                var drag1Vector = dragScale.drag1Vector;
                circle.x += drag1Vector.x;
                circle.y += drag1Vector.y;
            })
            .on('drag2', function (dragScale) {
                var scaleFactor = dragScale.scaleFactor;
                circle.scaleX *= scaleFactor;
                circle.scaleY *= scaleFactor;
                print.text = circle.scaleX;
            }, this)
            .on('drag1start', function (dragScale) {
                print.text = 'drag1start';
            }, this)
            .on('drag1end', function (dragScale) {
                print.text = 'drag1end';
            }, this)
            .on('drag2start', function (dragScale) {
                print.text = 'drag2start';
            }, this)
            .on('drag2end', function (dragScale) {
                print.text = 'drag2end';
            }, this)


    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Demo,
    plugins: {
        global: [{
            key: 'rexDragScale',
            plugin: DragScalePlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);