let a = "0";
let b = undefined;
let operator = "";

const result = document.getElementById("result");
const formula = document.getElementById("formula");

function clear(){
    a = "0";
    b = undefined;
    operator = "";
    result.innerText = "0";
    formula.innerText = "";
}