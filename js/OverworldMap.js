class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};
    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;
    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }
  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage, 
      utils.withGrid(8) - cameraPerson.x, 
      utils.withGrid(8) - cameraPerson.y
      )
  }
  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage, 
      utils.withGrid(8) - cameraPerson.x, 
      utils.withGrid(8) - cameraPerson.y
    )
  } 
  isSpaceTaken(currentX, currentY, direction){
    const {x, y} = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x}, ${y}`] || false;
  }
  mountObjects(){
    Object.values(this.gameObjects).forEach(o => {
      o.mount(this);
    })
  }
  addWall(x, y) {
    this.walls[`${x}, ${y}`] = true;
  }
  removeWall(x, y) {
    delete this.walls[`${x}, ${y}`];
  }
  moveWall(wasX, wasY, direction){
    this.removeWall(wasX, wasY);
    const {x, y} = utils.nextPosition(wasX, wasY, direction);
    this.addWall(x, y);
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
        src: "/img/laura-sprite.png"
      }),
      npc: new Person({
        x: utils.withGrid(12),
        y: utils.withGrid(8),
      }),
      rock1: new Person({
        x: utils.withGrid(13),
        y: utils.withGrid(9),
        src: "/img/rock.png"
      }),
      rock2: new Person({
        x: utils.withGrid(12),
        y: utils.withGrid(10),
        src: "/img/rock.png"
      }),
      rock3: new Person({
        x: utils.withGrid(11),
        y: utils.withGrid(11),
        src: "/img/rock.png"
      }),
      medium_rock1: new Person({
        x: utils.withGrid(14),
        y: utils.withGrid(11),
        x: utils.withGrid(3),
        y: utils.withGrid(3),
        src: "/img/medium-rock.png"
      }),
      npc2: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(4),
        src: "/img/npc-sprite2.png"
      }),
      music_sheet: new Person({
        x: utils.withGrid(12),
        y: utils.withGrid(2),
        src: "/img/music-sheet.png"
      }),
      guitar: new Person({
        x: utils.withGrid(10),
        y: utils.withGrid(2),
        src: "/img/guitar.png"
      }),
      empty: new Person({
        x: utils.withGrid(0),
        y: utils.withGrid(0),
        src: "/img/empty-tile.png"
      }),
    }
  },
  Grass: {
    lowerSrc: "/img/grass_bg.png",
    upperSrc: "",
    gameObjects: {
      npc1: new Person({
        x: utils.withGrid(12),
        y: utils.withGrid(12),
        src: "/img/rock.png"
      }),
      npc2: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(4),
        src: "/img/npc-sprite2.png"
      }),
      doug: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(8),
        y: utils.withGrid(8),
      }),
    },
    walls: {
      [utils.asGridCoord(0, 0)]: true,
      [utils.asGridCoord(0, 1)]: true,
      [utils.asGridCoord(1, 0)]: true,
      [utils.asGridCoord(1, 1)]: true,
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