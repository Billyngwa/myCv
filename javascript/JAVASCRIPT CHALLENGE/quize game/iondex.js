let questions = [
    {
        question:"Who is the most influencial?",
        answerList: "a). Bill Gates\n b). Elon Musk \nc). Donald Trump\nd). Nelson Mandela",
        correctAnswer:"b"||"B"||"Elon Musk",

    },
    {
        question:"Who goes by the name Broda Shaggi?",
        answerList: "a). ojuwale Borun\n b). Mark Tyson \nc). Emmanuel Babu\nd). Larry Pearl?"
    },
    {
        question:"Who is the most influencial?",
        answerList: "a). Bill Gates\n b). Elon Musk \nc). Donald Trump\nd). Nelson Mandela"
    },
    {
        question:"Who is the most influencial?",
        answerList: "a). Bill Gates\n b). Elon Musk \nc). Donald Trump\nd). Nelson Mandela"
    },
    {
        question:"Who is the most influencial?",
        answerList: "a). Bill Gates\n b). Elon Musk \nc). Donald Trump\nd). Nelson Mandela"
    },
    {
        question:"Who is the most influencial?",
        answerList: "a). Bill Gates\n b). Elon Musk \nc). Donald Trump\nd). Nelson Mandela"
    },    {
        question:"Who is the most influencial?",
        answerList: "a). Bill Gates\n b). Elon Musk \nc). Donald Trump\nd). Nelson Mandela"
    },
    {
        question:"Who is the most influencial?",
        answerList: "a). Bill Gates\n b). Elon Musk \nc). Donald Trump\nd). Nelson Mandela"
    },
    {
        question:"Who is the most influencial?",
        answerList: "a). Bill Gates\n b). Elon Musk \nc). Donald Trump\nd). Nelson Mandela"
    },
];
let answers = [];

function myGame(){
    for (let i = 0; i<questions.length; i++){
        questionObject = questions[i]; 
        // console.log(questionObject);
        objectValues = Object.values(questionObject);
        console.log(objectValues);
    }
}
myGame();