'use strict'

//// constants //////////////
////////////////////////////
const calcHead = document.querySelector('.input__head');
const buttons = document.querySelectorAll('.row-element');
const equal = document.querySelector('.equal');
const remove = document.querySelector('.remove');
const operationSign = document.querySelector('#op-sign')
const opSignHeight = 18;

//// variables /////////////
///////////////////////////
let begin = calcHead.innerText;
let bgn = operationSign.innerText;
let getNumber = [];
let transformNumber = [];
let anotherNumber = [];

buttons.forEach(button => { 
    button.addEventListener('click', (e)=>{
        let target = e.target;


// this function takes the typed number and puts it//
/////////////// inside an array//////////////////////
        function putNumberInArray(e){
    
            calcHead.innerText = '';
            transformNumber = [...getNumber]
            getNumber = [];
            let number = target.innerText;
            transformNumber.push(number)
            let string =  transformNumber.join('')
            let int = parseInt(string);
            anotherNumber.push(int)
        }

//// this function resets the arrays and clears the output///
////////////////////////////////////////////////////////////
        function reset() {

            calcHead.innerText = begin;
            operationSign.innerText = bgn;
            getNumber = [];
            transformNumber = [];
            anotherNumber = [];
        }

/// converts the typed digits into one number//////////////
//////////////////////////////////////////////////////////
        if(target.classList.contains('number')){
            calcHead.innerText = begin;
            let number = target.innerText;
            getNumber.push(number)
            let result = getNumber.join('')
            calcHead.innerText = result;
        }


/// create the context dor the operations ////////////////
/////////////////////////////////////////////////////////
        if(target.classList.contains('operation')){

            putNumberInArray();

            if(target.innerText === '+'){
                operationSign.innerText = '+'
            }
            if(target.innerText === '-'){
                operationSign.innerText = '-'
            }
            if(target.innerText === 'X'){
                operationSign.innerText = 'X'
            }
            if(target.innerText === '÷'){
                operationSign.innerText = '÷'
            }
            if(target.innerText === '%'){
                operationSign.innerText = '%'
            }
        }

//// execute the operations //////////////////////////
/////////////////////////////////////////////////////

        if(target.classList.contains('equal')){

            putNumberInArray();
            
            if(operationSign.innerText === '+'){
               let add = anotherNumber.reduce((a, b)=> a + b )
               reset();
                   calcHead.innerText = add;
            }
            if(operationSign.innerText === '-'){
                let sub = anotherNumber.reduce((a, b)=> a - b )
                reset();
                calcHead.innerText = sub  
            }
            if(operationSign.innerText === 'X'){
                let multiplication = anotherNumber.reduce((a, b)=> a * b )
                reset();
                calcHead.innerText = multiplication
            }
            if(operationSign.innerText === '÷'){
               let subtraction =   anotherNumber.reduce((a, b)=> a / b )
               reset();
                calcHead.innerText = subtraction
            }
            if(operationSign.innerText === '%'){
                console.log(anotherNumber)
                if (anotherNumber.includes(NaN)){
                    console.log('hi')
                    anotherNumber.pop();
                    let oneNrPerc =  anotherNumber[0] / 100;
                    reset();
                    calcHead.innerText = oneNrPerc
                }
                else{
                    let percentage = anotherNumber.reduce((a, b) => a/100 * b)
                    reset();
                    calcHead.innerText = percentage;
                }
            }
        }

//////////////////// clear button ////////////////
/////////////////////////////////////////////////
        if(target.classList.contains('remove')){
            reset();
        }     
    })
});