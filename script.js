const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const resultContainer = document.getElementById('result-container');

    questionContainer.innerHTML = quizData[currentQuestion].question;

    optionsContainer.innerHTML = '';
    quizData[currentQuestion].options.forEach((option) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    resultContainer.innerText = '';
}

function checkAnswer(userAnswer) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerText = `You scored ${score} out of ${quizData.length}!`;
    resultContainer.style.color = 'white';
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('question-container').innerHTML = '';
    document.querySelector('button').style.display = 'none';
}

function nextQuestion() {
    loadQuestion();
    document.querySelector('button').style.display = 'block';
}

// Load the first question
loadQuestion();