class Notas {
    // Atributos 
    umbral = 3.5;
    notas = [];

    constructor(listaDeNotas = 9 ){
        this.notas = listaDeNotas;
    }
}

const notas = [3.2, 4.5,2.5];
const notasMatematicas = new Notas(notas);
const notasLogica = new Notas(notas);

console.log(notasMatematicas)
console.log(notasLogica)