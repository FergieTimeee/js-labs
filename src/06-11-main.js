// 1. Get the ones of a number having 3 digits (extract:rut trich)

function extractOnes(n) {
    if (n.toString().length !== 3) return -1;

    const ones = n % 10;
    return ones;
}

console.log(extractOnes(123));
console.log(extractOnes(1234));
// 2. Get the tens of a number having 3 digits

function extractTens(n) {
    if (n.toString().length !== 3) return -1;

    const tens = Math.trunc((n % 100) / 10);
    return tens;
}

console.log(extractTens(132));
console.log(extractTens(1234));

// 3. Get the hundreds of a number having 3 digits

function extractHundreds(n) {
    if (n.toString().length !== 3) return -1;

    const hundreds = Math.trunc(n / 100);
    return hundreds;
}

console.log(extractHundreds(321));
console.log(extractHundreds(1234));

// 123 /100 =1
// 4. Sum all digits of a number having 3 digits
function sumDigits(n) {
    if (n.toString().length !== 3) return -1;

    const ones = n % 10;
    const tens = Math.trunc((n % 100) / 10);
    const hundreds = Math.trunc(n / 100);

    return ones + tens + hundreds;
}

console.log(sumDigits(456));
console.log(sumDigits(157));

function compareNumbers(a, b) {
    if (a < b) return -1;

    if (a > b) return 1;
    return 0;
}
