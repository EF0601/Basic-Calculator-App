// export {};

let firstMemory: number = 0;
let secondMemory: number = 0;
let inputMemory: Array<string> = [];
let operationMemory: string = "";
let decimal_: boolean = false;

function inputNumber(number: string) {
    if (inputMemory.length < 10) {
        if (number == ".") {
            if (decimal_ == false) {
                if (inputMemory.length == 0) {
                    inputMemory.push("0.");
                }
                else{
                    inputMemory.push('.');
                }
                decimal_ = true;
                updateInput();
            }
        }
        else {
            inputMemory.push(number);
            updateInput();
        }
    }
}

function operateInput(operator: string) {
    if (inputMemory.length > 0) {
        firstMemory = Number(inputMemory.join(""));
        inputMemory = [];
        switch (operator) {
            case "add":
                document.getElementById("inputValueBox")!.textContent = "+";
                operationMemory = "add";
                break;
            case "subtract":
                document.getElementById("inputValueBox")!.textContent = "-";
                operationMemory = "subtract";
                break;
            case "multiply":
                document.getElementById("inputValueBox")!.textContent = "*";
                operationMemory = "multiply";
                break;
            case "divide":
                document.getElementById("inputValueBox")!.textContent = "/";
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
                document.getElementById("inputValueBox")!.textContent = String(
                    firstMemory + secondMemory
                );
                break;
            case "subtract":
                document.getElementById("inputValueBox")!.textContent = String(
                    firstMemory - secondMemory
                );
                break;
            case "multiply":
                document.getElementById("inputValueBox")!.textContent = String(
                    firstMemory * secondMemory
                );
                break;
            case "divide":
                document.getElementById("inputValueBox")!.textContent = String(
                    firstMemory / secondMemory
                );
                break;
        }
        firstMemory = Number(
            document.getElementById("inputValueBox")!.textContent
        );
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
    document.getElementById("inputValueBox")!.textContent = "0";
}

function updateInput(): void {
    document.getElementById("inputValueBox")!.textContent =
        inputMemory.join("");
    console.log(inputMemory);
}

//TODO: fix decimal point spam
