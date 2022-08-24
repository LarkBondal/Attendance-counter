/* javascript
1. print that all sums and cards display in their text contents
2. create a random number(dice) function to give to each card
3. make boolean conditions if we get blackjack or if we bust
4. make sure that you can't click the button once you're out of the game
*/

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

let cards = []
let sum = 0
let isAlive = false
let hasBlackjack = false

function startGame(){
    isAlive = true
    let card1 = getRandomcard()
    let card2 = getRandomcard()
    cards = [card1, card2]
    sum = card1 + card2
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "CARDS: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ", "
    }
    sumEl.textContent = "YOUR HAND: " + sum
    if (sum <= 20){
       message = "Would you like to draw another card?"
    }
    else if (sum === 21){
        message = "Congratulations, you've got Blackjack!"
        hasBlackjack = true
    }
    else{ message = "You're out of the game"
        isAlive = false }
        messageEl.textContent = message
}

function getRandomcard(){
    let randomNum = Math.floor(Math.random()*14) +1
    if (randomNum > 10){
        return 10 }
    else if (randomNum === 1){
        return 1 || 11
    }
    else { return randomNum}
}

function newCard(){
    if (isAlive === true && !hasBlackjack){
    let card = getRandomcard()
    sum += card
    cards.push(card)
    renderGame()}
}

