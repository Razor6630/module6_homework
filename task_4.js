function periodNums(startNum, endNum) {
    let current = startNum;
    const intervalId = setInterval(function() {
    console.log(current);
    if (current === endNum) {
        clearInterval(intervalId)
    }
current++;
}, 1000);

}
periodNums(1, 15)