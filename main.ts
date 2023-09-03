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
                } else {
                    inputMemory.push(".");
                }
                decimal_ = true;
                updateInput();
            }
        } else {
            inputMemory.push(number);
            updateInput();
        }
    }
}

function operateInput(operator: string) {
    if (inputMemory.length > 0) {
        firstMemory = Number(inputMemory.join(""));
        inputMemory = [];
        decimal_ = false;
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
            case "factorial":
                document.getElementById("inputValueBox")!.textContent = "!";
                operationMemory = "factorial";
                break;
        }
        // updateInput();
    }
}
function calculate() {
    if (inputMemory.length > 0) {
        secondMemory = Number(inputMemory.join(""));
        decimal_ = false;
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
    } else {
        if (operationMemory == "factorial") {
            document.getElementById("inputValueBox")!.textContent = String(
                factorial(firstMemory)
            );
        }
    }
    firstMemory = Number(document.getElementById("inputValueBox")!.textContent);
    secondMemory = 0;
    operationMemory = "";
    inputMemory = [];
    inputMemory.push(String(firstMemory));
    updateInput();
}

function factorial(input: number) {
    if (input == 0 || input == 1) {
        return 1;
    } else {
        let output: number = input;
        for (let i: number = input - 1; i > 1; i--) {
            output = output * i;
        }
        return output;
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
