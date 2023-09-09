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
            case "+":
                document.getElementById("inputValueBox")!.textContent = "+";
                operationMemory = "add";
                break;
            case "-":
                document.getElementById("inputValueBox")!.textContent = "-";
                operationMemory = "subtract";
                break;
            case "*":
                document.getElementById("inputValueBox")!.textContent = "*";
                operationMemory = "multiply";
                break;
            case "/":
                document.getElementById("inputValueBox")!.textContent = "/";
                operationMemory = "divide";
                break;
            case "!":
                document.getElementById("inputValueBox")!.textContent = "!";
                operationMemory = "factorial";
                break;
            case "^":
                document.getElementById("inputValueBox")!.textContent = "^";
                operationMemory = "exponent";
                break;
            case "sqrt":
                document.getElementById("inputValueBox")!.textContent = "root";
                operationMemory = "sqrt";
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
            case "exponent":
                document.getElementById("inputValueBox")!.textContent = String(
                    firstMemory ** secondMemory
                );
                break;
            case "sqrt":
                document.getElementById("inputValueBox")!.textContent = String(
                    firstMemory ** (1 / secondMemory)
                );
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
    if (firstMemory = NaN) {
        document.getElementById("inputValueBox")!.textContent = "Let's keep it real.";
        firstMemory = 0;
    }
}

function factorial(input: number) {
    if (input == 0 || input == 1) {
        return 1;
    } else if(input <= 170){
        let output: number = input;
        for (let i: number = input - 1; i > 1; i--) {
            output = output * i;
        }
        return output;
    }
    else{
        return Infinity;
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

// Add an event listener for keys
document.addEventListener("keydown", (event: KeyboardEvent) => {
    // Check if the key pressed is the "Enter" key or any key
    let key: string = event.key;
    if (key === "Enter") {
        // Do something when the "Enter" key is pressed
        console.log("Enter key was pressed!");
        calculate();
    } else if (key != "Shift") {
        // Handle other keys here if needed
        console.log("Key pressed: " + key);
        if (!Number.isNaN(Number(key)) || key == ".") {
            inputNumber(key);
        } else if (key == "Escape") {
            clearMemory();
        } else {
            operateInput(key);
        }
    }
});
