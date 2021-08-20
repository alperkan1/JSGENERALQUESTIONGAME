const strBtn = document.getElementById("start")
const nctBtn = document.getElementById("forward")
const quizBox = document.getElementById("question-box")
const questE = document.getElementById("quiz")
const ansBtne = document.getElementById("ans-btn")
const score = document.getElementById("scores")
const userName = document.getElementById("form1")
const uName = document.getElementById("uName")
var audio = new Audio("assets/sound/sound.mp3")
var wrong = new Audio("assets/sound/wrong.mp3")

let randomquiz, quest

score.classList.add("none")
strBtn.classList.add("none")
uName.classList.add("none")
userName.addEventListener('submit', getFormDetails)
strBtn.addEventListener("click", beginGame)
nctBtn.addEventListener("click", () => {
    quest++
    addNextQuest()
})

/**registraions code for username */
function register() {
    strBtn.classList.remove("none")
    strBtn.addEventListener("click", beginGame)
}

//* the start button starting the game**//
function beginGame() {
    strBtn.classList.add("none")
    randomquiz = question.sort(() => Math.random() - .5)
    quest = 0
    uName.classList.remove("none")
    quizBox.classList.remove("none")
    userName.classList.add("none")
    score.classList.remove("none")
    ansBtne.classList.remove("none")
    questE.classList.remove("none")
    document.getElementById("score").innerText = 0
    score.removeAttribute('style')
    uName.removeAttribute("style")
    addNextQuest()
}

/**entering the username */
function getFormDetails(event) {
    event.preventDefault();
    let name = document.getElementById('fname');
    document.getElementById('name').textContent = name.value;
    alert("username Registered")
    userName.classList.add("none")
    register()
}

/** Moving to the next question and chooising random question from 10 questions so its not always the same questions */
function addNextQuest() {
    resetPage()
    VisualQ(randomquiz[quest])
    ansBtne.removeAttribute('style')
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
    setClass(selectBtn1, selectBtn1.dataset.correct)
    if (randomquiz.length > quest + 1) {
        nctBtn.classList.remove("none")
    } else {
        uName.style.fontSize = "40px"
        uName.style.textAlign = "center"
        score.style.fontSize = "40px"
        score.style.textAlign = "center"
        ansBtne.classList.add("none")
        questE.classList.add("none")
        strBtn.innerText = "RESTART"
        strBtn.classList.remove("none")
    }
}

/** find the correct answer */
function setClass(element, correct) {
    clearClass(element)
    if (correct) {
        element.classList.add("correct")
        ansBtne.style.backgroundColor = "green"
        incrementScore()
        audio.play()
    } else {
        element.classList.add("wrong")
        wrong.play()
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

/** Code to work out the scrore */
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
    },

    {
        question: "What is a group of crows called?",
        answer: [{
                text: "Bunch",
                correct: false
            },
            {
                text: "A Murder",
                correct: true
            },
            {
                text: "Crowd",
                correct: false
            },
            {
                text: "Some",
                correct: false
            }
        ]
    },

    {
        question: "Compared to their body weight, what animal is the strongest - Dung Beetle, Elephant, Ant, Cow?",
        answer: [{
                text: "Ant",
                correct: false
            },
            {
                text: "Elephant",
                correct: false
            },
            {
                text: "Dung Beetle",
                correct: true
            },
            {
                text: "Cow",
                correct: false
            }
        ]
    },

    {
        question: "How many dots appear on a pair of dice?",
        answer: [{
                text: "54",
                correct: false
            },
            {
                text: "42",
                correct: true
            },
            {
                text: "12",
                correct: false
            },
            {
                text: "34",
                correct: false
            }
        ]
    },

    {
        question: "Which is the only body part that is fully-grown from birth?",
        answer: [{
                text: "Skin",
                correct: false
            },
            {
                text: "Liver",
                correct: false
            },
            {
                text: "Toes",
                correct: false
            },
            {
                text: "Eyes",
                correct: true
            }
        ]
    },

    {
        question: "What is acrophobia a fear of?",
        answer: [{
                text: "Flying",
                correct: true
            },
            {
                text: "Spiders",
                correct: false
            },
            {
                text: "Cars",
                correct: false
            },
            {
                text: "Bikes",
                correct: false
            }
        ]
    },

    {
        question: "In what country was Elon Musk born?",
        answer: [{
                text: "America",
                correct: false
            },
            {
                text: "Ireland",
                correct: false
            },
            {
                text: "UK",
                correct: false
            },
            {
                text: "South Africa",
                correct: true
            }
        ]
    },

    {
        question: "What country has the most islands?",
        answer: [{
                text: "Ireland",
                correct: false
            },
            {
                text: "Norway",
                correct: false
            },
            {
                text: "Sweden",
                correct: true
            },
            {
                text: "Greece",
                correct: false
            }
        ]
    },

    {
        question: "How many hearts does an octopus have?",
        answer: [{
                text: "4",
                correct: false
            },
            {
                text: "2",
                correct: false
            },
            {
                text: "3",
                correct: true
            },
            {
                text: "1",
                correct: false
            }
        ]
    },

    {
        question: "December 26th is known by what names in Ireland?",
        answer: [{
                text: "Boxing Day",
                correct: false
            },
            {
                text: "Paddys Day",
                correct: false
            },
            {
                text: "Bank Holiday",
                correct: false
            },
            {
                text: "StStephens Day",
                correct: true
            }
        ]
    },

    {
        question: "What phone company produced the 3310?",
        answer: [{
                text: "Nokia",
                correct: true
            },
            {
                text: "Sony",
                correct: false
            },
            {
                text: "Samsung",
                correct: false
            },
            {
                text: "Apple",
                correct: false
            }
        ]
    },

    {
        question: "What is the state capital of New York?",
        answer: [{
                text: "New York",
                correct: false
            },
            {
                text: "Albany",
                correct: true
            },
            {
                text: "Dallas",
                correct: false
            },
            {
                text: "Chicago",
                correct: false
            }
        ]
    },

    {
        question: "What is the capital of Ireland?",
        answer: [{
                text: "London",
                correct: false
            },
            {
                text: "Glasgow",
                correct: false
            },
            {
                text: "Dublin",
                correct: true
            },
            {
                text: "Belfast",
                correct: false
            }
        ]
    },

    {
        question: "On what continent would you find the city of Baku?",
        answer: [{
                text: "Asia",
                correct: true
            },
            {
                text: "Africa",
                correct: false
            },
            {
                text: "Europe",
                correct: false
            },
            {
                text: "America",
                correct: false
            }
        ]
    },

    {
        question: "How many measures of Gordon’s Gin are in a Vesper (James Bond) martini?",
        answer: [{
                text: "4",
                correct: false
            },
            {
                text: "1",
                correct: false
            },
            {
                text: "3",
                correct: true
            },
            {
                text: "2",
                correct: false
            }
        ]
    },

    {
        question: "Cacio & Pepe is a staple of what Italian city’s cuisine?",
        answer: [{
                text: "Rome",
                correct: true
            },
            {
                text: "Venice",
                correct: false
            },
            {
                text: "Milan",
                correct: false
            },
            {
                text: "Turin",
                correct: false
            }
        ]
    },

    {
        question: "What is the world’s best selling stout beer?",
        answer: [{
                text: "Murphys",
                correct: false
            },
            {
                text: "Beamish",
                correct: false
            },
            {
                text: "Kilkenny",
                correct: false
            },
            {
                text: "Guiness",
                correct: true
            }
        ]
    }
]