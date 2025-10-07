function myEval(userInput){
    const expression = userInput;
// const expressionToArray = expression.split(/[\+\-\*\/]/);

    let temp = [];
    let start = 0;
    let lastOperator = '';
    let lastNumber = '';

    for (let i = 0; i < expression.length; i++){
        const element = expression[i];
        let currentOperator = '';

        if(element === "+" || element === '-' || element === "*" || element === "/"){
            currentOperator = element;
            let currentStringNumber = '';

            for (let j = start; j < i; j++) {
                currentStringNumber = currentStringNumber + expression[j];
            }

            start = i+1;
            temp.push(currentStringNumber);
            temp.push(currentOperator);
            currentStringNumber = '';
            lastOperator = temp[temp.length -1];
            lastNumber = expression.split(lastOperator)[expression.split(lastOperator).length - 1];
        }
    }
    temp[temp.length ] = lastNumber;

    let newArray = [...temp];

    for (let i = 0; i < temp.length; i++) {
        const element = newArray[i];
        if(element === "/"){
            const result = getResult(i, element);
            updateArray(i, result);
            i =0;
        }
        if(element === "*"){
            const result = getResult(i, element);
            updateArray(i, result);
            i = 0;
        }
    }

    for (let i = 0; i < newArray.length; i++){
        const element = newArray[i];
        if (element === "+"){
            const result = getResult(i, element)
            updateArray(i, result);
            i = 0;
        }
        if( element === '-'){
            const result = getResult(i, element);
            updateArray(i, result);
            i = 0;
        }
    }

    function updateArray(elementIndex, result){
        const newPositionForResult = elementIndex - 1;

        newArray.splice(newPositionForResult, 3, result);
    }

    function getResult(elementIndex, element){
        const leftOperant = newArray[elementIndex - 1];
        const rightOperant = newArray[elementIndex + 1];
        let result;
        switch (element){
            case "+":
                result = parseFloat(leftOperant) + parseFloat(rightOperant);
                break;
            case "-":
                result = parseFloat(leftOperant) -  parseFloat(rightOperant);
                break;
            case "*":
                result = parseFloat(leftOperant) *  parseFloat(rightOperant);
                break;
            case "/":
                result = parseFloat(leftOperant) /  parseFloat(rightOperant);
                break;
            default:
                result = 0;
                break;
        }
        return result;
    }
    return newArray.toString();
}

const result = myEval( "394+23-34*4/4+10");
console.log(result)

/* [
  '394', '+', '23',
  '-',   34,  '+',
  '10'
] calculation this
for (let i = 0; i < temp.length; i++) {
    const element = newArray[i];
    if(element === "/"){
        const previousStringNumber = newArray[i -1];
        const nextStringNumber = newArray[ i + 1];
        const result = parseFloat(previousStringNumber) / parseFloat(nextStringNumber);
        const newPosition =i-1;
        newArray.splice(newPosition, 3, result);
        i =0;
    }
    if(element === "*"){
        const previousStringNumber = newArray[i -1];
        const nextStringNumber = newArray[ i + 1];
        const result = parseFloat(previousStringNumber) *  parseFloat(nextStringNumber);
        const newPosition = i-1;
        newArray.splice(newPosition, 3, result);
        i = 0;
    }
}

const newCopy = [...newArray];
for (let i = 0; i < newCopy.length; i++){
    const element = newCopy[i];
    if (element === "+"){
        const result = getResult(i, element)
        const newPositionForResult = i-1;
        newCopy.splice(newPositionForResult, 3, result);
        i = 0;
    }
    if( element === '-'){
        const result = getResult(i, element);
        console.log(result);
        const newPositionForResult = i - 1;
        newCopy.splice(newPositionForResult, 3, result);
        i = 0;
    }
}

console.log(newCopy.toString());
 */
