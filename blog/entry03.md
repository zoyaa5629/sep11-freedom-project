# Entry 3
##### 2/9/26

## Context
During the winter break we were given a couple days to learn about our tool. During those days I learned more and more about phaser. In my previous blog I set the goal to understand phaser more and I think I did accomplish my goal. I spent the specific days tuesday, wednesday, and thursday to tinker with phaser and learn more about it.

### Learning Log Notes

#### Adding A Background
There are different types of ways to add a background to phaser. One way I learned from [these videos](https://www.youtube.com/watch?v=0qtg-9M3peI) and the other I pulled from the [official phaser website](https://phaser.io/tutorials/making-your-first-phaser-3-game/part3). I have mostly been using code from the videos and it works just fine with me. 

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
This is how to add a background in phaser. The `class GameScene extends Phaser.Scene` is what is being used to put in and organize the programs logic. `preload`, `create`, and `update` are all adding the picture/background to the main screen. You would result in something like this: 

<img width="647" height="480" alt="Screenshot 2026-02-07 1 17 55 AM" src="https://github.com/user-attachments/assets/3956fb20-c980-45c1-b782-f3f3fc97830a" />

Simple and a good starter background. 

#### Collision Filtering and Callbacks
Using in-game code physics you can code in collision so that the sprites or any characters of sort do not overlap and go through each other. The slice of code I pulled is this: 

```
this.physics.add.overlap(player, coins, (player, coin) => {
  coin.destroy();
  this.score += 1;
});
```
Adding this code to your game will make the sprite not go through walls and be more playable. The end result is something like this where the sprite would keep bouncing off the green walls.

<img width="577" height="458" alt="image" src="https://github.com/user-attachments/assets/92afdc0b-db93-4e7d-b226-be0c67e31c2e" />

#### Data Manegment 
When you want to make a game that can save your scores, wins, etc for playing later, phaser had code for that. You can keep the data organized and game logic predictable. The code for this is: 

```
this.score = 0;

increaseScore() {
  this.score += 10;
}
```
Adding this to your code will add 10 points to your score each time you win. This also goes hand-in-hand with saving your data for later playthroughs of the game. The code for that is:

```
localStorage.setItem('highScore', this.score);
```
This code saves your high score whenever you leave and comeback to the game. This makes the game more enjoyable for being able to keep count of your score rather than only keeping that while it is still on. 

### Skills
Later after this blog I do wish to expand my knowledge on phaser like for example how to make a loading screen and how to add music to your game. This curiosity is helping me grow in other ways outside of this project like learning how to google because in the project I rely on it to teach me about phaser. I can't pick up a book and start reading about phaser, I need google so it has gotten me into the habit of googling before asking any questions. It is not good all the time but I believe Google is everyones bestfriend. I have also learned to embrace failure because no one is perfect, especially me. I made a lot of mistakes while tinkkering with phaser because it is a hard program but I did it. The mistakes are what helped me grow better than getting things immediately. 

### EDP
The Engineering Design Process I am on and one I feel most studetnts are in create a prototype. I am learrning my tool and slowly but surely creating a prototype game which will hoipefully help me with my official end result. Practice makes perfect and embrace your mistakes because they are what drives you forward. 

### Summary
Overall I learned quite a bit from phaser. I leanred things like how to add a backdrop, collion physics, and saving data.



[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
