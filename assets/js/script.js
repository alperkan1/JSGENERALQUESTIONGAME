const 
const randomquiz, quest
const strBtn = document.getElementById("start")
const quizBox = document.getElementById("question-box")

strBtn.addEventListener("click", beginGame)

//* the start button starting the game**//
function beginGame() {
strBtn.classList.add("none")
quizBox.classList.remove("none")
forwardQuiz()
randomquiz = question.sort(() => Math.random() - .5)
quest = 0
}

function addNextQuest() {
    VisualQ(randomquiz[quest])
}

function VisualQ(question) {

}

function forwardQuiz() {

}

function selectAns() {


}

const question = {
    q1:"Whats the Capital of Turkey?",
    ans:[
        {text:"Ankara", correct: true},
        {text:"Istanbul", correct: false},
        {text:"Adana", correct: false},
        {tetx:"Antalya", correct:false}
    ]
}

 