import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = [
  { symbol: "♠", color: "black" },
  { symbol: "♣", color: "black" },
  { symbol: "♥", color: "red" },
  { symbol: "♦", color: "red" }
];

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let countdown = 15;

function generateCard() {
  
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];  
  const randomValue = values[Math.floor(Math.random() * values.length)];

  // Asignar valores a los elementos
  document.querySelector("#top_logo").textContent = randomSuit.symbol;
  document.querySelector("#bottom_logo").textContent = randomSuit.symbol;
  document.querySelector("#middle_symbol").textContent = randomValue;
  document.querySelector("#top_number").textContent = randomValue;
  document.querySelector("#bottom_number").textContent = randomValue;

  // Aplicar color correspondiente
  document.querySelector("#top_logo").style.color = randomSuit.color;
  document.querySelector("#bottom_logo").style.color = randomSuit.color;
  document.querySelector("#middle_symbol").style.color = randomSuit.color;
  document.querySelector("#top_number").style.color = randomSuit.color;
  document.querySelector("#bottom_number").style.color = randomSuit.color;
};

function startTimer() {
  countdown = 15; 
  document.querySelector("#timer").textContent = `Próxima carta en: ${countdown}`;

  const timerInterval = setInterval(() => {
    countdown--;
    document.querySelector("#timer").textContent = `Próxima carta en: ${countdown}`;

    if (countdown === 0) {
      generateCard(); 
      countdown = 16; 
    }
  }, 1000);
}

window.onload = function() {
  generateCard(); 
  startTimer();   

  document.querySelector("#generateCard").addEventListener("click", () => {
    generateCard(); 
    countdown = 16; 
  });
};