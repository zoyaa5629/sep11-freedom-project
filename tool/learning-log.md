# Tool Learning Log

## Tool: **Phaser**

## Project: **Quiz Game**

---

### 11/2/26:
* I learned how to get started on Phaser with the video: https://www.youtube.com/watch?v=0qtg-9M3peI

#### To start a project on Phaser you must use `const config` in js that sets uo the base of your project.
* Phaser uses different types of rendering experiences such as `Phaser.WEBGL`
* Set up a width and height in the `const config`
* Pass the id as an object and it will automatically link the two with `canvas:gameCanvas`

  All this code will look like:
  ```
  const config = {
  type:Phaser.WEBGL
  width: 500
  height: 500
  canvas:gameCanvas
  }
  ```
* To show the project in your canvas use `const game = new Phaser.Game(config)`
The set up of your canvas is done. Later you can add things like physics and a sprite.

### 11/16/25:
* I learned how to add different things to a project. This is the video I am using. I should continue to use this video: https://www.youtube.com/watch?v=0qtg-9M3peI

#### Adding physics.

 Physics in phaser can be added to you `const config` which you made earlier to get that black screen.

```
physics:{
      default:"arcade",
      arcade:{
        gravity:{y:speedDown}
        debug:true
      }
    }
    }
```

This is how we add physics to your game. Before, we made `const speedDown = 300` which applies to the gravity. We can change the number easily whenever we want to in the project.

#### Adding a background

Adding a background for me is quite complicated. The code looks easy but it is hard to understand how it works.

```
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
```
This code is how you add a background. In the video it worked but cannot check right now since cs50 is not working. I need to learn how this works.

### 11/30/25: 
This time I took it easy and learned some things that could be useful for me when making my game. 

##### `preload()`

* This function can be used for loading assets. Images, spritesheets, audio, tilemaps, etc.

 ```
  preload() {
  this.load.image('player', 'player.png');
}
``` 

##### `update()`

* This function adds a Game Loop that repeats the code 60 times a second.

```
  update() {
  this.player.x += 1;
}
```

##### `create()`

* This function Creates objects, adds sprites, and set up physics.

```
create() {
  this.player = this.physics.add.sprite(100, 100, 'player');
}
``` 

### 1/16/26
Here is some new stuff I learned from phaser.

##### Animations (Frame control)

* With this you learn how animations are defined as data, how frame timing works, and how enignes separate animation logic from game logic.

```
this.anims.create({
  key: 'run',
  frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
  frameRate: 10,
  repeat: -1
});
``` 

##### State & Data Management

* You can learn how to store, update, and share data across a scene, keeping game logic predictable and organized.

```
this.score = 0;

increaseScore() {
  this.score += 10;
}
```

##### Collision Filtering & Callbacks

* In this you can know how to execute custom logic when objects overlap, how to control which collisions matter, and how to trigger game events.

```
this.physics.add.overlap(player, coins, (player, coin) => {
  coin.destroy();
  this.score += 1;
});
```

##### Saving Data

* You learn how to persist player data between sessions and connect gameplay with browser storage systems.

```
localStorage.setItem('highScore', this.score);
```

### 3/23/26
https://www.youtube.com/watch?v=hI_LS8bdkM4&list=PLnEt5PBXuAmtoTvwnF6Ksj7qy1JZHn5Nn&index=2 


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* C  hallenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
