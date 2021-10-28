class Overworld{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init(){
        const grass_background = new Image();
        grass_background.onload = () => {
            this.ctx.drawImage(grass_background, 0, 0);
        };
        grass_background.src = "img/grass_bg.png"

        const x = 8;
        const y = 8;

        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow,
                0,
                0,
                16,
                18,
                (x * 16) - 8,
                (y * 16) - 8,
                16,
                18
            )
        }

        const doug = new Image();
        doug.onload = () => {
            this.ctx.drawImage(
                doug,
                0,
                0,
                16,
                18,
                (x * 16) - 8,
                (y * 16) - 8,
                16,
                18
            );
        };
        doug.src = "img/doug-sprite3.png"


    }
}