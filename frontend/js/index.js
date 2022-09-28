var sum
var round = false
var cardsEl = document.getElementById("cardsEl")
let firstCard = ""
let secondCard = ""
let cards = []
let player = {
    name: "Max",
    money: 123
}

document.getElementById("playerEl").textContent = player.name +": $"+player.money

function startGame() {
   
    if (round != true) {
    firstCard = Math.ceil(Math.random()*11)
    cardsEl.textContent = ""
    cards = []
    while (firstCard === 1){
        firstCard = Math.ceil(Math.random()*11)
    }
    cards.push(firstCard)
    secondCard = Math.ceil(Math.random()*11)
    while (secondCard === 1){
        firstCard = Math.ceil(Math.random()*11)
    }
    cards.push(secondCard)
    sum = secondCard + firstCard
    for (i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+" "
    }
    
    document.getElementById("sum").innerText = "your sum: " + sum
    winCondition()
    document.getElementById("messageEl").textContent = "wanna draw another card? - click the button!"
    round = true
    }else{}
}
function nextCard() {
    if (sum != 0){
    var nextCard = Math.ceil(Math.random()*11)
    cards.push(nextCard)
    cardsEl.textContent = cards + " "
    sum += nextCard
    document.getElementById("sum").innerText = "your sum: " + sum
    winCondition()
    } else {}
}
function winCondition() {
    if (sum === 21){
        document.getElementById("messageEl").textContent = "BlackJack congrats!"
        player.money += 10
        reset()

    }
    else if (sum > 21) {
        document.getElementById("messageEl").textContent = sum + "- " +"game over!"
        player.money -= 10
        reset()
    } else {}
}
function reset () {
    document.getElementById("sum").innerText=""
    sum = 0
    round = false
    document.getElementById("playerEl").textContent = player.name +": $"+player.money
}

let playerOneRaceTime = 100
let playerTwoRaceTime = 200

function getRaceTime() {
return playerOneRaceTime + playerTwoRaceTime
}
let moin = getRaceTime()
console.log(moin)

function rollDice() {
    let random = Math.floor(Math.random()*13) +1
    if (random === 1) {
        random = 11
        return random
        
    }
    else if (random > 10) {
        random = 10
        return random
    }else{
        return random
    }

}


