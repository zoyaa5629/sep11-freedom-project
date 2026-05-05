# Entry 5
##### 4/29/26

## Content
We are finally done with the MVP of our projects. I feel proud and happy to get this far with something I have made completely on my own. This blog is about discussing how I made my MVP. First the link to my code: https://github.com/zoyaa5629/sep11-freedom-project/blob/main/tool/my_game_folder/game.js 

Also a video preview of my project:
[Screen recording 2026-04-13 1.16.16 AM.webm](https://github.com/user-attachments/assets/4c7734bb-f2e4-41e8-9e1c-7842d05f88c7)

Throughout the year I have been learning how to make my projectt through various videosand the official phjaser website. The videos especially helped me as I saw a person suggest on the slack channel and she seemed like she really knew Phaser well so I took her advice and it really did work. 

I finished my project with a couple bumps and hiccups but that was all part of the learning process. I wouldn't have my code and project without making many mistakes. Normally I don't like asking other people for help on the code since I am a more independent person in this class especially so I don't ask that many questions unless I absolutely have to but luckily it hasn't gotten to that point and I always find my answers on the internet and through online forums. 

Below is my whole code: 
```
// Questions
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

let subject = "";
let questionIndex = 0;
let score = 0;

// MENU
class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    create() {
        this.add.text(250, 100, "Quiz Game", { fontSize: "40px", fill: "#fff" });

        ["chemistry", "history", "math"].forEach((subj, i) => {
            this.add.text(300, 250 + i * 50, subj.toUpperCase(), { fill: "#0ff" })
                .setInteractive()
                .on("pointerdown", () => {
                    subject = subj;
                    questionIndex = 0;
                    score = 0;
                    this.scene.start("quiz");
                });
        });
    }
}

// QUIZ
class Quiz extends Phaser.Scene {
    constructor() {
        super("quiz");
    }

    create() {
        let data = subjects[subject][questionIndex];

        this.add.text(100, 100, data.q, { fontSize: "24px", fill: "#fff" });

        data.a.forEach((ans, i) => {
            this.add.text(100, 200 + i * 50, ans, { fill: "#0f0" })
                .setInteractive()
                .on("pointerdown", () => this.answer(i));
        });
    }

    answer(i) {
        let data = subjects[subject][questionIndex];

        if (i === data.c) score++;

        questionIndex++;

        if (questionIndex < subjects[subject].length) {
            this.scene.restart();
        } else {
            this.scene.start("score");
        }
    }
}

// SCORE
class Score extends Phaser.Scene {
    constructor() {
        super("score");
    }

    create() {
        this.add.text(250, 150, `Score: ${score}`, { fontSize: "32px", fill: "#fff" });

        this.add.text(300, 250, "Play Again", { fill: "#0ff" })
            .setInteractive()
            .on("pointerdown", () => this.scene.start("menu"));
    }
}

// GAME CONFIG (always at bottom)
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#222",
    scene: [Menu, Quiz, Score]
};

new Phaser.Game(config);
```
I like to keep my code organized which I learned from p5js since its very nitpicky about order but I also learned it helps me keep organized. In my last blog I broke down some bits of my code and how they worked. I have the questions and the answers up top and towards the bottom is the code to keep score of the player's answers. 

## Chalenges
One of my biggest challenges was being punctual about my timeline since I am not the best with keeping up with timelines so it made me fall behind a bit. It is a really big habit of mine that I wish I could get ride off but this project is really teaching me about timelines since time flew by so fast this year. A challenge code related that I faced was thee `game config` being in the wrong place. Although I mentioned this in my last blog it is very significant to me because of how important that code is and how frustrated I was getting over how my project was just showing a blank screen even though I had all this code and all I had to do was move it down. 

## EDP
The stage of EDP I am currently on is defenitly improve as needed because now that we have out mvp we are now focusing on out beyond mvp which gives us the opportunity to polish and make our projects better. I am currently working on the beyond the mvp so that is why I am at the stage of EDP where I am improving as needed. 

## Skills
Some skills I am taking away this time is how to learn and time management. How to learn because I learned a whole tool on my own and it is helping me prepare for the real world where maybe I am put in a position where I don't know what I am doing so now I can learn more and have more of an open mindset. Time management because as said before I am terrible with due dates so this project is teaching me the value of it and how to work better and space out everything not do it all at once at the last minute. 


[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
