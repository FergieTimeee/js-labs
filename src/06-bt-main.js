function getTaxiCount(passengersCount) {
    if (passengersCount <= 4) return 1;

    const taxi4 = 4;
    const taxi7 = 7;

    const countTaxi7 = Math.floor(passengersCount / taxi7);
    const remainingPassengersCount = passengersCount % taxi7;
    const countTaxi4 = Math.floor(remainingPassengersCount / taxi4);

    return countTaxi7 + countTaxi4;
}

console.log(getTaxiCount(6));

//c2
function getTaxiCount(passengersCount) {
    if (passengersCount <= 0) return -1;

    if (passengersCount <= 7) return 1;
    if (passengersCount > 7 && passengersCount % 7 === 0) return passengersCount / 7;
    if (passengersCount > 7 && passengersCount % 7 !== 0)
        return Math.trunc(passengersCount / 7) + 1;
}

//bt2
function getMaxDigit(n) {
    if (n < 0 || n >= 1000) return -1;

    const ones = n % 10;
    const tens = Math.trunc((n % 100) / 10);
    const hundreds = Math.trunc(n / 100);

    let max = ones;
    if (tens > max) max = tens;
    if (hundreds > max) max = hundreds;

    return max;
}
console.log(getMaxDigit(789));

//999/10

function isSymmetricNumber(n) {
    if (n.toString().length > 3 || n < 0) return false;

    if (n < 10) return true;
    if (10 < n <= 99) return n % 10 === Math.trunc(n / 10);
    return n % 10 === Math.trunc(n / 100);
}
