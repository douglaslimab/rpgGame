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

        const doug = new GameObject({
            x: 8,
            y: 8,
        })

//        const npc1 = new GameObject({
//            x: 8,
//            y: 8,
//            src: "img/npc1.png"
//        })

        setTimeout(() => {
            doug.sprite.draw(this.ctx);
//            npc1.sprite.draw(this.ctx);
        }, 200)


    }
}