// 1. Convert hours to seconds

function covertHorsToSeconds(n) {
    if (n < 0) return -1;
    if (n === 0) return 0;

    const SECONDS_PER_HOUR = 3600;
    return n * SECONDS_PER_HOUR;
}

console.log(covertHorsToSeconds(2));

// 2. Given 3 numbers, find max

function findMax(a, b, c) {
    let max = a;

    if (b > max) max = b;
    if (c > max) max = c;

    return max;
}

console.log(findMax(-10, 7, 9));
// 3. Given 3 numbers, find max even number

function findMaxEven(a, b, c) {
    let max = Number.NEGATIVE_INFINITY; //am vo cung

    if (a % 2 === 0 && a > max) max = a;
    if (b % 2 === 0 && b > max) max = b;
    if (c % 2 === 0 && c > max) max = c;

    return max;
}

console.log(findMaxEven(5, 10, 21));
