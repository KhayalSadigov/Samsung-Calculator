const input = document.querySelector("#calc-input");
const output = document.querySelector("#calc-result");
const backSpace = document.querySelector("#delete");
const buttons = document.querySelectorAll(".calc-button");
const clear = document.querySelector(".calc-clear")
let result = "";
const operators = ["%", "÷", "×", "−", "+", "+/−", ".", "="];

backSpace.addEventListener("click", () => {
  let n = input.innerText.length;
  input.innerText = input.innerText.slice(0, n - 1);
});

function calculate(text) {
  let res = 0;
  let num = "";
  let op = "+";
  text = text + "+";
  for (let index = 0; index < text.length; index++) {
    if (
      text[index] != "+" &&
      text[index] != "-" &&
      text[index] != "×" &&
      text[index] != "÷"
    ) {
      num = num + text[index];
    } else {
      switch (op) {
        case "+":
          res = res + Number(num);
          break;
        case "-":
          res = res - Number(num);
          break;
        case "×":
          res = res * Number(num);
          break;
        case "÷":
          res = res / Number(num);
          break;
        default:
          break;
      }
      op = text[index];
      num = "";
    }
  }
  return res;
}

clear.addEventListener("click" , ()=>{
    input.innerText = "" 
    output.innerText = ""
})  

console.log(calculate("92+8+10-23+11×2"));
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    input.innerText = input.innerText + e.target.innerText;
    let res = NaN;
    if (
      input.textContent[input.textContent.length - 1] != "-" &&
      input.textContent[input.textContent.length - 1] != "+" &&
      input.textContent[input.textContent.length - 1] != "×" &&
      input.textContent[input.textContent.length - 1] != "÷"
    ) {
      output.innerText = calculate(input.innerText);
    }
  });
});
