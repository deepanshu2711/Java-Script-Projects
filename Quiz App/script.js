const data = [
    {
        question: "What is the largest animal in the world?",
        options: ["Shark", "Blue whale", "Elephant", "Giraffe"],
        answer: "Blue whale"
    },
    {
        question: "Which is the smallest country in the world?",
        options: ["Nepal", "Bhutan", "Spain", "Vatican City"],
        answer: "Vatican City"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Gobi", "Sahara", "Antarctica", "Kalahari"],
        answer: "Antarctica"
    },
    {
        question: "What is the smallest continent in the world?",
        options: ["Asia", "Australia", "Arctic", "Africa"],
        answer: "Australia"
    },
];

let number = 0
let correctanswers = 0
let questionHeading = document.querySelector(".question")
let OptionsContainer = document.querySelector(".options");
function DisplayQuestion(question, options, answer) {
    questionHeading.innerHTML = question;
    OptionsContainer.innerHTML = "";
    options.map((option, id) => {
        let optionButton = document.createElement("button")
        optionButton.textContent = option
        optionButton.classList.add("option")
        optionButton.classList.add(`${id}`)
        OptionsContainer.appendChild(optionButton)
        optionButton.addEventListener("click", () => checkAnswer(option, answer, id))
    })

}


function checkAnswer(option, answer, id) {
    if (option == answer) {
        correctanswers++;
        let correctOption = document.getElementsByClassName(`${id}`)
        correctOption[0].style.backgroundColor = "green"
        console.log(correctOption)
        number++
    }
    else {
        let chooseoption = document.getElementsByClassName(`${id}`)
        chooseoption[0].style.backgroundColor = "red"
        number++
    }

    if (number < data.length) {
        setTimeout(() => {
            startQuiz()
        }, 500)
    }

    if (number == data.length) {
        setTimeout(() => {
            showResult()
        }, 500)
    }
}

function startQuiz() {
    DisplayQuestion(data[number].question, data[number].options, data[number].answer);
}


function showResult() {
    questionHeading.innerHTML = `Your score is ${correctanswers} out of 4!`
    OptionsContainer.innerHTML = "";
    const tryagain = document.createElement("button")
    tryagain.innerText = "Try Again"
    tryagain.classList.add("next-btn");
    OptionsContainer.appendChild(tryagain);
    tryagain.addEventListener("click", () => window.location.reload())
}

startQuiz()