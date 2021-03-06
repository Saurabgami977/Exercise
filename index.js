const checkVersion = (firstNumber, secondNumber) => {
    return firstNumber.length > secondNumber.length ? console.log(firstNumber, '>', secondNumber)
        : firstNumber > secondNumber ? console.log(firstNumber, '>', secondNumber)
            : firstNumber < secondNumber ? console.log(secondNumber, '>', firstNumber)
                : console.log('equal')
}

checkVersion('4.3333311109.022', '4.33309.99999999900001')

const checkPhone = (number) => {
    let num = [...number]
    return num[0] == 0 && num.length == 9
        ? { valid: false, reason: 'Landline' }
        : num[0] != 9 && num[1] != 8 ? console.log({ valid: false, reason: 'Random' })
            : num.length < 10 || num.length > 10 ? { valid: false, reason: 'Invalid Length' }
                : ['3', '7', '8', '9'].includes(num[2]) ? { valid: false, reason: "Invalid Nepali Carrier" }
                    : { valid: true }
}
// console.log(checkPhone('016638367'))
// console.log(checkPhone('65432768'))
// console.log(checkPhone('988722354264'))
// console.log(checkPhone('9887264'))
// console.log(checkPhone('9887223264'))
// console.log(checkPhone('9897223264'))
// console.log(checkPhone('9861484326'))