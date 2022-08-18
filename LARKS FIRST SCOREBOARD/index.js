//create 6 buttons, incrementing 1, 2, and 3.
//Make sure they work and you can also set a button called "New game"
//and have the score reset to 0

let oneHButton = document.getElementById("oneH-btn")
let twoHButton = document.getElementById("twoH-btn")
let threeHButton = document.getElementById("threeH-btn")

let oneAButton = document.getElementById("oneA-btn")
let twoAButton = document.getElementById("twoA-btn")
let threeAButton = document.getElementById("threeA-btn")


let countHome = 0
document.getElementById("homeScore").textContent = countHome

let countAway = 0
document.getElementById("awayScore").textContent = countHome

function add1Home(){
    countHome += 1
    homeScore.textContent = countHome
}

function add2Home(){
    countHome += 2
    homeScore.textContent = countHome
    
}

function add3Home(){
    countHome += 3
    homeScore.textContent = countHome
    
}

function add1Away(){
    countAway += 1
    awayScore.textContent = countAway
    
}

function add2Away(){
    countAway += 2
    awayScore.textContent = countAway
    
}

function add3Away(){
    countAway += 3
    awayScore.textContent = countAway
    
}

function resetGame(){
    countHome = 0
    homeScore.textContent = countHome
    
    countAway = 0
    awayScore.textContent = countAway
}