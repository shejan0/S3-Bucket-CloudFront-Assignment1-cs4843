let running = false;
let waiting=false;
var timerobj;
var timeSwitch;
var reactiontime;
var nonvalid=true;
const gametext=document.getElementById("gametext");
const finaltimetext=document.getElementById("finaltime");
const successbox=document.getElementById("successbox");
const mainbutton=document.getElementById("mainbutton");
const inputnamebox=document.getElementById("inputname");
const errorinput=document.getElementById("errorinput");
const serverresponse=document.getElementById("serverresponse");
successbox.classList.add("invisible");
function buttonclick(){
    if(!running){
        startgame()
    }else{
        if(waiting){
            failedtimer();
        }else{
            successreaction();
        }
    }
}

function startgame(){
    document.body.id="wait";
    successbox.classList.add("invisible");
    timerobj=setTimeout(switchgame,Math.random()*5000);
    gametext.innerText="WAIT FOR IT";
    mainbutton.innerText="WAIT";
    running=true;
    waiting=true;

    
}
function failedtimer(){
    clearTimeout(timerobj);
    waiting=false;
    running=false;
    gametext.innerText="TOO EARLY";
    document.body.id="Restart";
}
function switchgame(){
    gametext.innerText="CLICK THE BUTTON";
    mainbutton.innerText="CLICK ME";
    waiting=false;
    document.body.id="ready";
    timeSwitch=(new Date()).getTime();
}
function checkName(){
    //why does this work
    let regex=/^[a-zA-Z]{3}$/;
    let str = inputnamebox.value;
    console.log(str);
    console.log(str.match(regex));
    if(str.match(regex)==null){
        errorinput.classList.remove("invisible");
        nonvalid=true;
    }else{
        errorinput.classList.add("invisible");
        nonvalid=false;
    }
}
function successreaction(){
    let currentTime=(new Date()).getTime();
    reactiontime=currentTime-timeSwitch;
    document.body.id="success";
    if(reactiontime<300){
        gametext.innerText="NICE SPEED";
    }else if(reactiontime<700){
        gametext.innerText="GETTING THERE";
    }else{
        gametext.innerText="UHHHHH";
    }
    running=false;
    waiting=false;
    successbox.classList.remove("invisible");
    mainbutton.innerText="Restart";
    finaltimetext.innerText="YOUR TIME WAS: "+reactiontime+" ms";
    serverresponse.innerText="";
}
