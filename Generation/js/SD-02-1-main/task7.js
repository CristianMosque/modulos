// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];
  
  for (let i = 0; i < 106; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log(buzzWords[0]+buzzWords[1]+buzzWords[2]);
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(buzzWords[0]+buzzWords[1]);
    } else if (i % 3 === 0 && i % 7 === 0) {
      console.log(buzzWords[0]+buzzWords[2]);
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log(buzzWords[1]+buzzWords[2]);
    } else if (i % 3 === 0) {
      console.log(buzzWords[0]);
    } else if (i % 5 === 0) {
      console.log(buzzWords[1]);
    } else if (i % 7 === 0) {
      console.log(buzzWords[2]);
    } else {
      console.log(i);
    };
  };