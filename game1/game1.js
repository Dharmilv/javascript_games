// imp :
let bighit = document.getElementById('bighit');
let lightpunch = document.getElementById('lightpunch'); 
let heal = document.getElementById('heal');
let attack1 = document.getElementById('attack1');
let attack2 = document.getElementById('attack2');
let heal1 = document.getElementById('heal1');
let heal2 = document.getElementById('heal2');

let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let victorydiv = document.getElementById('victorydiv');
let restart = document.getElementById('restart');
let sum1=sum2=100;

restart.onclick = () =>{
    sum1=sum2=100;
    score1.innerHTML=`<h1> ${sum1}</h1>`
    score2.innerHTML=`<h1> ${sum2}</h2>`
    victorydiv.innerHTML="<h1>Result</h1>"
}

const attacks1 = () =>{
    let rn = Math.floor(Math.random()*20);
    sum2=sum2-rn;
    if(sum2<=0){
        score2.innerHTML=`<h1> ${sum2}</h1>`
        victorydiv.innerHTML="<h1>Naruto Wins!</h1>"
        victorydiv.style="margin-left:570px"
    }else{
        score2.innerHTML=`<h1> ${sum2}</h1>`
    }
}

const heals1 = () =>{
    let hn = Math.floor(Math.random()*10);
    sum1=sum1+hn;
    score1.innerHTML=`<h1> ${sum1}</h1>`
}

const attacks2 = () =>{
    let rn = Math.floor(Math.random()*20);
    sum1=sum1-rn;    
    if(sum1<=0){
        score1.innerHTML=`<h1> ${sum1}</h1>`
        victorydiv.innerHTML="<h1>Sasuke Wins!</h1>"
        victorydiv.style="margin-left:570px"

    }
    else{
        score1.innerHTML=`<h1> ${sum1}</h1>`
    }
}

const heals2 = () =>{
    let hn = Math.floor(Math.random()*10);
    sum2=sum2+hn;
    score2.innerHTML=`<h1> ${sum2}</h1>`
}

document.addEventListener('keydown',function(e){
    if(sum1<=0||sum2<=0){
        
    }
    else if(e.key=="q"){
        attacks1();
        bighit.play()
    }
    else if(e.key=="p"){
        attacks2()
        lightpunch.play()
    }
    else if(e.key=="a"){
        heals1()
        heal.play()
    }
    else if(e.key=="o"){
        heals2()
        heal.play()
    }
})