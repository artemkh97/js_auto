import { sum } from '../functions/sum';

test('My first test', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});

describe('Test sum function', () => {
    test('should return sum of 2 values', () => {
        expect(sum(1, 2)).toBe(3);
      });

    test('should return correct value', () => {
        expect(sum(3, 4)).toEqual(7)
    })

    test('this test will fail', () => {
        expect(sum(0.1, 0.2)).toBe(0.3)
    })
})


test('toEqual with arrays', () => {
    expect([11, 19, 5]).toEqual([11, 19]);
    expect([11, 19, 5]).toContain(11);
});