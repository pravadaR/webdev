function sumOfEvenNumbers(numbers) {
  return numbers.filter((n) => n % 2 === 0).reduce((sum, n) => sum + n, 0);
}
sumOfEvenNumbers([1, 2, 3, 4, 5, 6]); // 12  (2 + 4 + 6)
sumOfEvenNumbers([1, 3, 5]);
// 0   (no evens)
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(sumOfEvenNumbers([1, 3, 5]));
