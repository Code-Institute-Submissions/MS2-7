const headerElement = document.getElementById('header');
const rulesElement = document.getElementById('rules');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreCounter = document.getElementById('score-count');
const livesCounter = document.getElementById('lives-counter');

let countRightAnswers = 0;
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    headerElement.classList.add('hide')
    rulesElement.classList.add('hide')
    startButton.classList.add('hide')
    scoreCounter.classList.remove('hide')
    livesCounter.classList.remove('hide')
    shuffledQuestions = easyquestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    countRightAnswers = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    document.getElementById('crest').src = question.pict
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
        answerButtonsElement.classList.remove('disable')
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer() {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
        answerButtonsElement.classList.add('disable')
    } else {
        startButton.innerText = 'Try Again'
        startButton.classList.remove('hide')
    }
    if (selectedButton.dataset = correct) {
        countRightAnswers++
    }
    document.getElementById('score').innerHTML = countRightAnswers
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

const easyquestions = [
    {
        pict:  "assets/images/easy-crests/manutd.png",
        answers: [
            {text: 'Premier League', correct: true},
            {text: 'Championship', correct: false},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: false}
        ]
    },
    {
        pict:  "assets/images/easy-crests/millwall.png",
        answers: [
            {text: 'Premier League', correct: false},
            {text: 'Championship', correct: true},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: false}
        ]
    },
    {
        pict:  "assets/images/easy-crests/rangers.png",
        answers: [
            {text: 'Premier League', correct: false},
            {text: 'Championship', correct: false},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: true}
        ]
    },
    {
        pict:  "assets/images/easy-crests/villa.png",
        answers: [
            {text: 'Premier League', correct: true},
            {text: 'Championship', correct: false},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: false}
        ]
    },
    {
        pict:  "assets/images/easy-crests/coventry.png",
        answers: [
            {text: 'Premier League', correct: false},
            {text: 'Championship', correct: true},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: false}
        ]
    },
    {
        pict:  "assets/images/easy-crests/hibs.png",
        answers: [
            {text: 'Premier League', correct: false},
            {text: 'Championship', correct: false},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: true}
        ]
    },
    {
        pict:  "assets/images/easy-crests/qpr.png",
        answers: [
            {text: 'Premier League', correct: false},
            {text: 'Championship', correct: true},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: false}
        ]
    },
    {
        pict:  "assets/images/easy-crests/salop.png",
        answers: [
            {text: 'Premier League', correct: false},
            {text: 'Championship', correct: false},
            {text: 'League One', correct: true},
            {text: 'Scottish Premiership', correct: false}
        ]
    },
    {
        pict:  "assets/images/easy-crests/arsenal.png",
        answers: [
            {text: 'Premier League', correct: true},
            {text: 'Championship', correct: false},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: false}
        ]
    },
    {
        pict:  "assets/images/easy-crests/sunderland.png",
        answers: [
            {text: 'Premier League', correct: false},
            {text: 'Championship', correct: false},
            {text: 'League One', correct: true},
            {text: 'Scottish Premiership', correct: false}
        ]
    },

]

