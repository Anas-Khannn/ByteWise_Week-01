var result = document.getElementById("result")
function display(number){

    result.value += number;
}

function calculate(){
    var finalNumber = result.value;
    var finalResult = eval(finalNumber);
    result.value = finalResult;
}
function reset(){
    result.value = "";
}
function del(){
    result.value = result.value.slice(0, -1);
}