let operatorUsed;
let windowText = "";
let val1;
let val2;

let numbers = document.querySelectorAll(".numbers div");

let updateDisplay = (displayText)=> {
    let display = document.querySelector("#input");
    display.textContent = displayText;
}

numbers.forEach(number => number.addEventListener('click', (e) => {
    let newChar = e.target.outerText;
    if (e.target.outerText === 'C') {
        windowText = "";
    }
    else {
        windowText += newChar;
    }
    updateDisplay(windowText);
}));

let operators = document.querySelectorAll(".operators div");

operators.forEach(operator => operator.addEventListener('click', (e) => {
    // console.log(e.target.outerText);

    if (operatorUsed === undefined && windowText !== "") {
        operatorUsed = e.target.outerText;
        val1 = windowText;
        windowText += operatorUsed;
        updateDisplay(windowText);
    }

}));

let equal = document.querySelector(".equal");

equal.addEventListener('click', (e) => {
    // console.log(e.target.outerText);
    if (windowText.length > val1.length + 1) {
        val2 = windowText.split(operatorUsed)[1];
        evaluate();
    };
});

let evaluate = () => {
    let outputNum;
    switch (operatorUsed) {
        case '+': outputNum = parseFloat(val1) + parseFloat(val2);
            break;
        case '-': outputNum = parseFloat(val1) - parseFloat(val2);
            break;
        case '*': outputNum = parseFloat(val1) * parseFloat(val2);
            break;
        case '/': outputNum = parseFloat(val1) / parseFloat(val2);
            break;
    }

    updateDisplay(outputNum);
    operatorUsed = undefined;
    windowText = "";
};