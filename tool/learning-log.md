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


 
<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
