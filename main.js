var gameData = {
    money: 0,
    moneyPerClick: 1
}

function earnMoney() {
    gameData.money += gameData.moneyPerClick
    document.getElementById("moneyEarned").innerHTML = gameData.money + " money earned"
}

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
  gameData = savegame
}