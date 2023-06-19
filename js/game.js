function startGame() {


    removeStartButton()
    showFirstQuiz()

}

// remove o botao de start do box principal
function removeStartButton() {
    let startButton = document.querySelector('.box-option')

    startButton.style.top = '-70%'
    startButton.style.opacity = '.5'
}

// array que guarda acertos no quiz
let acertos = []

function addHit() {
    console.log('acertou!')
}

let correctAnswers = document.querySelectorAll('.correctAnswer')
correctAnswers.addEventlistener("click", addHit())

// mostra o primeiro quiz
function showFirstQuiz() {
    let boxGame = document.getElementById('firstQuiz')

    boxGame.style.bottom = '-70%'
}

function showSecondQuiz() {

    // retira o quiz ja respondido da tela
    let firstBoxGame = document.getElementById('firstQuiz')

    firstBoxGame.style.bottom = '55%'


    // sobe o proximo quiz para a tela
    let secondBoxGame = document.getElementById('secondQuiz')

    secondBoxGame.style.bottom = '-10%'
}

function showThirdQuiz() {

    // retira o quiz ja respondido da tela
    let secondBoxGame = document.getElementById('secondQuiz')

    secondBoxGame.style.bottom = '105%'


    // sobe o proximo quiz para a tela
    let thirdBoxGame = document.getElementById('thirdQuiz')

    thirdBoxGame.style.bottom = '50%'
}

function showResult() {

    // tira o ultimo quiz da tela para mostrar o resultado
    let thirdBoxGame = document.getElementById('thirdQuiz')
    thirdBoxGame.style.bottom = '150%'

    // mostra o resultado do quiz na tela
    let resultBox = document.querySelector('.resultBox')

    resultBox.style.left = '0%'
    resultBox.style.opacity = '1'
}
