let group1 = [];
let group2 = [];
let groupSelector = true;
let equation = 0
let input = document.querySelector('#input')
let operation = ""
let clear = document.querySelector('#clear')
clear.addEventListener('click', (e)=>{
    input.textContent = "Clear"
})

let operators = document.querySelector('.operators')
operators.addEventListener('click',(e)=>{
    operation = (e.target.firstChild.textContent);
    input.textContent = operation
    groupSelector = !groupSelector
})

let numbers = document.querySelector('.leftPanel')
numbers.addEventListener('click', (e)=>{
    let num = (e.target.firstChild.textContent);
    if(num == "C"){
        group1 = []
        group2 = []
        }
    if(groupSelector == true && num != "C"){
    group1.push(num)
    console.log(group1);
    input.textContent = group1.join('').toString()
    }
    if(groupSelector == false && num != "C"){
    group2.push(num)
    console.log(group2);
    input.textContent = group2.join('').toString()
    }
})

let equal = document.querySelector('#result')
equal.addEventListener('click', (e)=>{
    let first = parseFloat(group1.join(''));
    let second = parseFloat(group2.join(''));
    let equation = 0
    if(operation == "+"){
        equation = first + second
        }
    else if(operation == "-"){
        equation = first - second

        }
    else if(operation == "*"){
        equation = first * second
        
        }
    else if(operation == "/"){
        equation = first / second
        
        }
    input.textContent = equation.toString()
    group1 = [equation]
    group2 = []
    groupSelector = true;
})