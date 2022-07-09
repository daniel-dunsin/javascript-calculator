const operations = document.querySelectorAll("[data-operation]");
const numbers = document.querySelectorAll("[data-number]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const equalBtn = document.querySelector("[data-equals]");

class Calculator {
  constructor() {
    this.previousOperandElement = document.querySelector(".previous-operand");
    this.currentOperandElement = document.querySelector(".current-operand");
    this.currentOperand = "";
    this.previousoperand = "";
    this.operation = undefined;
  }
  clear() {
    this.currentOperand = "";
    this.previousoperand = "";
    this.operation = undefined;
  }
  display() {
    this.previousOperandElement.textContent = this.previousoperand;
    this.currentOperandElement.textContent = this.currentOperand;
  }
  addNumber(number) {
    if (number == "." && this.currentOperand.includes(".")) return;
    this.currentOperand += number;
  }
  chooseOperation(operation) {
    this.operation = operation;
    if (
      this.operation &&
      this.previousoperand != "" &&
      this.currentOperand == ""
    ) {
      this.previousoperand = this.previousoperand.slice(0, -1) + this.operation;
    }
    if (this.previousoperand != "") {
      this.compute();
    }
    if (this.currentOperand == "") return;
    this.previousoperand = this.currentOperand + " " + this.operation;
    this.currentOperand = "";
  }
  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }
  compute() {
    if (this.currentOperand == "") return;
    if (this.currentOperand != "" && this.previousoperand == "") return;
    const current = parseFloat(this.currentOperand);
    const previous = parseFloat(this.previousoperand);
    this.currentOperand = "";
    this.previousoperand = "";
    let computation = 0;
    switch (this.operation) {
      case "+":
        computation = previous + current;
        break;
      case "-":
        computation = previous - current;
        break;
      case "*":
        computation = previous * current;
        break;
      case "/":
        computation = previous / current;
        break;
    }

    this.currentOperand = computation;
  }
}

const calculator = new Calculator();

allClearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.display();
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    calculator.addNumber(e.currentTarget.textContent);
    calculator.display();
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    calculator.chooseOperation(e.currentTarget.textContent);
    calculator.display();
  });
});

equalBtn.addEventListener("click", () => {
  calculator.compute();
  calculator.display();
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.display();
});

window.addEventListener("keyup", (e) => {
  switch (e.keyCode) {
    case 13:
      calculator.compute();
      calculator.display();
      break;
    case 187:
      calculator.compute();
      calculator.display();
      break;
    case 106:
      calculator.chooseOperation("*");
      calculator.display();
      break;
    case 111:
      calculator.chooseOperation("/");
      calculator.display();
      break;
    case 107:
      calculator.chooseOperation("+");
      calculator.display();
      break;
    case 109:
      calculator.chooseOperation("-");
      calculator.display();
      break;
    case 189:
      calculator.chooseOperation("-");
      calculator.display();
      break;
    case 8:
      calculator.delete();
      calculator.display();
      break;
    case 27:
      calculator.clear();
      calculator.display();
      break;
    case 190:
      calculator.addNumber(".");
      calculator.display();
      break;
    case 96:
      calculator.addNumber('0');
      calculator.display();
      break;
    
    case 97:
      calculator.addNumber("1");
      calculator.display();
      break;
    case 98:
      calculator.addNumber("2");
      calculator.display();
      break;
    case 99:
      calculator.addNumber("3");
      calculator.display();
      break;
    case 100:
      calculator.addNumber("4");
      calculator.display();
      break;
    case 101:
      calculator.addNumber("5");
      calculator.display();
      break;
    case 102:
      calculator.addNumber("6");
      calculator.display();
      break;
    case 103:
      calculator.addNumber("7");
      calculator.display();
      break;
    case 104:
      calculator.addNumber("8");
      calculator.display();
      break;
    case 105:
      calculator.addNumber("9");
      calculator.display();
      break;
    case 48:
      calculator.addNumber('0');
      calculator.display();
      break;
    
    case 49:
      calculator.addNumber("1");
      calculator.display();
      break;
    case 50:
      calculator.addNumber("2");
      calculator.display();
      break;
    case 51:
      calculator.addNumber("3");
      calculator.display();
      break;
    case 52:
      calculator.addNumber("4");
      calculator.display();
      break;
    case 53:
      calculator.addNumber("5");
      calculator.display();
      break;
    case 54:
      calculator.addNumber("6");
      calculator.display();
      break;
    case 55:
      calculator.addNumber("7");
      calculator.display();
      break;
    case 56:
      calculator.addNumber("8");
      calculator.display();
      break;
    case 57:
      calculator.addNumber("9");
      calculator.display();
      break;
    default:
      return;
  }

});
