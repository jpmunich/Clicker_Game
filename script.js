let clickerButton = document.getElementById("clicker");
let count = document.getElementById("counter");

let clicks = 0;

function addCount() {
    clicks += 1;
    count.innerHTML = clicks;
}

clickerButton.addEventListener("click", addCount);