class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage, 
      utils.withGrid(10.5) - cameraPerson.x, 
      utils.withGrid(6) - cameraPerson.y
      )
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage, 
      utils.withGrid(10.5) - cameraPerson.x, 
      utils.withGrid(6) - cameraPerson.y
    )
  } 
}

window.OverworldMaps = {
  Sand: {
    lowerSrc: "/img/sand_bg.png",
    upperSrc: "",
    gameObjects: {
      doug: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(8),
        y: utils.withGrid(8),
      }),
      npc1: new Person({
        x: utils.withGrid(12),
        y: utils.withGrid(12),
        src: "/img/npc-sprite1.png"
      }),
      npc2: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(12),
        src: "/img/npc-sprite1.png"
      })
    }
  },
  Grass: {
    lowerSrc: "/img/grass_bg.png",
    upperSrc: "",
    gameObjects: {
      doug: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(8),
        y: utils.withGrid(8),
      }),
      npc1: new Person({
        x: utils.withGrid(12),
        y: utils.withGrid(8),
        src: ""
      }),
      npc2: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(12),
        src: ""
      })
    }
  },
  Water: {
    lowerSrc: "/img/water_bg.png",
    upperSrc: "",
    gameObjects: {
      doug: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(8),
        y: utils.withGrid(8),
      }),
      npc1: new Person({
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
      doug: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(8),
        y: utils.withGrid(8),
      }),
      npc1: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(4),
        src: "/img/npc-sprite1.png"
      }),
    }
  },
}