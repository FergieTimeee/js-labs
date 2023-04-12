// Bài tập mảng - Tìm max

//for i
function findMax(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    let max = numberList[0];
    for (let index = 0; index < numberList.length; index++) {
        if (numberList[index] > max) {
            max = numberList[index];
        }
    }
    return max;
}

console.log(findMax([2, 5, 7, 10]));

// forEach

function findMax(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    let max = numberList[0];
    numberList.forEach((number) => {
        if (number > max) {
            max = number;
        }
    });

    return max;
}

console.log(findMax([2, 5, 7, 10]));

//reduce
function findMax(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    return numberList.reduce((max, number) => (number > max ? number : max));
}

console.log(findMax([2, 5, 7, 10]));
