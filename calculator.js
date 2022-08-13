let a = "0";
let b = undefined;
let operator = "";

let result = document.getElementById("result");
let formula = document.getElementById("formula");

function clearScreen(){
    a = "0";
    b = undefined;
    operator = "";
    result.textContent = "0";
    formula.textContent = "";
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
    if(result.textContent === "0" && val !== "."){
        result.textContent = val;
    }
    else{
        if(val === "." && result.textContent.includes(".")){
            return;
        }
        result.textContent += val;
    }
}