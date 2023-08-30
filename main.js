// export {};
var firstMemory = 0;
var secondMemory = 0;
var inputMemory = [];
var operationMemory = "";
function inputNumber(number) {
    if (inputMemory.length < 10) {
        inputMemory.push(number);
        updateInput();
    }
}
function operateInput(operator) {
    if (inputMemory.length > 0) {
        firstMemory = Number(inputMemory.join(""));
        inputMemory = [];
        switch (operator) {
            case "add":
                document.getElementById("inputValueBox").textContent = "+";
                operationMemory = "add";
                break;
            case "subtract":
                document.getElementById("inputValueBox").textContent = "-";
                operationMemory = "subtract";
                break;
            case "multiply":
                document.getElementById("inputValueBox").textContent = "*";
                operationMemory = "multiply";
                break;
            case "divide":
                document.getElementById("inputValueBox").textContent = "/";
                operationMemory = "divide";
                break;
        }
        // updateInput();
    }
}
function calculate() {
    if (inputMemory.length > 0) {
        secondMemory = Number(inputMemory.join(""));
        inputMemory = [];
        switch (operationMemory) {
            case "add":
                document.getElementById("inputValueBox").textContent = String(firstMemory + secondMemory);
                break;
            case "subtract":
                document.getElementById("inputValueBox").textContent = String(firstMemory - secondMemory);
                break;
            case "multiply":
                document.getElementById("inputValueBox").textContent = String(firstMemory * secondMemory);
                break;
            case "divide":
                document.getElementById("inputValueBox").textContent = String(firstMemory / secondMemory);
                break;
        }
        firstMemory = Number(document.getElementById("inputValueBox").textContent);
        secondMemory = 0;
        operationMemory = "";
        inputMemory = [];
        inputMemory.push(String(firstMemory));
        updateInput();
    }
}
function clearMemory() {
    firstMemory = 0;
    secondMemory = 0;
    inputMemory = [];
    operationMemory = "";
    document.getElementById("inputValueBox").textContent = "0";
}
function updateInput() {
    document.getElementById("inputValueBox").textContent =
        inputMemory.join("");
    console.log(inputMemory);
}
