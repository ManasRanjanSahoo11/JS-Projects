function makeBubbles() {
    let bubbles = "";

    for (let i = 1; i < 169; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${randomNumber}</div>`
    }

    document.querySelector('#pbtm').innerHTML = bubbles;
}

let hitRmNum = 0;
function getNewHit(){
    hitRmNum = Math.floor(Math.random() * 10 );
    document.querySelector('#hit').textContent = hitRmNum;
}

let timer = 30;
function runTimer() {
    const interval = setInterval(() => {
        if (timer > 0) {
            timer--
            document.querySelector('#timer').textContent = `${timer}'s`;
        } else {
            clearInterval(interval);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000)
}

let score = 0;
function updateScore(){
    score += 10;
    document.querySelector('#score').textContent = score;
}

document.querySelector('#pbtm').addEventListener('click', (dets)=>{
    // alert('working')  //--> For debugging
    // console.log(dets.target); //div
    // console.log(dets.target.textContent);//String
    // console.log(Number(dets.target.textContent));//It will give me Number

    let clickedNum = Number(dets.target.textContent);

    if(clickedNum === hitRmNum){
        updateScore();
        makeBubbles();
        getNewHit();
    }
})

makeBubbles()
getNewHit()
runTimer()






