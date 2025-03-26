var button = document.getElementById("btn");
var text = document.getElementById("text");

var restart = document.getElementById("restart");
var autoCliker = document.getElementById("auto");
var lvlUp = document.getElementById("lvlUp");

var score = 0;

var autoClickActive = false;

var autoClickPrice = 50;
var lvlUpPrice = 35;

var autoClickerPower = 0;
var clickPower = 1;

function updateScoreColor() {
    text.style.transition = "color 0.5s ease-in-out";
    text.style.color = "red";

    setTimeout(() => {
        text.style.color = "";
    }, 500);
}

function applyButtonErrorEffect(button) {
    button.classList.add("red", "shake");

    setTimeout(() => {
        button.classList.remove("red", "shake");
    }, 500);
}

function changeButtonColorToGreen(button) {
    button.style.backgroundColor = "green";
    button.style.color = "white";
    setTimeout(() => {
        button.style.backgroundColor = "";
        button.style.color = "";
    }, 1000);
}

function autoClickFunction() {
    if (score >= autoClickPrice) {
        score -= autoClickPrice;
        text.innerText = "Score: " + score;
        updateScoreColor();

        if (!autoClickActive) {
            autoClickActive = true;
            autoCliker.innerText = "Upgrade Auto Clicker: (" + autoClickPrice + "$)";
            
            setInterval(() => {
                score += autoClickerPower;
                text.innerText = "Score: " + score;
            }, 1000);
        }

        autoClickPrice += 50;
        autoClickerPower++;
        autoCliker.innerText = "Upgrade Auto Clicker: (" + autoClickPrice + "$)";
        
        changeButtonColorToGreen(autoCliker);
    } else {
        applyButtonErrorEffect(autoCliker);
    }
}

function levelUpFunction() {
    if (score >= lvlUpPrice) {
        score -= lvlUpPrice;
        text.innerText = "Score: " + score;
        updateScoreColor();

        clickPower++;
        lvlUpPrice += 35;
        button.textContent = "Click: (" + clickPower + ")";
        lvlUp.innerText = "Upgrade Click Power: (" + lvlUpPrice + "$)";
        
        changeButtonColorToGreen(lvlUp);
    } else {
        applyButtonErrorEffect(lvlUp);
    }
}

autoCliker.onclick = function() {
    autoClickFunction();
};

lvlUp.onclick = function() {
    levelUpFunction();
};

restart.onclick = function() {
    location.reload();
};

button.onclick = function() {
    score += clickPower;
    text.innerText = "Score: " + score;
};

autoCliker.innerText = "Buy Auto Clicker: (" + autoClickPrice + "$)";
lvlUp.innerText = "Upgrade Click Power: (" + lvlUpPrice + "$)";