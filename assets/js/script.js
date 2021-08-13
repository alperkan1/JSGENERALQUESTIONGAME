const strBtn = document.getElementById("start")
const nctBtn = document.getElementById("forward-btn")
const quizBox = document.getElementById("question-box")
const questE = document.getElementById("quiz")
const ansBtne = document.getElementById("ans-btn")
const userName= document.getElementById("username")

let randomquiz, quest

strBtn.addEventListener("click", beginGame)


//* the start button starting the game**//
function beginGame() {
strBtn.classList.add("none")
randomquiz = question.sort(() => Math.random() - .5)
quest = 0
quizBox.classList.remove("none")
userName.classList.add("none")
addNextQuest()

}
function username(){

}

function addNextQuest() {
    VisualQ(randomquiz[quest])
}
/**show the question */
function VisualQ(question) {
    questE.innerText=question.question


}

function forwardQuiz() {


}

function selectAns() {


}

/** Questions for the quize */

const question = [{
    question:"Whats the Capital of Turkey?",
    answer:[
        {text:"Ankara", correct: true},
        {text:"Istanbul", correct: false},
        {text:"Adana", correct: false},
        {tetx:"Antalya", correct:false}
    ]
},
{  
    question:"The Plaka is the oldest quarter of which city?",
    answer:[
        {text:"Athens", correct: true},
        {text:"Prague", correct: false},
        {text:"Rome", correct: false},
        {tetx:"Vienna", correct:false}
    ] 

},{
    question:"What is axolotl?",
    answer:[
        {text:"A nerve in the brain.", correct: false},
        {text:"A multi-axled car.", correct: false},
        {text:"A type of mortice lock.", correct: false},
        {tetx:"A species of salamander.", correct:true}
    ]
},{
    question:"The Panama Canal was officially opened by which US president",
    answer:[
        {text:"Calvin Coolidge", correct: false},
        {text:"Herbert Hoover", correct: false},
        {text:"Theodore Roosevelt", correct: false},
        {tetx:"Woodrow Wilson", correct:true}
    ]
},
{
    question:"In which opera did Maria Callas make her last appearance at Covent Garden?",
    answer:[
        {text:"Carmen", correct: false},
        {text:"Tosca", correct: true},
        {text:"Madame Butterfly", correct: false},
        {tetx:"La Boheme", correct:false}
    ]
},
{
    question:"After Adam, Eve, Cain and Abel who is the next person mentioned in the Bible?",
    answer:[
        {text:"Enoch", correct: true},
        {text:"Jubal", correct: false},
        {text:"Lamech", correct: false},
        {tetx:"Zillah", correct:false}
    ]
},
{
    question:"Which US city is located on the Maumee River at Lake Erie??",
    answer:[
        {text:"Cleveland", correct: false},
        {text:"Buffalo", correct: false},
        {text:"Cleveland", correct: false},
        {tetx:"Toledo", correct:true}
    ]
},
{
    question:"What is a kudzu?",
    answer:[
        {text:"Antelope", correct: true},
        {text:"Bird", correct: false},
        {text:"Jewish settlement", correct: false},
        {tetx:"Climbing plant", correct:false}
    ]
},
{
    question:"Outlawed from 1603 to 1774, which Scottish clan was known as the ‘Faceless Clan’?",
    answer:[
        {text:"Campbell", correct: false},
        {text:"MacGregor", correct: true},
        {text:"MacLeod", correct: false},
        {tetx:"MacDonald", correct:false}
    ]
},
{
    question:"From which country does tennis player Andres Gomez, winner of the 1990 French Championships, come?",
    answer:[
        {text:"Ecuador", correct: true},
        {text:"Peru", correct: false},
        {text:"Portugal", correct: false},
        {tetx:"Spain", correct:false}
    ]
}
]
 