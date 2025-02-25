const math = require('../math');


test('soma 2 + 3 igual a 5', () => { 
expect(math.add(2, 3)).toBe(5); 
}); 

test('subtração 2 - 2 igual a 0', () => { 
expect(math.subtract(2, 2)).toBe(0); 
}); 

test('multiplicação 2 * 2 igual a 4', () => { 
    expect(math.multiply(2, 2)).toBe(4); 
}); 

test('divisão 2 / 2 igual a 1', () => { 
expect(math.divide(2, 2)).toBe(1); 
}); 