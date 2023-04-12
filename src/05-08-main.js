// Write a function to check if a number a positive even number
// If yes, return true. Otherwise return false

//v1
// flag
function checkPositiveEvenNumber1(n) {
    let isValid;

    //checking...
    if (n > 0 && n % 2 === 0) {
        isValid = true;
    } else {
        isValid = false;
    }

    return isValid;
}

console.log(checkPositiveEvenNumber1(2));

//v2
function checkPositiveEventNumber2(n) {
    let isValid = false;

    //checking..
    if (n > 0 && n % 2 === 0) {
        isValid = true;
    }

    return isValid;
}

console.log(checkPositiveEventNumber2(2));

//v3
function checkPositiveEventNumber3(n) {
    // let isValid = false;

    //checking..
    if (n > 0 && n % 2 === 0) {
        return true;
    }

    return false;
}

console.log(checkPositiveEventNumber3(2));

//v4
function checkPositiveEventNumber4(n) {
    return n > 0 && n % 2 === 0;
}

console.log(checkPositiveEventNumber4(2));
