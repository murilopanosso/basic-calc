const add = (x, y) => isNumber(x) && isNumber(y) ? x + y : 'invalid values';

const multiplication = (x, y) => isNumber(x) && isNumber(y) ? x * y : 'invalid values';

const subtraction = (x, y) => isNumber(x) && isNumber(y) ? x - y : 'invalid values';

const divisiton = (x, y) => isNumber(x) && isNumber(y) && isNotZero(y)  ? x / y : 'invalid values';

const isNumber = (n) => typeof n  === 'number';

const isNotZero = (n) => n !== 0

module.exports = {
    add,
    multiplication,
    subtraction,
    divisiton
}


