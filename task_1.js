function checkNumber() {

    const arr = [0, 0, 1, 1, 2, ''];
    const nullObject = arr.filter(function (el) {
        return el === 0 || typeof el === null;
    });

    let oddNumber = 0;
    let evenNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] !== 0) {
            evenNumber++;
        } else if (arr[i] % 2 !== 0) {
            oddNumber++;
        }
    }
    console.log('Количество четных чисел в массиве: ' + evenNumber);
    console.log('Количество нечетных чисел в массиве: ' + oddNumber);
    console.log('Количество нулевых объектов в массиве: ' + nullObject.length);
}

checkNumber()