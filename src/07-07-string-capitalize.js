// Write a function to transform a string:
// The first letter in UPPERCASE
// The rest in lowercase
// Eg: capitalize('easy FRontend') --> 'Easy frontend'
// p1.toUpperCase()
// p2.toLowerCase()
// p1 p2

function capitalize(str) {
    if (!str) return str; //kiem tra chuoi rong

    const firstUppercase = str[0].toUpperCase();
    const rest = str.slice(1).toLowerCase();

    return `${firstUppercase}${rest}`;
}
console.log(capitalize('easy FRontend'));
console.log(capitalize('easy FROntend'));
console.log(capitalize('eAsy FRontend'));
