function map(arr, mappingFn) {
    if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const newElement = mappingFn(element, index);
        newArr.push(newElement);
    }
    return newArr;
}

function mappingFn(element, index) {
    return element * 2;
}

console.log(map([1, 4, 7], mappingFn));
console.log(map([1, 4, 7, 9], (x, index) => (index % 2 === 0 ? x + 1 : x * 2)));
console.log(map(['easy', 'one', 'nice', 'focus'], (x, index) => x.length));
