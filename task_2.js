function primeNumber(num) {
if (num > 1000)  {
    console.log('Кажется, Вы ошиблись. Введите корректное значение в пределах 1000');
    return;
}
if (num === 0 || num === 1) {
    console.log('Введенное число не относится ни к простым, ни к сложным числам')
    return;
}
else {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            console.log(`Число ${num} является сложным`);
            return;
        }
    }
}
    console.log(`Число ${num} является простым`)
}

primeNumber(1001)


