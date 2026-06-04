"use strict";

let modules = ["HTML", "CSS", "JavaScript", "ReactJS"];
for (let element of modules) {
  document.write(element + "<br>");
}

("use strict");

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((x) => x * x);

squares.forEach(function (element) {
  document.write(elemet + " ");
});

("use strict");

function calculateSum(...args) {
  let sum = a + b;
  arguments.forEach(function (element) {
    sum += element;
  });
  return sum;
}
let s = calculateSum(3, 5, 7, 9);
document.write(s + " ");

s = calculateSum(3, 5, 7, 9, 11);
document.write(s + " ");

function sumOfEvenNumbers(numbers) {
  return numbers
    .filter((n) => n % 2 === 0)
    .reduce((sum, n) => sum + n, 0);
}
