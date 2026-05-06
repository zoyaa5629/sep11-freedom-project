

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
        this.add.text(250, 100, "Quiz Game", { fontSize: "40px", fill: "#fcfafa" });

        ["chemistry", "history", "math"].forEach((subj, i) => {
            this.add.text(300, 250 + i * 50, subj.toUpperCase(), { fill: "#fcfafa" })
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

        this.add.text(100, 100, data.q, { fontSize: "24px", fill: "#fcfafa" });

        data.a.forEach((ans, i) => {
            this.add.text(100, 200 + i * 50, ans, { fill: "#fcfafa" })
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

        this.add.text(300, 250, "Play Again", { fill: "#fcffff" })
            .setInteractive()
            .on("pointerdown", () => this.scene.start("menu"));
    }
}

// GAME CONFIG (always at bottom)
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#FFC0CB",
    scene: [Menu, Quiz, Score]
};

new Phaser.Game(config);
