function sumEvenNumbers(numbers) {
    //Start Coding Here
    return numbers.reduce(function (acc, cur) {
        if (cur % 2 == 0) {
            return acc + cur;
        }
        return acc;
    }, 0);
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
