//created ny Ojo Kehinde Monsuru  
 //Javascript Quiz Assignment <!---50 questions---> 
 const questions = [
    {
        question: "What will be the output of the following code snippet?    [  print(typeof(NaN)); ]",
        optionA: "Object",
        optionB: "None of the above",
        optionC: "String",
        optionD: "Number",
        correctOption: "optionD"
    },

    {
        question: "What will be the output of the following code snippet?   [ const example = ({ a, b, c }) => { console.log(a, b, c);};example(0, 1, 2) ]",
        optionA: "0 1 2",
        optionB: " Undefined Undefined Undefined",
        optionC: "0 Undefined Undefined",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "When an operator’s value is NULL, the type of returned by the unary operator is: ?",
        optionA: "Boolean",
        optionB: "Undefined",
        optionC: "Integer",
        optionD: "Object",
        correctOption: "optionD"
    },

    {
        question: "Which object in Javascript doesn’t have a prototype ?",
        optionA: "Objects",
        optionB: "All objects have a prototype",
        optionC: "Base Object",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "Which function is used to serialize an object into a JSON string in Javascript? ?",
        optionA: "None of the above",
        optionB: "convert()",
        optionC: "parse()",
        optionD: "stringify()",
        correctOption: "optionD"
    },

    {
        question: "Which of the following are closures in Javascript?",
        optionA: "All of the above",
        optionB: "Variables",
        optionC: "Functions",
        optionD: "Objects",
        correctOption: "optionA"
    },

    {
        question: "Which of the following are not server-side Javascript objects?",
        optionA: "Date",
        optionB: "Function",
        optionC: "All of the above",
        optionD: "FileUpload",
        correctOption: "optionC"
    },

    {
        question: "What does the ‘toLocateString()’ method do in JS?",
        optionA: "Returns a localised string representation",
        optionB: "Returns a parsed string",
        optionC: "Return a localised object representation  1",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is not a Javascript framework?",
        optionA: "Node",
        optionB: "Vue",
        optionC: "React",
        optionD: "Cassandra",
        correctOption: "optionD"
    },

    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        optionA: "let",
        optionB: "var",
        optionC: "None of the above",
        optionD: "Both A and B",
        correctOption: "optionD"
    },

    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        optionA: "document.write()",
        optionB: "console.log",
        optionC: "All of the above",
        optionD: "window.alert()",
        correctOption: "optionC"
    },

    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        optionA: "getElementbyId()",
        optionB: "getElmentByClassName",
        optionC: "Both A and B",
        optionD: "None of the above",
        correctOption: "optionC"
    },


    {
        question: "Inside which HTML element do we put the JavaScript?",
        optionA: "javascript",
        optionB: "script",
        optionC: "js",
        optionD: "scripting",
        correctOption: "optionB"
    },

    {
        question: "How can a datatype be declared to be a constant type?",
        optionA: "constant",
        optionB: "var",
        optionC: "let",
        optionD: "const",
        correctOption: "optionD"
    },

    {
        question: "How to stop an interval timer in Javascript?",
        optionA: "clearInterval",
        optionB: "clearTimer",
        optionC: "intervalOver",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "How do we write a comment in javascript?",
        optionA: "/**/",
        optionB: "#",
        optionC: "//",
        optionD: "$$",
        correctOption: "optionC"
    },

    {
        question: "Javascript is an _______ language?",
        optionA: "Object-Oriented",
        optionB: "Object-Based",
        optionC: "Procedural",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "The 3 basic object attributes in Javascript are:",
        optionA: "Class,prototype,object's parameters",
        optionB: "Class,parameters,object's extensible flag",
        optionC: "Class,prototype,object's extensible flag",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
        optionA: "Object Encapsulation",
        optionB: "Object Inheritance",
        optionC: "None of the above",
        optionD: "Object Serialization",
        correctOption: "optionD"
    },

    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        optionA: "Ignores the statements",
        optionB: "Throws an error",
        optionC: "Gives a warning",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "Wht does the Javascript “debugger” statement do?",
        optionA: "Debug all the errors in the program at runtime",
        optionB: "Debug error in the current statement if any",
        optionC: "All of the above",
        optionD: "It acts as a breakpoint in a program",
        correctOption: "optionD"
    },

    {
        question: "What does … operator do in JS?",
        optionA: "To describe a datatype of undefined size",
        optionB: "To spread iterables to individual elements",
        optionC: "No such operator exists",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "How are objects compared when they are checked with the strict equality operator?",
        optionA: "The contents of the objects are compared",
        optionB: "Their references are compared",
        optionC: "Both A and B",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "What keyword is used to check whether a given property is valid or not?",
        optionA: "exists",
        optionB: "is in",
        optionC: "in",
        optionD: "lies",
        correctOption: "optionC"
    },

    {
        question: "What keyword is used to declare an asynchronous function in Javascript?",
        optionA: "await",
        optionB: "setTimeout",
        optionC: "async",
        optionD: "None of the above",
        correctOption: "optionC"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        optionA: "The head",
        optionB: "The body",
        optionC: "Both the head & body section",
        optionD: "None of the above",
        correctOption: "optionC"
    },
    {
        question: "What is the correct syntax for referring to an external script called xxx.js",
        optionA: "script src=xxx.js",
        optionB: "script name=xxx.js",
        optionC: "script href=xxx.js",
        optionD: "None of the above",
        correctOption: "optionA"
    },
    {
        question: "What keyword is used to declare an asynchronous function in Javascript?",
        optionA: "await",
        optionB: "setTimeout",
        optionC: "async",
        optionD: "None of the above",
        correctOption: "optionC"
    },
    {
        question: "The external JavaScript file must contain the (script) tag?",
        optionA: "True",
        optionB: "False",
        optionC: "NaN ",
        optionD: "None of the above",
        correctOption: "optionB"
    },
    {
        question: "How do you create a function in JavaScript?",
        optionA: "function = myFunction",
        optionB: "function:myFunction",
        optionC: "myFunction",
        optionD: "function myFunction",
        correctOption: "optionD"
    },
    {
        question: "How do you write `Hello World` in an alert box?",
        optionA: "alert(`Hello World`);",
        optionB: "msg(`Hello World`);",
        optionC: "msgbox(`Hello World`);",
        optionD: "alertBox(`Hello World`)",
        correctOption: "optionA"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        optionA: "call myFunction()",
        optionB: "call function myFunction",
        optionC: "myFunction()",
        optionD: "None of the above",
        correctOption: "optionC"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        optionA: "if i = 5",
        optionB: "if (i == 5)",
        optionC: "if i == 5 then",
        optionD: "if i = 5 then",
        correctOption: "optionB"
    },
    {
        question: "How to write an IF statement for executing some code if `i` is NOT equal to 5?",
        optionA: "if (i <> 5)",
        optionB: "if i =! 5 then",
        optionC: "if i <> 5",
        optionD: "if (i != 5)",
        correctOption: "optionD"
    },
    {
        question: "How does a WHILE loop start?",
        optionA: "while (i <= 10)",
        optionB: "while(i <= 10;i++)",
        optionC: "while i = 1 to 10",
        optionD: "None of the above",
        correctOption: "optionA"
    },
    {
        question: "How does a WHILE loop start?",
        optionA: "for i = 1 to 5",
        optionB: "for (i =0;i <= 5)",
        optionC: "for (i = 0;i <= 5;i++)",
        optionD: "for (i <= 5;i++)",
        correctOption: "optionC"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        optionA: "!--This is a comment--",
        optionB: "!--This is a comment--",
        optionC: "`This is a comment`",
        optionD: "//This is a comment",
        correctOption: "optionD"
    },
    {
        question: "How to insert a comment that has more than one line?",
        optionA: "//This comment has more than one line//",
        optionB: "/*This comment has more than one line*/",
        optionC: "!--This comment has more than one line--",
        optionD: "None of the above",
        correctOption: "optionB"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        optionA: "Math.round(7.25)",
        optionB: "Math.rnd(7.25)",
        optionC: "rnd(7.25)",
        optionD: "round(7.25)",
        correctOption: "optionA"
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        optionA: "ceil(x, y)",
        optionB: "top(x, y)",
        optionC: "Math.max(x, y)",
        optionD: "Math.ceil(x, y)",
        correctOption: "optionC"
    },
    {
        question: "JavaScript is the same as Java?",
        optionA: "True",
        optionB: "False",
        optionC: "All of the above",
        optionD: "None of the above",
        correctOption: "optionB"
    },
    {
        question: "How can you detect the client's browser name?",
        optionA: "client.Name",
        optionB: "None of the above",
        optionC: "browser.name",
        optionD: "navigator.appName",
        correctOption: "optionD"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        optionA: "onclick",
        optionB: "onchange",
        optionC: "onmouseover",
        optionD: "onmouseclicke",
        correctOption: "optionA"
    },
    {
        question: "How do you declare a JavaScript variable?",
        optionA: "v carName;",
        optionB: "variable carNAme;",
        optionC: "var carName",
        optionD: "None of the above",
        correctOption: "optionC"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        optionA: "=",
        optionB: "X",
        optionC: "-",
        optionD: "*",
        correctOption: "optionA"
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        optionA: "false",
        optionB: "None of the above",
        optionC: "NaN",
        optionD: "true",
        correctOption: "optionD"
    },
    {
        question: "Is JavaScript case-sensitive?",
        optionA: "No",
        optionB: "Yes",
        optionC: "undefined",
        optionD: "None of the above",
        correctOption: "optionB"
    },
    {
        question: "What will be  be the output of the following code snippet? var a = true + true + true * 3;print(a)",
        optionA: "3",
        optionB: "0",
        optionC: "5",
        optionD: "Error",
        correctOption: "optionC"
    },
    {
        question: "What happens when we run this code? function dog(){print(`I am a dog.`);}  dog sound = `Bark`",
        optionA: "Nothing happens",
        optionB: "Syntax Error",
        optionC: "ReferenceError",
        optionD: "None of the above",
        correctOption: "optionA"
    },
    {
        question: "What is the output of the following code snippet? print(NaN === NaN);",
        optionA: "true",
        optionB: "undefined",
        optionC: "Error",
        optionD: "false",
        correctOption: "optionD"
    },

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 49) {
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
        if (indexNumber <= 49) {
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
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
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
