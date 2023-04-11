function sumNumbers(number1) {
    return function(number2) {
        return number1 + number2;
    };
}

const sum = sumNumbers(3)(2);
console.log(sum);

sumNumbers()