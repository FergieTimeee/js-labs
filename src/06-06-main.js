// 1. Random n number in range of [0,n]
// n = 10
// 0 ,1 ,5 , 10
// Math.random() ---> [0,1)

function randomNumber(n) {
    if (n < 0) return -1;

    const random = Math.random() * n;
    // console.log(random);
    return Math.round(random);
}
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(100));

function randomNumber(n) {
    if (n < 0) return -1;

    //checking...
    const random = Math.random() * (n + 1);

    return Math.floor(random);
}

console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(100));

// 1. Random n number in range of [a,b]

function randomInteger(a, b) {
    if (a >= b) return -1;

    const random = Math.random() * (b - a + 1) + a;

    return Math.floor(random);
}

console.log(randomInteger(5, 10));
console.log(randomInteger(5, 10));
console.log(randomInteger(5, 10));
console.log(randomInteger(5, 10));
console.log(randomInteger(5, 10));
console.log(randomInteger(-2, 2));
