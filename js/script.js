let input = document.querySelector(".input")

let buttons = document.querySelector('.buttons')

let value1 = ""
let value2 = ""
let operator = ""

buttons.addEventListener("click", (e) => {
    if(e.target.textContent.length == 1){
        switch (e.target.textContent){
            case "C":
                input.textContent = ""
                break
            case "+": case "-": case "*": case "/":
                let inputArray = input.textContent.split("")
                if (inputArray.some((a) => a == "+" || a == "-" || a == "*" || a == "/")){
                    break
                }
                if(input.textContent != ""){
                    input.textContent += e.target.textContent
                    value1 = input.textContent.slice(0, input.textContent.length - 1)
                    operator = input.textContent.slice(input.textContent.length - 1, input.textContent.length)
                    console.log(`value1 = ${value1}`);
                    console.log(`operator = ${operator}`);
                }
                break
                case "=":
                    // if(input.textContent.length > value1.length + 1){ //trying to get to where you can't push "=" when you haven't entered a second value
                        value2 = input.textContent.slice(value1.length + 1, input.textContent.length)
                        console.log(`(value1.length + 1) =${value1.length + 1}`);
                        console.log(`input.textContent = ${input.textContent}`);
                        console.log(`value2 = ${value2}`);
                        value1 = parseFloat(value1)
                        value2 = parseFloat(value2)
                        let result = calculate(value1, value2, operator)
                    result = Math.round(result * 1000000)/1000000
                    // result = Math.fround(result, 6) // can you use this function to round to a certain number of digits
                    input.textContent = result.toString()
                    value1 = result
                    break
                    // }
            default:
                input.textContent += e.target.textContent
        }
    }    
})

function calculate(value1, value2, operator){
    let result = 0
    switch (operator){
        case "+":
            result = value1 + value2
            break
        case "-":
            result = value1 - value2
            break
        case "*":
            result = value1 * value2
            break
        case "/":
            result = value1 / value2
            break
    }
    return result
}









