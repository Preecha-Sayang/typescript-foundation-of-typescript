function calculate(a, b, operator) {
  //Start Coding Here
  var sum = 0;
  switch (operator) {
    case "add":
      sum = a + b;
      break;
    case "multiply":
      sum = a * b;
      break;
    case "divide":
      sum = a - b;
      break;
    case "mod":
      sum = a % b;
      break;
  }
  return sum == 0 ? "Invalid operator" : sum;
}
console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide")); // 2
console.log(calculate(10, 5, "mod")); // "Invalid operator"
