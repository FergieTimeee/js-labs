// Check if a string contains an email address with @gmail.com or not.
// indexOf
// lastIndexOf
// includes

function hasEmail(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('@gmail.com');
    // return lowerStr.indexOf('@gmail.com') >= 0;
    // return lowerStr.lastIndexOf('@gmail.com') >= 0;
}

console.log(hasEmail('contact@gmail.com'));
console.log(hasEmail('contact@gmail.com'));
console.log(hasEmail('contact@gmailcom'));
