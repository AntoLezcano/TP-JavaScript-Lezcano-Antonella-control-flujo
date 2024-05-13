// programa que itere del 1a 15. si es multiplo de 3 se muestra fizz, si es de 5 se muestra buzz, si es de ambos muestra FizzBuzz o sino solo el numero
let i = 1

do{
    if(i % 3 == 0 && i % 5 == 0){
        console.log( i + " FizzBuzz")
    } else if (i % 3 == 0){
        console.log(i + " Fizz")
    } else if (i % 5 == 0){
        console.log (i+ " Buzz")
    } else {
        console.log (i)
    }
    i++
} while (i <= 15);