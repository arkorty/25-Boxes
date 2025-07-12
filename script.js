let redBoxes = [];
const maxRed = 3;

function initGame() {
  const board = document.getElementById("gameBoard");

  for (let i = 0; i < 25; i++) {
    const box = document.createElement("button");
    box.className = "box";
    box.textContent = i + 1;
    box.onclick = () => handleClick(i);
    board.appendChild(box);
  }

  updateCounter();
}

function handleClick(index) {
  const box = document.querySelectorAll(".box")[index];

  if (box.classList.contains("red")) {
    box.classList.remove("red");
    redBoxes = redBoxes.filter((i) => i !== index);
  } else {
    if (redBoxes.length >= maxRed) {
      const oldestIndex = redBoxes.shift();
      document.querySelectorAll(".box")[oldestIndex].classList.remove("red");
    }

    box.classList.add("red");
    redBoxes.push(index);
  }

  updateCounter();
}

function updateCounter() {
  document.getElementById("redCount").textContent = redBoxes.length;
}

document.addEventListener("DOMContentLoaded", initGame);
