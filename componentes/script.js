var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function soma(){
    currentNumber = currentNumber + 1;    
    currentNumberWrapper.innerHTML = currentNumber;
}

function sub(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}