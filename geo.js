const resultDiv = document.getElementById("resultDiv");



const triangleInputs = document.getElementById("triangleInputs");


const rectangleInputs = document.getElementById("rectangleInputs");


const parallelogramInput = document.getElementById("parallelogramInput");
const calculateButtons = document.querySelectorAll(".cardss button");
for (const button of calculateButtons) {
    button.addEventListener("click", (e) => {
      console.log(e.target, e.target.value);
      startCalculation(e.target, e.target.value);
    });
  }