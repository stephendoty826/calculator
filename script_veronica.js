let display = document.querySelector('#input');
let buttons = document.querySelector('.buttons');

let currentInput = ""
let inputValue1 = 0;
let inputValue2 = 0;
let operations = "";
//attache even list. to buttons container

buttons.addEventListener('click', (e)=>{
    //add items to display as keys are pressed
    
    currentInput = e.target.textContent;
    
    if(currentInput.length == 1 && currentInput !== "="){
        display.textContent += currentInput;
    }

    if(currentInput == "+" || currentInput == "-"
    || currentInput == "*" || currentInput == "/"){
        inputValue1 = display.textContent.slice(0, display.textContent.length - 1)  // 56+90=
        console.log(inputValue1);
    }
    else if(currentInput == "="){
        inputValue2 = display.textContent.slice(inputValue1.length + 1, display.textContent.length)
        operation = display.textContent[inputValue1.length]
        display.textContent = calculate(inputValue1, inputValue2, operation)
    }
    else if(currentInput == "C"){
        display.textContent = "";
        inputValue1 = 0;
        inputValue2 = 0;
    }
    
})

const calculate = (val1, val2, operator) => {
    switch(operator){
        case "+":
            return parseFloat(val1) + parseFloat(val2)
        case "-":
            return parseFloat(val1) - parseFloat(val2)
        case "*":
            return parseFloat(val1) * parseFloat(val2)
        case "/":
            return parseFloat(val1) / parseFloat(val2)
        
    }
}