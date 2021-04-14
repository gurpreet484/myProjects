class Calculator{
    constructor(previousOperandTxt, currentOperandTxt)
    {
        this.previousOperandTxt = previousOperandTxt;
        this.currentOperandTxt = currentOperandTxt;
        this.clear();
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operators = undefined;
    }

    backSpace() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if(this.currentOperand.includes('.')  && number === '.') return
        if(this.currentOperand ==='0')
        this.currentOperand = number;
        else
        this.currentOperand = this.currentOperand.toString() + number;
    }

    operations(operation) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '')
        {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN (prev) || isNaN (current)) return
        switch (this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return
        }

        this.currentOperand = computation;
        this.previousOperand = '';
        this.operation = undefined
    }

    updateDisplay() {
        this.currentOperandTxt.innerText = this.currentOperand;
        if(this.operation != null){
            this.previousOperandTxt.innerText = `${this.previousOperand} ${this.operation}`;
        }
        else{
            this.previousOperandTxt.innerText = '';
        }
    }
}

const previousOperandTxt = document.querySelector('.previousOperand');
const currentOperandTxt = document.querySelector('.currentOperand');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const allClear = document.querySelector('.allClear');
const backspace = document.querySelector('.backspace');
const equals = document.querySelector('.equals');


const calculator = new Calculator(previousOperandTxt, currentOperandTxt);
numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operations(button.innerText);
        calculator.updateDisplay();
    });
});

equals.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();

});

allClear.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();

});

backspace.addEventListener('click', button =>{
    calculator.backSpace();
    calculator.updateDisplay();

});