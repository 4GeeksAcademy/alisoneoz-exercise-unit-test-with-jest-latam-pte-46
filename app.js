 // Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

//console.log("euro a dolar debe ser 10.7 -->",fromEuroToDollar(10))


const fromDollarToYen = (dolar) => {
    let yen = (dolar / 1.07) *156.5
    return yen
    
}
//console.log("dolar a yen debe ser 14626.1-->",fromDollarToYen(100))

const fromYenToPound = (yen) => {
    let pound = (yen / 156.5 )*0.87
    return pound
}

//console.log("yen a pound son 0,55 -->",fromYenToPound(100))

 const sum = (a, b)=>{
     return a + b
 }

 console.log(sum(3,6))

 module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }