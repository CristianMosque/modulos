// Refer to Task 5 in your Instructions to complete this task
const  prompt = require("prompt-sync")();

let selec;

selec = Number(prompt("Digite 1 para ir hasta una linea especifica y 2 para mostrar el numero de lineas: "));

if (selec===1){
  j = Number(prompt("cual es la linea especifica: "));
    if (j % 3 === 0 && j % 5 === 0 && j % 7 === 0) {
      console.log("FizzBuzzWoof");
    } else if (j % 3 === 0 && j % 5 === 0) {
      console.log("FizzBuzz");
    } else if (j % 3 === 0 && j % 7 === 0) {
      console.log("FizzWoof");
    } else if (j % 5 === 0 && j % 7 === 0) {
      console.log("BuzzWoof");
    } else if (j % 3 === 0) {
      console.log("Fizz");
    } else if (j % 5 === 0) {
      console.log("Buzz");
    } else if (j % 7 === 0) {
      console.log("Woof");
    } else {
      console.log(j);
    };
  
  
}else if(selec==2){
  let count;
  count = Number(prompt("Hasta cual numero contamos: "));
  for (let i = 1; i <= count; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log("FizzBuzzWoof");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 7 === 0) {
      console.log("FizzWoof");
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log("BuzzWoof");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 7 === 0) {
      console.log("Woof");
    } else {
      console.log(i);
    }
  }
}

