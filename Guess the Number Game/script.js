let randomNumber=Math.round(Math.random()*100+1)
console.log(randomNumber);
const submit=document.querySelector('#submit')
const userInput= document.querySelector('#enteredNO')
const prevGuess= document.querySelector('#prevGuess')
const Remaining= document.querySelector('#RemainingGuess')
const lowOrHigh= document.querySelector('#lowOrHigh')
const resultInfo = document.querySelector('.result-info')
const guessSlot = document.querySelector('#guessSlot')

let p=document.createElement('p')
let prevGuesses=[]
let remGuesses=1

const playGame=true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        alert(`Please enter the valid Number`)
    }
    else{
        prevGuesses.push();
        if(remGuesses === 11){
            displayGuess(guess)
            displayMessage(`Game Over! Random no was : ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess) //it check the guess is correct or not.
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You Guessed Correct!`)
        newGame()
    }else if(guess>randomNumber){
        displayMessage(`Your Guess is High`)
    }
    else if(guess<randomNumber){
        displayMessage(`Your Guess is low`)
    }
}

function displayGuess(guess){
    userInput.value=''

    // const g=document.getElementById('guessSlot')
    // console.log(g);
    // g.innerHTML += `${guess}, `

    guessSlot.innerHTML += `${guess} `
    remGuesses++;
    rem.innerHTML=`${11-remGuesses}`

}

function displayMessage(message){
    //this method directly interact with the DOM.

    lowOrHigh.innerHTML=`${message}`    
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled', '')

    p.classList.add('button')
    p.innerHTML=`<button id="new_Game" style="margin:25px 0">Start New Game!</button>`
    resultInfo.appendChild(p)
    playGame =false;

    newGame()
}

function newGame(){
    const nG=document.querySelector('#new_Game')
    console.log(nG);
    nG.addEventListener('click', function(e){
        randomNumber=Math.round(Math.random()*100+1)
        prevGuesses=[]
        remGuesses=1
        lowOrHigh.innerHTML=''
        Remaining.innerHTML=`${11-remGuesses}`
        userInput.removeAttribute('disabled')
        resultInfo.removeChild(p)

        playGame=true;
    })
}