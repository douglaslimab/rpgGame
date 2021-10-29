class OverworldMap{
    constructor(config){
        this.gameObjects = config.gameObjects;
        
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc
    }

    drawLowerImage(ctx){
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    drawUpperImage(ctx){
        ctx.drawImage(this.upperImage, 0, 0);
    }
}

window.OverworldMaps = {
    Grass:{
        lowerSrc: "/img/grass_bg.png",
//        upperSrc: "/img/grass_bg.png",
        gameObjects:{
            doug: new GameObject({
                x: 5,
                y: 6,
            }),
            npc1: new GameObject({
                x: 9,
                y: 2,
                src: "/img/npc-sprite1.png",
            })
        }
    },
    Street:{

    }
}