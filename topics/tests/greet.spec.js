const greet = require('../functions/greet');

describe('Test celsius function', () => {
    
    test('should return correct value', () => {
        expect(greet('Name')).toBe('Hello, Name')
    })
})