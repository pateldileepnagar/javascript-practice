const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');
const resultCard = document.getElementById('result-card');
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');
const finalScoreEl = document.getElementById('final-score');
const percentageScoreEl = document.getElementById('percentage-score');
const scoreMessageEl = document.getElementById('score-message');

const questions = [
    {
        text: 'What is the capital of France?',
        options: ['Madrid', 'Rome', 'Paris', 'Berlin'],
        answer: 2,
    },
    {
        text: 'Which language is primarily used for web page structure?',
        options: ['CSS', 'HTML', 'Python', 'SQL'],
        answer: 1,
    },
    {
        text: 'What does CSS stand for?',
        options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Syntax', 'Coding Style Script'],
        answer: 1,
    },
    {
        text: 'Which of these is a JavaScript framework?',
        options: ['Laravel', 'React', 'Django', 'Rails'],
        answer: 1,
    },
    {
        text: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        answer: 0,
    },
    {
        text: 'How many seconds are there in one minute?',
        options: ['30', '45', '60', '90'],
        answer: 2,
    },
    {
        text: 'Which HTML element is used for the largest heading?',
        options: ['<paragraph>', '<heading>', '<h1>', '<title>'],
        answer: 2,
    },
    {
        text: 'What is the result of 5 × 3?',
        options: ['15', '8', '10', '12'],
        answer: 0,
    },
    {
        text: 'In programming, a loop is used to:',
        options: ['Store values', 'Repeat instructions', 'Define functions', 'Check conditions once'],
        answer: 1,
    },
    {
        text: 'Which keyword declares a variable in JavaScript?',
        options: ['let', 'run', 'create', 'func'],
        answer: 0,
    },
];

let userSelections = Array(questions.length).fill(null);
let submitted = false;

function createQuestionCard(question, index) {
    const card = document.createElement('article');
    card.className = 'quiz-card';

    const questionTitle = document.createElement('h2');
    questionTitle.className = 'question-title';
    questionTitle.textContent = `${index + 1}. ${question.text}`;
    card.appendChild(questionTitle);

    const optionGroup = document.createElement('div');
    optionGroup.className = 'option-group';

    question.options.forEach((optionText, optionIndex) => {
        const optionLabel = document.createElement('label');
        optionLabel.className = 'option-label';

        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `question-${index}`;
        optionInput.value = optionIndex;
        optionInput.disabled = submitted;

        optionInput.addEventListener('change', () => {
            userSelections[index] = optionIndex;
        });

        const optionSpan = document.createElement('span');
        optionSpan.className = 'option-text';
        optionSpan.textContent = optionText;

        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(optionSpan);
        optionGroup.appendChild(optionLabel);
    });

    card.appendChild(optionGroup);
    return card;
}

function loadQuiz() {
    quizContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const card = createQuestionCard(question, index);
        quizContainer.appendChild(card);
    });
    resultCard.classList.add('hidden');
    submitted = false;
    userSelections = Array(questions.length).fill(null);
}

function getScoreMessage(percentage) {
    if (percentage >= 90) {
        return 'Excellent work! You really know your stuff.';
    }
    if (percentage >= 70) {
        return 'Good job! A little more practice and you will be perfect.';
    }
    return 'Needs improvement. Try again and learn from the answers.';
}

function showResults(score, incorrect) {
    const percentage = Math.round((score / questions.length) * 100);

    correctCountEl.textContent = score;
    incorrectCountEl.textContent = incorrect;
    finalScoreEl.textContent = `${score} / ${questions.length}`;
    percentageScoreEl.textContent = `${percentage}%`;
    scoreMessageEl.textContent = getScoreMessage(percentage);
    resultCard.classList.remove('hidden');
}

function highlightAnswers() {
    const cards = quizContainer.querySelectorAll('.quiz-card');

    cards.forEach((card, questionIndex) => {
        const optionLabels = card.querySelectorAll('.option-label');
        optionLabels.forEach((label, optionIndex) => {
            if (optionIndex === questions[questionIndex].answer) {
                label.classList.add('correct-answer');
            }
            const input = label.querySelector('input');
            if (input.checked && optionIndex !== questions[questionIndex].answer) {
                label.classList.add('incorrect-answer');
            }
        });
    });
}

function handleSubmit() {
    if (submitted) {
        return;
    }

    const unansweredCount = userSelections.filter((selection) => selection === null).length;
    if (unansweredCount > 0) {
        alert(`Please answer all ${questions.length} questions before submitting.`);
        return;
    }

    submitted = true;
    let score = 0;
    let incorrect = 0;

    questions.forEach((question, index) => {
        const selected = userSelections[index];
        if (selected === question.answer) {
            score += 1;
        } else {
            incorrect += 1;
        }
    });

    highlightAnswers();
    showResults(score, incorrect);
    const inputs = quizContainer.querySelectorAll('input');
    inputs.forEach((input) => {
        input.disabled = true;
    });
}

submitButton.addEventListener('click', handleSubmit);
restartButton.addEventListener('click', loadQuiz);

loadQuiz();
