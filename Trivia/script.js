const multiChoiceQuestions = [
    {
        question: 'What is the name of the Jewish land?',
        answer: "Israel"
    }, {
        question: 'Who is the capital city of Israel?',
        choices: ["Tel Aviv", "Jerusalem", "Haifa", "Ashdod"],
        answer: 1
    }, {
        question: 'Which city is the southernmost of these cities?',
        choices: ["Tel Aviv", "Jerusalem", "Eilat", "Ashdod"],
        answer: 2
    }, {
        question: 'Which ancient city is located in the Negev Desert?',
        choices: ["Jerusalem", "Tel Aviv", "Be'er Sheva", "Haifa"],
        answer: 2
    }, {
        question: 'What is the largest lake in Israel?',
        answer: "kinneret"
    }, {
        question: 'What is the name of the desert that spans much of southern Israel?',
        choices: ["Negev Desert", "Sahara Desert", "Arabian Desert", "Sinai Desert"],
        answer: 0
    }, {
        question: 'Which historical site is believed to be the burial place of Abraham, Sarah, Isaac, Rebecca, Jacob, and Leah?',
        choices: ["Masada", "Cave of Machpelah", "Western Wall", "Garden of Gethsemane"],
        answer: 1
    }, {
        question: 'Which mountain range runs along the eastern border of Israel, separating it from Jordan?',
        choices: ["Carmel Mountains", "Golan Heights", "Negev Desert", "Judean Mountains"],
        answer: 1
    }, {
        question: 'What is the highest mountain in Israel?',
        answer: 'Hermon'
    }, {
        question: 'Which historical port city in northern Israel offers picturesque views of the Mediterranean Sea and has a famous underground Crusader city?',
        choices: ["Jaffa", "Caesarea", "Netanya", "Ashkelon"],
        answer: 1
    }
]

class Quiz {
    constructor() {
        this.commendElement = document.getElementById('commend');
        this.formElement = document.getElementById('quizForm');
        this.questionElement = document.getElementById('question');
        this.labelElements = document.querySelectorAll('label');
        this.inputElement = document.getElementById('input');
        this.submitButton = document.getElementById('submitButton');
        this.resultElement = document.getElementById('result');
        this.resetElement = document.getElementById('resetButton');

        this.counter = 0;
        this.qIndex = 0;

        this.loadQuestion(this.qIndex);

        this.submitButton.addEventListener('click', () => {
            if (multiChoiceQuestions[this.qIndex].choices) {
                const selectedOption = document.querySelector('input[name="choices"]:checked');
                if (selectedOption) {
                    const selectedValue = parseInt(selectedOption.value);
                    if (selectedValue === multiChoiceQuestions[this.qIndex].answer) {
                        this.resultElement.textContent = "Correct!";
                        this.resultElement.style.color = "green";
                        this.counter++;
                    } else {
                        this.resultElement.textContent = "Incorrect!";
                        this.resultElement.style.color = "red";
                    }
                    this.qIndex++;
                    if (this.qIndex === multiChoiceQuestions.length) {
                        setTimeout(() => {
                            this.endGame();
                        }, 1000);
                    } else {
                        setTimeout(() => {
                            this.loadQuestion(this.qIndex);
                        }, 1000);
                    }
                } else {
                    this.resultElement.textContent = "Please choose an answer.";
                }
            } else {
                const userAnswer = this.inputElement.value;
                if (!userAnswer.trim()) {
                    this.resultElement.textContent = "Please insert an answer.";
                } else {
                    if (userAnswer.trim() === multiChoiceQuestions[this.qIndex].answer.trim()) {
                        this.resultElement.textContent = "Correct!";
                        this.resultElement.style.color = "green";
                        this.counter++;
                    } else {
                        this.resultElement.textContent = "Incorrect!";
                        this.resultElement.style.color = "red";
                    }
                    this.qIndex++;
                    if (this.qIndex === multiChoiceQuestions.length) {
                        this.endGame();
                    } else {
                        setTimeout(() => {
                            this.loadQuestion(this.qIndex);
                            this.resetElement.style.color = "";
                        }, 1000);
                    }
                }
            }
        });

        this.resetElement.addEventListener('click', () => {
            this.counter = 0;
            this.qIndex = 0;
            this.resultElement.textContent = "";
            this.resetElement.hidden = true;
            this.formElement.style.display = "block";
            this.loadQuestion(this.qIndex);
        });
    }

    clearChoices() {
        const radioInput = document.querySelector('input[type="radio"]:checked');
        radioInput.checked = false;

        this.inputElement.value = '';
    }

    loadQuestion(qIndex) {
        this.questionElement.textContent = multiChoiceQuestions[qIndex].question;
        if (multiChoiceQuestions[qIndex].choices) {
            this.labelElements.forEach((labelElement, index) => {
                labelElement.style.display = 'block';
                const spanElement = labelElement.querySelector('span');
                spanElement.textContent = multiChoiceQuestions[qIndex].choices[index];
            });
            this.commendElement.textContent = "Choose the correct answer"
            this.inputElement.style.visibility = "hidden";
            this.resultElement.textContent = "";
            this.clearChoices()
        } else {
            this.commendElement.textContent = "Write the correct answer";
            this.inputElement.style.visibility = "visible";
            this.labelElements.forEach(labelElement => {
                labelElement.style.display = 'none';
                this.resultElement.textContent = "";
            });
        }
    }

    endGame() {
        this.resultElement.textContent = `You are correct in ${this.counter} out of ${this.qIndex} questions`;
        if (this.counter < (this.qIndex / 2)) {
            this.resultElement.style.color = "red";
        } else {
            this.resultElement.style.color = "green";
        }
        this.resetElement.style.color = "";
        this.resetElement.hidden = false;
        this.formElement.style.display = "none";
    }
}

new Quiz();
