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

### X/X/XX:
* Text


<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
