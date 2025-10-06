// function declaration
function addTodo(task){
    const newTaskElement = document.createElement('li'); // this is a local variable
}

// function expression
const myTodo = function (){
    console.log("hello World");
}
myTodo();


var name = 'Md. Omor Faruk'; // Global variable

// Immediately Invoked Function (IIFE)
(function addUser(){
    romanTicName = 'Jantoos';
    console.log(romanTicName);
})();

// Without name it is also a IIFE

(function (){
    romanTicName = 'Jantoos';
    console.log(romanTicName);
})();
