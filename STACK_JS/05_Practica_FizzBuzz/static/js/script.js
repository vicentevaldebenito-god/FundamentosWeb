console.log(`Conexion exitosa`)

// FizzBuzz
// Si un número es divisible por 3, muestra “Fizz”.
// Si un número es divisible por 5, muestra “Buzz”.
// Si un número es divisible por ambos 3 y 5, muestra “FizzBuzz”.
// Si no cumple ninguna de estas condiciones, muestra el número tal cual.

function FizzBuzz() {
    for (let counter = 1; counter <= 100; counter++)
        if (counter % 5 === 0 && counter % 3 === 0) {
            alert(`${counter}
            \nFizzBuzz`)
        } else if (counter % 3 === 0) {
            alert(`${counter}
            \nFizz`)
        }
        else if (counter % 5 === 0) {
            alert(`${counter}
            \nBuzz`)
        }
    else{
    alert(`${counter}`)
}
}

