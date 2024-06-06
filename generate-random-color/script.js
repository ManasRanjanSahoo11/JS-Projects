const randomColor=()=>{  //to generate random number.
    const hex="123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*13)]
    }
    return color
}
console.log(randomColor());

let interval;

const startChanging = function(){

  interval=setInterval(()=>{
        document.body.style.background=randomColor()
    },1000)
}

const stopChanging = ()=>{
    clearInterval(interval)
}

document.querySelector('#start').addEventListener('click', startChanging);
document.querySelector('#stop').addEventListener('click', stopChanging);