test('Adds 3 + 4 to equal 7', ()=>{
    const {sum }= require('./app')
    //calling the function passing 2 arguments
    let total = sum (3,4);

    //We expect the sum of those two nums to be 7
    expect(total).toBe(7)
})

//Test 1
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// test 2

test("One dollar should be 145,54 yen", ()=>{
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1)

    const expected = (1 / 1.07 ) * 156.5;

    expect(yen).toBe(expected)

})

// test 3

test("One Yen should be 0.0055 pounds", ()=>{
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(1)

    const conversion = (1 / 156.5 ) * 0.87;

    const expected = conversion;

    expect(fromYenToPound(1)).toBe(expected)

})