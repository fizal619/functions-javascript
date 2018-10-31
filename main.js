console.log("Tomatoes are the best 🍅");
//Defining the funtion
// function calculator(operation, number1, number2){
//   console.log("Checking add");
//   if (operation === "add") {
//     return number1 + number2;
//   }
//   console.log("checking subtract");
//   if (operation === "subtract") {
//     return number1 - number2;
//   }
//   console.log("checking divide");
//   if (operation === "divide") {
//     return number1 / number2;
//   }
//   console.log("checking multiply");
//   if (operation === "multiply") {
//     return number1 * number2;
//   }
// }
//
// let sum = calculator("add", 5, 5);
// let divide = calculator("divide", sum, 2); // 10 / 2
// console.log("This is the output of divide", divide);
//
// //calling the function and storing what it returns in a variable
// let answer = calculator("add", 4, 2);
// console.log(answer); // 6
// // reusing answer
// answer = calculator("subtract", 40, 2);
// console.log(answer); // 2
// answer = calculator("divide", 50, 2);
// console.log(answer); // 2
// answer = calculator("multiply", 40000, 2);
// console.log(answer); // 8

//
// let point = ask("Is Kim the best?", "no");
//
// console.log(point);
let questions = [
  "Was Kim born in 1985?",
  "Will Rob get out of jail?",
  "Does North seem happy?",
  "Kanye released 'Heartless' in 2008?",
  "Do you hate the Kardashians?"
];
let answers = [
  "yes",
  "no",
  "no",
  "yes",
  "yes"
];


function ask(question, answer){
  //your code here
  let userInput = prompt(question);
  if (answer === userInput){
    return 1;
  } else {
    return 0;
  }
}

//keep total outside to keep track of the score. 
let total = 0;
for (let i = 0; i < questions.length; i++){
  console.log(questions[i]);
  console.log(answers[i]);

  // actually call the ask function and store any points to total
  total = total + ask(questions[i], answers[i]);

  console.log("Current score:", total)
  console.log("");
}
