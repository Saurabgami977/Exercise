const checkVersion = (firstNumber, secondNumber) => {
    return firstNumber > secondNumber ?
        console.log(firstNumber, '>', secondNumber)
            : firstNumber < secondNumber
                ? console.log(secondNumber, '>', firstNumber)
                : console.log('equal');
}

checkVersion('4.2.1', '3.2.1')