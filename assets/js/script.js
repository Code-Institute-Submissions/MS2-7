const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
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
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Try Again'
        startButton.classList.remove('hide')
    }
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

const questions = [
    {
        question: 'Manchester United?',
        answers: [
            {text: 'Premier League', correct: true},
            {text: 'Championship', correct: false},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: false}
        ]
    },
    {
        question: 'Millwall?',
        answers: [
            {text: 'Premier League', correct: false},
            {text: 'Championship', correct: true},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: false}
        ]
    },
    {
        question: 'Rangers?',
        answers: [
            {text: 'Premier League', correct: false},
            {text: 'Championship', correct: false},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: true}
        ]
    },
    {
        question: 'Aston Villa?',
        answers: [
            {text: 'Premier League', correct: true},
            {text: 'Championship', correct: false},
            {text: 'League One', correct: false},
            {text: 'Scottish Premiership', correct: false}
        ]
    },

]
