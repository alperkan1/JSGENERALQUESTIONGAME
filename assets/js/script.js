const strBtn = document.getElementById("start")
const nctBtn = document.getElementById("forward")
const quizBox = document.getElementById("question-box")
const questE = document.getElementById("quiz")
const ansBtne = document.getElementById("ans-btn")
const userName = document.getElementById("username")
const score = document.getElementById("scores")

let randomquiz, quest
score.classList.add("none")    
strBtn.addEventListener("click", beginGame)
nctBtn.addEventListener("click", () =>{
    quest++
    addNextQuest()

} )

//* the start button starting the game**//
function beginGame() {
    strBtn.classList.add("none")
    randomquiz = question.sort(() => Math.random() - .5)
    quest = 0
    quizBox.classList.remove("none")
    userName.classList.add("none")
    score.classList.remove("none")  
    addNextQuest()

}
/**entering the username */

/** Moving to the next question and chooising random question from 10 questions so its not always the same questions */
function addNextQuest() {
    resetPage()
    VisualQ(randomquiz[quest])
}
/**show the question and answer  */
function VisualQ(question) {
    questE.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            
           
        }
        button.addEventListener("click", selectAns)
        ansBtne.appendChild(button)

    })
}
/**selecting and showing the correct answer and the resrat button */
function selectAns(e) {
    const selectBtn1 = e.target
    const correct = selectBtn1.dataset.correct
    setClass(document.body, correct)
    Array.from(ansBtne.children).forEach(button =>

        {
            setClass(button, button.dataset.correct)
          
        })
        if (randomquiz.length > quest + 1) {
        nctBtn.classList.remove("none")  
        
        } else{
            strBtn.innerText="RESTART"
            strBtn.classList.remove("none")  
            document.getElementById("score").innerText = 0   }
}
/** find the correct answer */
function setClass(element, correct) {
    clearClass(element)
    if (correct) {
        element.classList.add("correct")
        incrementScore()
        } else {
        element.classList.add("wrong")
        
    }
}
/** clear class to find the answer */
function clearClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

/**Page reset to and show forward Button */
function resetPage() {
    clearClass(document.body)
    nctBtn.classList.add("none")
    while (ansBtne.firstChild) {
        ansBtne.removeChild(ansBtne.firstChild)

    }
}
function incrementScore() {
   	let score = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++score
   
}
/** Questions for the quize */

const question = [{
        question: "Whats the Capital of Turkey?",
        answer: [{
                text: "Ankara",
                correct: true
            },
            {
                text: "Istanbul",
                correct: false
            },
            {
                text: "Adana",
                correct: false
            },
            {
                text: "Antalya",
                correct: false
            }
        ]
    },
    {
        question: "The Plaka is the oldest quarter of which city?",
        answer: [{
                text: "Athens",
                correct: true
            },
            {
                text: "Prague",
                correct: false
            },
            {
                text: "Rome",
                correct: false
            },
            {
                text: "Vienna",
                correct: false
            }
        ]

    }, {
        question: "What is axolotl?",
        answer: [{
                text: "A nerve in the brain.",
                correct: false
            },
            {
                text: "A multi-axled car.",
                correct: false
            },
            {
                text: "A type of mortice lock.",
                correct: false
            },
            {
                text: "A species of salamander.",
                correct: true
            }
        ]
    }, {
        question: "The Panama Canal was officially opened by which US president",
        answer: [{
                text: "Calvin Coolidge",
                correct: false
            },
            {
                text: "Herbert Hoover",
                correct: false
            },
            {
                text: "Theodore Roosevelt",
                correct: false
            },
            {
                text: "Woodrow Wilson",
                correct: true
            }
        ]
    },
    {
        question: "In which opera did Maria Callas make her last appearance at Covent Garden?",
        answer: [{
                text: "Carmen",
                correct: false
            },
            {
                text: "Tosca",
                correct: true
            },
            {
                text: "Madame Butterfly",
                correct: false
            },
            {
                text: "La Boheme",
                correct: false
            }
        ]
    },
    {
        question: "After Adam, Eve, Cain and Abel who is the next person mentioned in the Bible?",
        answer: [{
                text: "Enoch",
                correct: true
            },
            {
                text: "Jubal",
                correct: false
            },
            {
                text: "Lamech",
                correct: false
            },
            {
                text: "Zillah",
                correct: false
            }
        ]
    },
    {
        question: "Which US city is located on the Maumee River at Lake Erie??",
        answer: [{
                text: "Cleveland",
                correct: false
            },
            {
                text: "Buffalo",
                correct: false
            },
            {
                text: "New York",
                correct: false
            },
            {
                text: "Toledo",
                correct: true
            }
        ]
    },
    {
        question: "What is a kudzu?",
        answer: [{
                text: "Antelope",
                correct: true
            },
            {
                text: "Bird",
                correct: false
            },
            {
                text: "Jewish settlement",
                correct: false
            },
            {
                text: "Climbing plant",
                correct: false
            }
        ]
    },
    {
        question: "Outlawed from 1603 to 1774, which Scottish clan was known as the ‘Faceless Clan’?",
        answer: [{
                text: "Campbell",
                correct: false
            },
            {
                text: "MacGregor",
                correct: true
            },
            {
                text: "MacLeod",
                correct: false
            },
            {
                text: "MacDonald",
                correct: false
            }
        ]
    },
    {
        question: "From which country does tennis player Andres Gomez, winner of the 1990 French Championships, come?",
        answer: [{
                text: "Ecuador",
                correct: true
            },
            {
                text: "Peru",
                correct: false
            },
            {
                text: "Portugal",
                correct: false
            },
            {
                text: "Spain",
                correct: false
            }
        ]
    }
]