//Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

let array1 = [1,2,3,4,5,6,"JesusXd"]

function imprimirArreglo (array){
    for(i = 0; i < array.length ; i++){
        console.log(array[i])
    }
}

imprimirArreglo(array1)