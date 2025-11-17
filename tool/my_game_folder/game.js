window.onload = function(){
    var game = newPhaser.Game();
}

// const config = {
//   type:Phaser.WEBGL
//   width: 500
//   height: 500
//   canvas:gameCanvas
//   }

const speedDown = 300

class GameScene extends Phaser.Scene{
  constructor(){
    super("scene-game")
  }

  preload(){
    this.load.image("bg", "/assets/bg.png")
  }

  create(){
    this.add.image(0,0,"bg")
  }

  update(){}
}



var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    physics:{
      default:"arcade",
      arcade:{
        gravity:{y:speedDown}
        debug:true
      }
    }
    }
};

var game = new Phaser.Game(config);

function preload ()
{
}

function create ()
{
}

function update ()
{
}
