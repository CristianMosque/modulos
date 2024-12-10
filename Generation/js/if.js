const  prompt = require("prompt-sync")();

let count;
count = Number(prompt("escriba un numero: "));

if (count < 3){
    console.log("menor que 3: ");
    count++;
}else{
    console.log("Mayor que ");
}   


console.log("menor que 3: ");
