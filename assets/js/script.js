const strBtn = document.getElementById("start")
const nctBtn = document.getElementById("forward-btn")
const quizBox = document.getElementById("question-box")
const questE = document.getElementById("quiz")
const ansBtne = document.getElementById("ans-btn")

let randomquiz, quest

strBtn.addEventListener("click", beginGame)

//* the start button starting the game**//
function beginGame() {
strBtn.classList.add("none")
randomquiz = question.sort(() => Math.random() - .5)
quest = 0
quizBox.classList.remove("none")
addNextQuest()
}

function addNextQuest() {
    VisualQ(randomquiz[quest])
}

function VisualQ(question) {
    questE.innerText=question.question


}

function forwardQuiz() {


}

function selectAns() {


}

const question = [{
    question:"Whats the Capital of Turkey?",
    answer:[
        {text:"Ankara", correct: true},
        {text:"Istanbul", correct: false},
        {text:"Adana", correct: false},
        {tetx:"Antalya", correct:false}
    ]
}
]
 