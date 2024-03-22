const computer = () => {
    let x = Math.floor(Math.random()*3)
    return x
}
//1 is rock,2 is  paper,3 is scissor

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let display = document.getElementById('display');
let scoreDisplay = document.getElementById('scoreDisplay');
let computerDisplay = document.getElementById('computerDisplay');
let score = 0
rock.onclick = () =>{
    let computerValue = computer()
    if(computerValue==1){
        computerDisplay.innerHTML=`<h3>computer chose Rock</h3>`
        display.innerHTML=`<h2>Tie</h2>`
    }
    else if(computerValue==2){
        computerDisplay.innerHTML=`<h3>computer chose paper</h3>`
        display.innerHTML=`<h2>Lost</h2>`
        score--
    }
    else{
        computerDisplay.innerHTML=`<h3>computer chose Scissor</h3>`
        display.innerHTML=`<h2>Won</h2>`
        score++
    }
    scoreDisplay.innerHTML=`<h3>score : ${score}</h3>`
}

paper.onclick = () =>{
    let computerValue = computer()
    if(computerValue==1){
        computerDisplay.innerHTML=`<h3>computer chose Rock</h3>`
        display.innerHTML=`<h2>Won</h2>`
        score++
    }
    else if(computerValue==2){
        display.innerHTML=`<h2>Tie</h2>`
        computerDisplay.innerHTML=`<h3>computer chose paper</h3>`
    }
    else{
        computerDisplay.innerHTML=`<h3>computer chose Scissor</h3>`
        display.innerHTML=`<h2>Lost</h2>`
        score--
    }
    scoreDisplay.innerHTML=`<h3>score : ${score}<h3>`
}


scissor.onclick = () =>{
    let computerValue = computer()
    if(computerValue==1){
        computerDisplay.innerHTML=`<h3>computer chose Rock</h3>`
        display.innerHTML=`<h2>Lost</h2>`
        score--
    }
    else if(computerValue==2){
        computerDisplay.innerHTML=`<h3>computer chose paper</h3>`
        display.innerHTML=`<h2>Won</h2>`
        score++
    }
    else{
        computerDisplay.innerHTML=`<h3>computer chose Scissor</h3>`
        display.innerHTML=`<h2>Tie</h2>`
    }
    scoreDisplay.innerHTML=`<h3>score : ${score}</h3>`
}

// const human = () =>{
    
// }