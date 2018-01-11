const kelvin = 294; // 294 kelvin temperature for conversion
const celsius = kelvin - 273; // conversion to celsius
let Fahrenheit = celsius * (9/5) + 32; //conversion to Fahrenheit
Fahrenheit = Math.floor(Fahrenheit); //rounding down the decimal value of fahrenheit
console.log(`The temperature is ${Fahrenheit}.`) //print the temperature in fahrenheit
 kelvin = prompt('What is the Kelvin temperature today?');
