const symbols = ["🍒", "🍋", "🔔", "🍉", "⭐️", "🍇", "🍊", "💎", "🎰"];
const reels = document.querySelectorAll(".reel div");
var coins = 100;
document.getElementById("coins").innerHTML = coins;
let button = document.getElementById("button");

function spin() {
    button.disabled = true; 

    let maxDelay = 0; 

    reels.forEach((reel, index) => {
        let delay = index * 200; 
        maxDelay = Math.max(maxDelay, 2000 + delay);

        let interval = setInterval(() => {
            let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            reel.innerHTML = randomSymbol;
        }, 100);

        setTimeout(() => clearInterval(interval), 2000 + delay);
    });

    setTimeout(() => {
        button.disabled = false;
    }, maxDelay + 100);
}