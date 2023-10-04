function returnSomething(){ // create a new function
    return 5; // return the number 5
}

const value = returnSomething() // call the function, and store the value

console.log(value)

function convertCelciusToFahrenheit(celcius){
    const temperatureInfahrenheit = celcius * (9/5)  + 32
    return temperatureInfahrenheit
}



// call the function
console.log(convertCelciusToFahrenheit(32)+ '°F')
