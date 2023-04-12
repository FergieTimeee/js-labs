// ham every(callbackFn) Kiểm tra tất cả phần tử thoả điều kiện
function checkIfAllEven(numberList) {
    if (!Array.isArray(numberList)) return false;

    let isValid = true;
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 !== 0) {
            isValid = false;
            break;
        }
    }
    return isValid;
}

console.log(checkIfAllEven([1, 2, 3]));
console.log(checkIfAllEven([2, 4, 6]));

//v2

function checkIfAllEven(numberList) {
    if (!Array.isArray(numberList)) return false;

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 !== 0) return false;
    }
    return true;
}
console.log(checkIfAllEven([1, 2, 3]));
console.log(checkIfAllEven([2, 4, 6]));

//ham some(callbackFn) Kiểm tra có một phần tử thoả điều kiện
function checkIfASome(numberList) {
    if (!Array.isArray(numberList)) return false;

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 === 0) return true;
    }
    return false;
}

console.log(checkIfASome([1, 2, 3]));
console.log(checkIfASome([1, 3, 5]));

// indexOf(searchElement) Tìm vị trí đầu tiên của phần tử searchElement
function checkSearchPosIndexOf(numberList) {
    if (!Array.isArray(numberList)) return -1;

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number === 'easy') return i;
    }
    return -1;
}

console.log(checkSearchPosIndexOf(['easy', 'frontend', 'easy']));

//lastIndexOf(searchElement) Tìm vị trí cuối cùng của phần tử searchElement

function checkSearchPosLastIndexOf(numberList) {
    if (!Array.isArray(numberList)) return -1;

    let count = -1;
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number === 'easy') {
            count = i;
        }
    }
    return count;
}

console.log(checkSearchPosLastIndexOf(['easy', 'frontend', 'easy']));

//includes(searchElement) Kiểm tra có chứa phần tử searchElement không

function checkSearchPosIncludes(numberList) {
    if (!Array.isArray(numberList)) return false;

    let count = -1;
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number === 'easy') {
            count = i;
        }
    }
    return false;
}
