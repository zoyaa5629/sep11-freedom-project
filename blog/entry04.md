# Entry 4
##### 4/29/26

## Content
We are nearly done with are Freedom project and have been working hard for it. My project, the quiz game made with phaser, has been coming together well though there were some bumps in the road. First I will explain somethings I learned for my quiz game.

#### Questions
Obviously for a quiz game I need to make questions. I figured it out on phaser through specific youtube videos while the other ones I watched were pretty broad and not exactly what I had in mind. 

```
const subjects = {
    chemistry: [
        { q: "Water formula?", a: ["H2O", "O2", "CO2", "H2"], c: 0 },
        { q: "Carbon atomic number?", a: ["6", "12", "8", "2"], c: 0 }
    ],
    history: [
        { q: "First US president?", a: ["George Washington", "Lincoln", "Jefferson", "Adams"], c: 0 },
        { q: "WW2 ended?", a: ["1945", "1939", "1918", "1965"], c: 0 }
    ],
    math: [
        { q: "5 + 7?", a: ["10", "12", "15", "14"], c: 1 },
        { q: "9 x 3?", a: ["27", "18", "12", "21"], c: 0 }
    ]
};
```
Above is my code for the questions I made with phaser. You write the subject and then the questions in that category as well as the answer in that array. The `c: 1` and `c: 0` is what determines the correct answer in the array of options.

#### Answer
Now that we have our questions I had to find out how to make it so that the player earns a score for the right answer. 

```
answer(i) {
        let data = subjects[subject][questionIndex];

        if (i === data.c) score++;
```
Above is how I coded the way to get the answer. The first line inside the `answer(i)` basically lets the code collet the data from the player. it specifies the question index so that it finds the correct answer in the array. 

#### Score
Now we have to properly put in the code that enables the player to actually earn the point and also restart to go back to the main menu or redo their quiz if they weren't happy. 

```
if (questionIndex < subjects[subject].length) {
            this.scene.restart();
        } else {
            this.scene.start("score");
        }
```
In the code above it will make the score and the restart option appear on the screen after completing all the questions. 

## Challenges
Like said before there were some bumps in the road I had faced. One of my biggest ones was the `Game config`. It basically draws out the game and for the longest time I had it at the top of my game and kept wondering why my game was not showing up until I got the idea to move it at the bottom and it worked. Apparently the reasoning is because you have to draw the game after doing all the code. It's like cooking where you need to have a recipe and ingredients before putting anything in the oven or on the stove. Below is my `game config` code. 

```
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#222",
    scene: [Menu, Quiz, Score]
};

new Phaser.Game(config);
```
The reason why I had it at the top was from a video I saw when I was first starting phaser where the woman in the video was coding this as one of the first things so leaving it at the top just made sense to me. 

## EDP
When it comes to the EDP I think I am at the stage where I am creating a prototype and testing it since I am still not done with it but still checking in between to see how it is running and this is in the later stage of the project so I am pretty close to the last two stages which I hope I have reachedd by the time we write the next blog. We are done learning and now just coding so it makes sense that I am in a more later stage of my EDP. 

## Skills
Some main skills that I can takeaway this time from my project is problem decomposition and debugging. When using Phaser these two skills are so importantt because Phaser is a hard tool and you need lots of patientce with it so problem decomposition has helped a lot mostly because I usually apply it to other subjects like math or when I am in a difficult situation I break down what is happening and what needs to be done. Debugging has made me a better problem solver in anything especially video games which I have actualy seen. 


[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
