//                 task-1

// const clock24 = document.getElementById('clock24')
// function concatZero(timeFrame) {
//   return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
// }
// function realTime() {
//   let date = new Date()
//   let second = date.getSeconds()
//   let month = date.getMinutes()
//   let hours = date.getHours()
//   clock24.textContent = `${concatZero(hours)} : ${concatZero(month)} : ${concatZero(second)}`
// }
// setInterval(realTime, 1000)

                    // task-2

const input = document.querySelector("input"),
  guess = document.querySelector(".wrapper_header_guess"),
  checkButton = document.querySelector(".input_field_btn"),
  remainChances = document.querySelector(".chances");
input.focus();

const resetGame = () => {

  randomNum = Math.floor(Math.random() * 100); 
  chance = 10; 
  input.disabled = false; 
  remainChances.textContent = chance; 
  guess.textContent = ""; 
  guess.style.color = "#333"; 
  input.value = ""; 
  checkButton.textContent = "Check"; 
};

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum)
let chance = 10;
checkButton.addEventListener("click", () => {
  if (input.disabled) {
    resetGame();
    return;
  }
  chance--; 
  let inputValue = input.value;
  if
   (inputValue == randomNum) { 
    [guess.textContent, input.disabled] = ["Contgrats! You found the number.", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "#27ae60"];
  }
   else if (inputValue > randomNum && inputValue < 100) { 
    [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
    guess.style.color = "#333";

  }
   else if (inputValue < randomNum && inputValue > 0) { 
    [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
    guess.style.color = "#333";
  }
   else { 
    [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
    guess.style.color = "#e74c3c";
  }
  if (chance == 0) { 
    [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
    [guess.textContent, guess.style.color] = ["You lost the game", "#e74c3c"];
  }
});