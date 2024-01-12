let currMoleTile;
let score = 0;
let gameOver =  false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);        
    }

    setInterval(setMole, 1000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if(currMoleTile) {
        currMoleTile.innerHTML = '';
    }
    let mole = document.createElement("img");
    mole.src = "1705034181948.png";

    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    
    if (this == currMoleTile) {
        score += 10;
        document.querySelector("h2").innerText = score.toString();
    }else if (this != currMoleTile) {
        const gameOverScreen = document.getElementById("gameOver");
        gameOverScreen.style.display = "block";
        gameOver = true;
    }
}