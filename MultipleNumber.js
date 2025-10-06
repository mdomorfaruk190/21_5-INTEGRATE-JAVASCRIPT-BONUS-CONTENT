const expression = "394+23-34*4/4";
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
            console.log('under j: ', expression[j]);
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


for (let i = 0; i < temp.length; i++) {
    const element = temp[i];
    if(element )
}
