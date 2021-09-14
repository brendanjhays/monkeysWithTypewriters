var gameData = {
    money: 0,
    moneyPerClick: 1,
    upgrade1Cost: 10
}

var upgradeRates = {
    upgrade1 : 1.3
}

function earnMoney() {
    gameData.money += gameData.moneyPerClick
    updateText()
}

function increaseEarn() {
    if (gameData.money >= gameData.upgrade1Cost) {
        gameData.money -= gameData.upgrade1Cost
        gameData.upgrade1Cost *= upgradeRates.upgrade1
    }
}

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 15000)

function updateText() {
    document.getElementById("moneyEarned").innerHTML = gameData.money + " money earned"
}

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
  gameData = savegame
  updateText()
}