//filter(arr,callbackFn)
//callbackFn return true/false;

function filter(arr, callbackFn) {
    if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if (callbackFn(element, index)) {
            newArr.push(element);
        }
    }
    return newArr;
}

console.log(filter([1, 2, 5, 6], (x) => x > 2)); // [3, 5, 7]
console.log(filter([1, 5, 8, 10], (x) => x <= 10 && x % 5 === 0)); // [5]

var sports = [
    {
        name: 'Bơi lội',
        gold: 11,
    },
    {
        name: 'Boxing',
        gold: 3,
    },
    {
        name: 'Đạp xe',
        gold: 4,
    },
    {
        name: 'Đấu kiếm',
        gold: 5,
    },
];
function getTotalGold(sports) {
    sports.reduce((acc, currentValue) => (acc += currentValue.gold));
}

// Expected results:
console.log(getTotalGold(sports));
