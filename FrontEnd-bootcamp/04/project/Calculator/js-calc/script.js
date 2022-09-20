















const calClear =() => {
    currentOperand = ''
    previousOperand = ''
    operation = undefined
}

const calDelete = () => {
    currentOperand = currentOperand.toString().slice(0, -1);
}

const calAppendNumber = (number) => {
    if (number === '.' && currentOperand.includes('.')) return
    currentOperand = currentOperand.toString() + number.toString()
    
}

const calChooseOperation = (operation) => {
    if (currentOperand === '') return
    if (previousOperand !== '') {
        compute()
    }
    operation = operation
    previousOperand = currentOperand
    currentOperand = ''
}
const calCompute=() => {
    let computation 
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '÷':
            computation = prev / current
            break
        default:
            return
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
}

const calGetDisplayNumber = (number) => {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay
    if (isNaN(integerDigits)) {
        integerDisplay = ''
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0 
        })
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
    } else {
        return integerDisplay
    }
}


const calUpdateDisplay = () => {
        currentOperandTextElement.innerText = getDisplayNumber(currentOperand)
        if (operation != null) {
            previousOperandTextElement.innerText = 
            `${getDisplayNumber(previousOperand)} ${operation}`;
        } else {
            previousOperandTextElement.innerText = '';
        }
    
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals')
const deleteButton = document.querySelector('[data-delete')
const allClearButton = document.querySelector('[data-all-clear')
const previousOperandTextElement = document.querySelector('[data-previous-operand')
const currentOperandTextElement = document.querySelector('[data-current-operand')




const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

clear()

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calAppendNumber(button.innerText)
        calUpdateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calChooseOperation(button.innerText)
        calUpdateDisplay()
    })
})
equalsButton.addEventListener('click', button => {
    calCompute()
    calUpdateDisplay()
})
allClearButton.addEventListener('click', button => {
    calClear()
    calUpdateDisplay()
})
deleteButton.addEventListener('click', button => {
    calDelete()
    calUpdateDisplay()
})
