// 1. Write a function to check if a number is odd/even
function isNumberEven(n) {
    return n % 2 === 0;
}

function isNumberOdd(n) {
    return n % 2 !== 0;
}

// 2. Write a function to check if a number is divisible by 5
function isDivisibleBy5(n) {
    return n % 5 === 0;
}

// 3. Write a function to check if a number is perfect square
// n = a * a
// RECOMMENDED

function isNumberPerfectSquare(n) {
    if (n <= 0) return false;

    const sqrtN = Math.sqrt(n);
    const sqrtInt = Math.trunc(sqrtN); //loai bo phan thap phan

    return sqrtInt * sqrtInt === n;
}
console.log(isNumberPerfectSquare(10));
console.log(isNumberPerfectSquare(3));
console.log(isNumberPerfectSquare(4));
console.log(isNumberPerfectSquare(5));
console.log(isNumberPerfectSquare(9));
console.log(isNumberPerfectSquare(25));
console.log(isNumberPerfectSquare(1));

//c2
function isNumberPerfectSquare(n) {
    if (n <= 0) return false;

    return Math.sqrt(n) % 1 === 0;
}

console.log(isNumberPerfectSquare(10));
console.log(isNumberPerfectSquare(3));
console.log(isNumberPerfectSquare(4));
console.log(isNumberPerfectSquare(5));
console.log(isNumberPerfectSquare(9));
console.log(isNumberPerfectSquare(25));
console.log(isNumberPerfectSquare(1));
