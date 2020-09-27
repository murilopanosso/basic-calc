const calc = require("../index");

describe('Add Operation', () => {
    test('given two numbers it should return the result of adding these two numbers', () => {
        expect(calc.add(1, 1)).toEqual(2);
        expect(calc.add(-123, 123123)).toEqual(123000);

        expect(calc.add(1, 2)).toEqual(3);
        expect(calc.add(10, 10)).toEqual(20);
        expect(calc.add(15, 2)).toEqual(17);
    })

    test('given one number and one string it should return invalid values', () => {
        expect(calc.add('test', 2)).toEqual('invalid values');
        expect(calc.add(10, '10')).toEqual('invalid values');
    })


    test('given two strings it should return invalid values', () => {
        expect(calc.add('test', '2')).toEqual('invalid values');
    })
});


describe('Multiply Operation', () => {
    test('given two numbers it should return the result of multiplication of these two numbers', () => {
        expect(calc.multiplication(8, 0)).toEqual(0);
        expect(calc.multiplication(1239123, 12313)).toEqual(15257321499);

        expect(calc.multiplication(1, 2)).toEqual(2);
        expect(calc.multiplication(10, 10)).toEqual(100);
        expect(calc.multiplication(15, 2)).toEqual(30);
    })

    test('given one number and one string it should return invalid values', () => {
        expect(calc.multiplication('test', 2)).toEqual('invalid values');
        expect(calc.multiplication(10, '10')).toEqual('invalid values');
    })


    test('given two strings it should return invalid values', () => {
        expect(calc.multiplication('test', '2')).toEqual('invalid values');
    })
});





describe('Subtraction Operation', () => {
    test('given two numbers it should return the result of subtraction of these two numbers', () => {
        expect(calc.subtraction(1, 2)).toEqual(-1);
        expect(calc.subtraction(2, 1)).toEqual(1);
        expect(calc.subtraction(15, 2)).toEqual(13);
        expect(calc.subtraction(2, 2)).toEqual(0);
    })

    test('given one number and one string it should return invalid values', () => {
        expect(calc.subtraction('test', 2)).toEqual('invalid values');
        expect(calc.subtraction(10, '10')).toEqual('invalid values');
    })


    test('given two strings it should return invalid values', () => {
        expect(calc.subtraction('test', '2')).toEqual('invalid values');
    })
});



describe('division Operation', () => {
    test('given two numbers it should return the result division of these two numbers', () => {
        expect(calc.divisiton(123, -12)).toEqual(-10.25);

        expect(calc.divisiton(1, 2)).toEqual(0.5);
        expect(calc.divisiton(15, 2)).toEqual(7.5);
        expect(calc.divisiton(2, 2)).toEqual(1);
    })

    test('given one number and one string it should return invalid values', () => {
        expect(calc.divisiton('test', 2)).toEqual('invalid values');
        expect(calc.divisiton(10, '10')).toEqual('invalid values');
    })


    test('given two strings it should return invalid values', () => {
        expect(calc.divisiton('test', '2')).toEqual('invalid values');
    })


    test('given two numbers it should avoid division by zerp', () => {
        expect(calc.divisiton(10, 0)).toEqual('invalid values');
        expect(calc.divisiton(313123, 0)).toEqual('invalid values');
    })
});