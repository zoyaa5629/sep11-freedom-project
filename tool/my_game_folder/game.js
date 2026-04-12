// window.onload = function(){
//     var game = newPhaser.Game();
// }

// const config = {
//   type:Phaser.WEBGL
//   width: 500
//   height: 500
//   canvas:gameCanvas
//   scene: {
//         preload: preload,
//         create: create,
//         update: update
//     physics:{
//       default:"arcade",
//       arcade:{
//         gravity:{y:speedDown}
//         debug:true
//       }
//             }
//         }
// };


// const speedDown = 300

// class GameScene extends Phaser.Scene{
//   constructor(){
//     super("scene-game")
//   }

//   preload(){
//     this.load.image("bg", "/assets/bg.png")
//   }

//   create(){
//     this.add.image(0,0,"bg")
//   }

//   update(){}
// }



// var config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     physics:{
//       default:"arcade",
//       arcade:{
//         gravity:{y:speedDown}
//         debug:true
//       }
//     }
//     }
// };

// var game = new Phaser.Game(config);

// function preload ()
// {
// }

// function create ()
// {
// }

// function update ()
// {
// }



// var config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     }
// };

// var game = new Phaser.Game(config);

// th

// function preload ()
// {
// }

// function create ()
// {
// }

// function update ()
// {
// }

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Game</title>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
    <style>
        body {
            margin: 0;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <script src="game.js"></script>
</body>
</html>

// Define the game config
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MenuScene, QuizScene, ScoreScene],
};

const game = new Phaser.Game(config);

// Subject data for the quiz
const subjects = {
    chemistry: [
        { question: "What is the chemical symbol for water?", answers: ["H2O", "O2", "CO2", "H2"], correct: 0 },
        { question: "What is the atomic number of Carbon?", answers: ["6", "12", "8", "2"], correct: 0 },
    ],
    history: [
        { question: "Who was the first president of the United States?", answers: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], correct: 0 },
        { question: "When did World War II end?", answers: ["1945", "1939", "1918", "1965"], correct: 0 },
    ],
    math: [
        { question: "What is 5 + 7?", answers: ["10", "12", "15", "14"], correct: 1 },
        { question: "What is 9 x 3?", answers: ["27", "18", "12", "21"], correct: 0 },
    ],
};

let currentSubject = '';
let currentQuestionIndex = 0;
let score = 0;

// Menu Scene
class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        this.add.text(320, 150, 'Welcome to the Quiz Game', { fontSize: '32px', fill: '#fff' });

        const chemistryButton = this.add.text(320, 250, 'Chemistry', { fontSize: '24px', fill: '#fff' })
            .setInteractive()
            .on('pointerdown', () => this.startQuiz('chemistry'));

        const historyButton = this.add.text(320, 300, 'History', { fontSize: '24px', fill: '#fff' })
            .setInteractive()
            .on('pointerdown', () => this.startQuiz('history'));

        const mathButton = this.add.text(320, 350, 'Math', { fontSize: '24px', fill: '#fff' })
            .setInteractive()
            .on('pointerdown', () => this.startQuiz('math'));
    }

    startQuiz(subject) {
        currentSubject = subject;
        currentQuestionIndex = 0;
        score = 0;
        this.scene.start('QuizScene');
    }
}

// Quiz Scene
class QuizScene extends Phaser.Scene {
    constructor() {
        super({ key: 'QuizScene' });
    }

    create() {
        this.showQuestion();
    }

    showQuestion() {
        const question = subjects[currentSubject][currentQuestionIndex];

        // Display question
        this.add.text(100, 100, question.question, { fontSize: '24px', fill: '#fff' });

        // Display answers as buttons
        for (let i = 0; i < question.answers.length; i++) {
            const answerButton = this.add.text(100, 200 + i * 50, question.answers[i], { fontSize: '20px', fill: '#fff' })
                .setInteractive()
                .on('pointerdown', () => this.checkAnswer(i));
        }
    }

    checkAnswer(selectedIndex) {
        const question = subjects[currentSubject][currentQuestionIndex];

        if (selectedIndex === question.correct) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < subjects[currentSubject].length) {
            this.scene.restart();
        } else {
            this.scene.start('ScoreScene');
        }
    }
}

// Score Scene
class ScoreScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ScoreScene' });
    }

    create() {
        this.add.text(320, 150, `Your Score: ${score} / ${subjects[currentSubject].length}`, { fontSize: '32px', fill: '#fff' });

        const restartButton = this.add.text(320, 250, 'Play Again', { fontSize: '24px', fill: '#fff' })
            .setInteractive()
            .on('pointerdown', () => this.restartGame());

        const quitButton = this.add.text(320, 300, 'Quit', { fontSize: '24px', fill: '#fff' })
            .setInteractive()
            .on('pointerdown', () => this.quitGame());
    }

    restartGame() {
        this.scene.start('MenuScene');
    }

    quitGame() {
        this.sys.game.destroy(true);
    }
}
