const questions = [
    {
        question: "First 1000crore telugu film",
        answers: [
            {text: "Pushpa 2", state: false},
            {text: "Shakthi", state: false},
            {text: "Bahubali 2", state: true},
            {text: "Acharya", state: false}
        ]},
        {question: "Which of the following personalities is the CEO of sonic solutions",
        answers: [
            {text: "Gajala from washington DC", state: true},
            {text: "Meher ramesh from radha tmt", state: false},
            {text: "Bommakanti Nagalingam from raj travels", state: false},
            {text: "Tanguturi veereham bakaham panthulu", state: false}
        ]},
        {question: "Which film is considered an underrated masterpiece",
        answers: [
            {text: "shadow", state: false},
            {text: "Family star", state: false},
            {text: "Agent", state: false},
            {text: "1 Nenokkadine", state: true}
        ]},
        {question: "Pick the odd one",
        answers: [
            {text: "Fox", state: false},
            {text: "cloud", state: false},
            {text: "Homeopathy", state: true},
            {text: "Buffalo", state: false}
        ]}
]

const questionElement = document.getElementById("question-element");
const options = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

let currentIndex = 0;
let score = 0;

function startQuiz(){
    currentIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentIndex];
    let questionNumber = currentIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        options.appendChild(button);
        
        button.addEventListener("click", () =>{
            nextButton.style.display = "block";
            if(answer.state){
                button.classList.add("correct");
                score++;
            }else{
                button.classList.add("incorrect");
            }
        });
    })
}

nextButton.addEventListener("click", ()=>{
    if(currentIndex < questions.length-1){
        currentIndex++;
        showQuestion();
    }else{
        questionElement.innerHTML = `You have completed the quiz and your score is ${score}`;
        while(options.firstChild){
            options.removeChild(options.firstChild);
        }
        nextButton.style.display = "";
    }
})

function resetState(){
    nextButton.style.display = "";
    while(options.firstChild){
        options.removeChild(options.firstChild);
    }
}


startQuiz();