// ham find
//v1
function findFirstEven(numberList) {
    if (!Array.isArray(numberList)) return undefined;

    let number;
    for (let index = 0; index < numberList.length; index++) {
        if (numberList[index] % 2 === 0) {
            number = numberList[index];
            break;
        }
    }

    return number;
}

console.log(findFirstEven([1, 2, 5, 6]));

//v2
function findFirstEven(numberList) {
    if (!Array.isArray(numberList)) return undefined;

    for (let index = 0; index < numberList.length; index++) {
        if (numberList[index] % 2 === 0) return numberList[index];
    }
    return undefined;
}
console.log(findFirstEven([1, 3, 5, 7]));

//v3
function findFirstEven(numberList, callbackFn) {
    if (!Array.isArray(numberList)) return undefined;

    for (let index = 0; index < numberList.length; index++) {
        if (typeof callbackFn === 'function' && callbackFn(numberList[index])) {
            return numberList[index];
        }
    }

    return undefined;
}

function isEven(number) {
    return number % 2 === 0;
}

console.log(findFirstEven([1, 2, 5, 6], isEven));

console.log(findFirstEven([1, 4, 6, 9], (x) => x % 2 === 0));
