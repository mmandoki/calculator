let a = 0;
let b = 0;
let operator = "";
let justCalculated = false;
const maxDigits = 12;

let result = document.getElementById("result");
let formula = document.getElementById("formula");

function clearScreen(){
    a = 0;
    b = 0;
    operator = "";
    result.textContent = "0";
    formula.textContent = "";
    justCalculated = false;
}

function backSpace(){
    if(result.textContent === "0"){
        return;
    }

    if(result.textContent.length === 1){
        result.textContent = "0";
    }
    else{
        result.textContent = result.textContent.slice(0, -1);
    }
}

function enterDigit(val){
    if(justCalculated && operator === ""){
        clearScreen()
    }

    if(result.textContent === "0" && val !== "."){
        result.textContent = val;
    }
    else{
        if(val === "." && result.textContent.includes(".")){
            return;
        }
        if(result.textContent.length <= maxDigits){
            result.textContent += val;
        }
    }
}

function enterOperator(op){
    operator = op;

    a = parseFloat(result.textContent);
    
    formula.textContent = result.textContent + " " + op;
    
    result.textContent = "0";
}

// × ÷
function calculate(){
    b = parseFloat(result.textContent);

    if(operator === ""){
        if(formula.textContent.includes("=")){
            formula.textContent = result.textContent + " =";
        }
        else{
            formula.textContent += result.textContent + " =";
        }
        justCalculated = true;
        operator = "";
    }
    else if(operator === "+"){
        formula.textContent += " " + result.textContent + " =";
        result.textContent = a + b;
        result.textContent = result.textContent.slice(0, maxDigits);
        justCalculated = true;
        operator = "";
    }
    else if(operator === "-"){
        formula.textContent += " " + result.textContent + " =";
        result.textContent = a - b;
        result.textContent = result.textContent.slice(0, maxDigits);
        justCalculated = true;
        operator = "";
    }
    else if(operator === "×"){
        formula.textContent += " " + result.textContent + " =";
        result.textContent = a * b;
        result.textContent = result.textContent.slice(0, maxDigits);
        justCalculated = true;
        operator = "";
    }
    else if(operator === "÷"){
        formula.textContent += " " + result.textContent + " =";
        result.textContent = a / b;
        result.textContent = result.textContent.slice(0, maxDigits);
        justCalculated = true;
        operator = "";
    }
}