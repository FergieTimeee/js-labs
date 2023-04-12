// Write a JavaScript function to parameterize a string.
// Eg: parameterize('Code JS Is Fun') --> 'code-js-is-fun'
// toLowerCase()
// p1: replaceAll()
// p2: split and join
// ['code', 'js', 'is', 'fun']

function parameterize(str) {
    // return str.toLowerCase().replaceAll(' ', '-');
    return str.toLowerCase().split(' ').join('-');
}

console.log(parameterize('Code JS Is Fun'));
