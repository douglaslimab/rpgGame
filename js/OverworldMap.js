class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0)
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0)
  } 
}

window.OverworldMaps = {
  Sand: {
    lowerSrc: "/img/sand_bg.png",
    upperSrc: "",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(8),
        y: utils.withGrid(8),
      }),
      npc1: new Person({
        x: utils.withGrid(12),
        y: utils.withGrid(12),
        src: "/img/npc-sprite1.png"
      })
    }
  },
  Grass: {
    lowerSrc: "/img/grass_bg.png",
    upperSrc: "",
    gameObjects: {
      doug: new GameObject({
        x: utils.withGrid(8),
        y: utils.withGrid(8),
      }),
      npc1: new GameObject({
        x: utils.withGrid(12),
        y: utils.withGrid(8),
        src: "/img/npc-sprite1.png"
      }),
    }
  },
  Water: {
    lowerSrc: "/img/water_bg.png",
    upperSrc: "",
    gameObjects: {
      doug: new GameObject({
        x: utils.withGrid(8),
        y: utils.withGrid(8),
      }),
      npc1: new GameObject({
        x: utils.withGrid(8),
        y: utils.withGrid(12),
        src: "/img/npc-sprite1.png"
      }),
    }
  },
  Pavement: {
    lowerSrc: "/img/pavement_bg.png",
    upperSrc: "",
    gameObjects: {
      doug: new GameObject({
        x: utils.withGrid(8),
        y: utils.withGrid(8),
      }),
      npc1: new GameObject({
        x: utils.withGrid(4),
        y: utils.withGrid(4),
        src: "/img/npc-sprite1.png"
      }),
    }
  },
}