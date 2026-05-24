const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const manipulatorButtons = document.querySelectorAll('.manipulator');

const resultText = document.querySelector('.result');
const lastOp = document.querySelector('.lastOperation'); 

let operatorPressed = false;
let operatorUsed = "";

numberButtons.forEach((element) => {
    element.addEventListener("click", () => {

        if (resultText.textContent === "0") {
            resultText.textContent = element.textContent;
        }
        else {
            resultText.textContent += element.textContent;
        }
    });
});

operatorButtons.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.textContent === "="){
            let manipResult = resultText.textContent.split(operatorUsed);
        
            lastOp.textContent = resultText.textContent;

            let resultNum = parseFloat(manipResult[0].trim()) + parseFloat(manipResult[1].trim());

            switch (operatorUsed){

                case '+':
                    if (resultNum % 1 === 0){
                        resultText.textContent = resultNum;
                    }
                    else {
                        resultText.textContent = resultNum.toFixed(2);
                    }
                    break;

                case '-':
                    resultNum = parseFloat(manipResult[0].trim()) - parseFloat(manipResult[1].trim());
                    if (resultNum % 1 === 0){
                        resultText.textContent = resultNum;
                    }
                    else {
                        resultText.textContent = resultNum.toFixed(2);
                    }
                    break;

                case 'x':
                    resultNum = parseFloat(manipResult[0].trim()) * parseFloat(manipResult[1].trim());
                    if (resultNum % 1 === 0){
                        resultText.textContent = resultNum;
                    }
                    else {
                        resultText.textContent = resultNum.toFixed(2);
                    }
                    break;

                case '/':
                    resultNum = parseFloat(manipResult[0].trim()) / parseFloat(manipResult[1].trim());
                    if (resultNum % 1 === 0){
                        resultText.textContent = resultNum;
                    }
                    else {
                        resultText.textContent = resultNum.toFixed(2);
                    }
                    break;
            }

            operatorPressed = false;

        }
        else if (operatorPressed === false){
            operatorPressed = true;
            resultText.textContent += " " + element.textContent + " ";
            operatorUsed = element.textContent;
        }
    });
});

manipulatorButtons.forEach((element) => {

    element.addEventListener("click", () => {
        console.log(element.textContent);
        switch (element.textContent){
            case 'C':
                resultText.textContent = '0';
                operatorPressed = false;
                lastOp.textContent = '';
                break;
            
            case '>':
                if (resultText.textContent.length > 1){
                    resultText.textContent = resultText.textContent.slice(0, -1);
                    if (!resultText.textContent.includes('+') && !resultText.textContent.includes('-') && !resultText.textContent.includes('x') && !resultText.textContent.includes('/')){
                        operatorPressed = false;
                    }
                }
                else {
                    resultText.textContent = '0';
                    operatorPressed = false;
                }
                break;
            case '%':
                if (resultText.textContent.split(' ').length === 1){
                    resultText.textContent = (parseFloat(resultText.textContent) / 100);
                }
                break;
            case '.':
                resultText.textContent += '.';
                break;

            case '+/-':
                if (resultText.textContent.split(' ').length === 1){
                    resultText.textContent = (parseFloat(resultText.textContent) * -1);
                }
        }
    });
});