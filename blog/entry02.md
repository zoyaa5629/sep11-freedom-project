# Entry 2
##### 12/23/25

## Context
As the 2025 year comes to an end my knowledge of my tool phaser has expanded since I last wrote a blog. I have learned many things that will be very important in creating my end of year game. 

Most of my learning has come from this playlist called [Getting Started with Phaser.](https://www.youtube.com/playlist?list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no)

### Sprites
- If you want to move the sprite on the x axis you need to increase the y axis and visa versa
- It can also help have the sprite reappear at the top when complety scrolled to the bottom. Achievable with `TileSprite`.

  
  ```
   var randomX = Phaser.Math.Between(0, config.width);
    alien.x = randomX;
  ```
This code generates a random x value and assigns the sprite to that position.

- Spritesheets are a collection of images in a single file seperated by frames.
-  `Repeat` will tell me how many times the code will loop
-  If we want the animation to disappear we repeat it once.

### Physics 
- Phasers physics adds gravity, velocity, and detects collisions
  ```
  this.physics.add.sprite(x, y, "player");
  ```
This code adds the basic physics system to your game. 

```
physics: {
    default: "arcade",
    arcade:{
        debug: false
    }
  }
}
```
This code debugs it to false and makes it easy to use.

### Keyboard
- Phaser enables the player to move the sprite based on the keyboard commands assigned.
```
this.input.keyboard.createCursorKeys();
```
This code makes the sprite move using the arrow keys. 

```
this.input.keyboard.addKey("W");
```
This code makes the sprite move using WASD (W).

## EDP
After tinkering a lot with my tool for this blog, I have learned that I am at the create a prototype stage. My knowledge is not the best since there is a lot to Phaser but I am in the process of making a prototype. I want to be at Improve as needed and Communicate the results because that means I would be mastering Phaser and good enought to feel confident in what I am making. 

## Skills
The ways I am developing outside this project is becoming a better problem solver. I tend to search for answers better and think smarter with my answers. Learning a coding tool from scratch has helped me become a better scavenger for more results and more answers. I am also a bit ambitious so because I am determined on really understanding Phaser I become more ambitious and determined in my general life. 

## Christmas Break
This Christmas break I plan on utilizing my time when I can in between holiday celebrations and my birthday. I will use tuesday, wednesday, and maybe thursday to tinker and understand Phaser more.

## Summary
I have learned code that can add on more to a base game and plan on utilizing my holiday time to tinker with Phaser.

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
