/*Nahallah Champagne*/

//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "What year did the movie Saturday Night Fever come out, sparking a major disco craze ?",
        optionA: "1977", 
        optionB: "1956",
        optionC: "1765",
        optionD: "1970",
        correctOption: "optionA"
    },

    {
        question: "The song \"Stayin' Alive\" by ______ became one of the most iconic disco hits of the 1970s ?",
        optionA: "Kool & The Gang",
        optionB: "ABBA",
        optionC: "The Bee Gees",
        optionD: "The Trammps",
        correctOption: "optionC"
    },

    {
        question: "What was the name of the New York City nightclub famous for its association with the disco scene in the late 1970s ?",
        optionA: "CBGB",
        optionB: "The Palladium",
        optionC: "Limelight",
        optionD: "Studio 54",
        correctOption: "optionD"
    },

    {
        question: "Which 1978 song by Gloria Gaynor became an anthem for empowerment during the disco era ?",
        optionA: "Dancing Queen",
        optionB: "Hot Stuff",
        optionC: "I Will Survive",
        optionD: "Le Freak",
        correctOption: "optionC"
    },

    {
        question: "What piece of clothing, often associated with disco fashion, was known for being shiny and figure-hugging ?",
        optionA: "Jumpsuit",
        optionB: "Bell-bottoms",
        optionC: "Platform Shoes",
        optionD: "Denim Jacket",
        correctOption: "optionA"
    },

    {
        question: "What type of lighting fixture is most commonly associated with the disco era and dance floors ?",
        optionA: "Disco Ball",
        optionB: "Strobe Light",
        optionC: "Neon Lights",
        optionD: "Blacklight",
        correctOption: "optionA"
    },

    {
        question: "_____ was known as the \"Queen of Disco\" and had hits like \"Hot Stuff\" and \"Bad Girls.\"",
        optionA: "Sylvester",
        optionB: "Gloria Gaynor",
        optionC: "Donna Summer",
        optionD: "Diana Ross",
        correctOption: "optionC"
    },

    {
        question: "Which style of dancing became synonymous with the disco era, often featuring synchronized steps and spins ?",
        optionA: "The Twist",
        optionB: "The Hustle",
        optionC: "The Jitterbug",
        optionD: "Breakdancing",
        correctOption: "optionB"
    },

    {
        question: "The Village People became famous for which disco hit that was also a popular dance anthem ?",
        optionA: "Funky Town",
        optionB: "Disco Inferno",
        optionC: "Super Freak",
        optionD: "Y.M.C.A",
        correctOption: "optionD"
    },

    {
        question: `"Which band popularized the disco hit "Le Freak" in 1978 ?`,
        optionA: "Chic",
        optionB: "Earth, Wind & Fire",
        optionC: "The Trammps",
        optionD: "The Jacksons",
        correctOption: "optionA"
    },

    {
        question: "Which famous electronic instrument, often heard in disco music, helped give the genre its distinctive sound ?",
        optionA: "Drum machine",
        optionB: "Electric guitar",
        optionC: "Synthesizer",
        optionD: "Turntable",
        correctOption: "optionC"
    },

    {
        question: "\"Boogie Wonderland\" was a major hit in 1979 for which disco band ?",
        optionA: "Earth, Wind & Fire",
        optionB: "Chic",
        optionC: "The Bee Gees",
        optionD: "KC and the Sunshine Band",
        correctOption: "optionA"
    },


    {
        question: "In which city was the \"Disco Demolition Night\" event held in 1979, symbolizing the backlash against the disco movement ?",
        optionA: "Los Angeles",
        optionB: "Chicago",
        optionC: "New York City",
        optionD: "Detroit",
        correctOption: "optionB"
    },

    {
        question: "Which 1979 hit by Sister Sledge became an anthem of unity and pride ?",
        optionA: "\"Good Times\"",
        optionB: "\"Le Freak\"",
        optionC: "\"Disco Inferno\"",
        optionD: "\"We Are Family\"",
        correctOption: "optionD"
    },

    {
        question: "Which song by ABBA, released in 1976, is often considered one of the greatest disco hits of all time ?",
        optionA: "\"Dancing Queen\"",
        optionB: "\"Mamma Mia\"",
        optionC: "\"Waterloo\"",
        optionD: "\"Take a Chance on Me\"",
        correctOption: "optionA"
    },

    {
        question: "What style of footwear became extremely popular during the disco era, often worn on the dance floors ?",
        optionA: "Ballet flats",
        optionB: "Sneakers",
        optionC: "Platform shoes",
        optionD: "High heels",
        correctOption: "optionC"
    },

    {
        question: "Which legendary performer released the disco hit \"Don't Stop 'Til You Get Enough\" in 1979 ?",
        optionA: "Micheal Jackson",
        optionB: "Diana Ross",
        optionC: "Stevie Wonder",
        optionD: "Prince",
        correctOption: "optionA"
    },

    {
        question: "Which band was known for blending funk, soul, and disco with their 1978 hit \"Boogie Oogie Oogie\" ?",
        optionA: "Chic",
        optionB: "A Taste of Honey",
        optionC: "Sister Sledge",
        optionD: "Kool & The Gang",
        correctOption: "optionB"
    },

    {
        question: "Which disco song by The Trammps became famous for its inclusion in the Saturday Night Fever soundtrack ?",
        optionA: "\"Stayin' Alive\"",
        optionB: "\"Boogie Wonderland\"",
        optionC: "\"Night Fever\"",
        optionD: "\"Disco Inferno\"",
        correctOption: "optionD"
    },

    {
        question: "Which famous disco song by Lipps Inc. talks about leaving a boring city for an exciting new place ?",
        optionA: "\"Funkytown\"",
        optionB: "\"Boogie Oogie Oogie\"",
        optionC: "\"Good Times\"",
        optionD: "\"Last Dance\"",
        correctOption: "optionA"
    },

    {
        question: "Which of these artists is often credited with blending rock and disco with hits like \"Heart of Glass\" in 1979 ?",
        optionA: "The Rolling Stones",
        optionB: "ABBA",
        optionC: "David Bowie",
        optionD: "Blondie",
        correctOption: "optionD"
    },

    {
        question: "What was the name of the 1970s dance that involved exaggerated robotic movements, often performed to disco music ?",
        optionA: "The Hustle",
        optionB: "The Robot",
        optionC: "The Twist",
        optionD: "The Moonwalk",
        correctOption: "optionB"
    },

    {
        question: "What was the name of the 1970s dance that involved exaggerated robotic movements, often performed to disco music ?",
        optionA: "\"Y.M.C.A\"",
        optionB: "\"It's Raining Men\"",
        optionC: "\"Born to Be Alive\"",
        optionD: "\"Last Dance\"",
        correctOption: "optionB"
    },

    {
        question: "Which of these disco songs was written and performed by a French artist and became a global hit ?",
        optionA: "\"Born to Be Alive\"",
        optionB: "\"Supernature\"",
        optionC: "\"I Will Survive\"",
        optionD: "\"We Are Family\"",
        correctOption: "optionA"
    },

    {
        question: "What 1975 hit song by Van McCoy encouraged listeners to \"do\" a specific dance move ?",
        optionA: "\"Boogie Fever\"",
        optionB: "\"Rock Your Baby\"",
        optionC: "\"The Hustle\"",
        optionD: "\"FunkyTown\"",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}


//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Keep practicing diva."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, you can do better than that!"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent! You're ready to party!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
