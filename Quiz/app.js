const questions = [
    {
        question: "Which is the most widely spoken language in the world?",
        answers: [
            { text: "Spanish", correct: false },
            { text: "Mandarin", correct: true },
            { text: "English", correct: false },
            { text: "German", correct: false },
        ]
    },
    {

        question: "Who invented Computer?",
        answers: [
            { text: "Charles Babbage", correct: true },
            { text: "Henry Luce", correct: false },
            { text: "Henry Babbage", correct: false },
            { text: "Charles Luce", correct: false },
        ]
    },
    {

        question: "What do you call a computer on a network that requests files from another computer?",
        answers: [
            { text: "A Client", correct: true },
            { text: "A Host", correct: false },
            { text: "A router", correct: false },
            { text: "A Web server", correct: false },
        ]
    },
    {

        question: "Hardware devices that are not part of the main computer system and are often added later to the system.",
        answers: [
            { text: "Peripheral", correct: true },
            { text: "Clip art", correct: false },
            { text: "Highlight", correct: false },
            { text: "Execute", correct: false },
        ]
    },
    {

        question: "The main computer that stores the files that can be sent to computers that are networked together is:",
        answers: [
            { text: "Clip art", correct: false },
            { text: "Mother board", correct: false },
            { text: "Peripheral", correct: false },
            { text: "File Server", correct: true },
        ]
    },
    {

        question: "How can you catch a computer virus?",
        answers: [
            { text: "Sending e-mail messages", correct: false },
            { text: "Using a laptop during the winter", correct: false },
            { text: "Opening e-mail attachments", correct: true },
            { text: "Shopping on-line", correct: false },
        ]
    },
    {

        question: "Google (www.google.com) is a:",
        answers: [
            { text: "Search Engine", correct: true },
            { text: "Number in Math", correct: false },
            { text: "Directory of images", correct: false },
            { text: "Chat service on the web", correct: false },
        ]
    }
    // {
    //     id: "8",
    //     question: "Which is not an Internet protocol?",
    //     options: ["HTTP", "FTP", "STP", "IP"],
    //     correct: "STP",
    // },
    // {
    //     id: "9",
    //     question: "Which of the following is not a valid domain name?",
    //     options: ["www.yahoo.com", "www.yahoo.co.uk", "www.com.yahoo", "www.yahoo.co.in"],
    //     correct: "www.com.yahoo",
    // },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {

    // hide/remove the previous answer button
    resetState();


    // to display the question
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;  // question goe here

    // to display the answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");   // create a button
        button.innerHTML = answer.text;   // store the answer in button 
        button.classList.add("btn");
        answerButtons.appendChild(button);  // display the button into the div containing answer-buttons

        if (answer.correct) {  // means if it has some value true/false then 
            button.dataset.correct = answer.correct;  // add true/false
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;   // selected button
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {  // value 1 means if the dataset is true
        selectedBtn.classList.add("correct");
        score++;
    } else {   // value 0 means dataset answer is false
        selectedBtn.classList.add("incorrect");
    }

    // disable the click after one click
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();

    } else {
        startQuiz();
    }
})
startQuiz();

