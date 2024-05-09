let estudiantes = [] 
let opcionEstudiantes;

do {
    
    const estudiante = prompt(`Ingrese el nombre del estudiante: `)
    let listaMaterias = []
    let opcionMateria;

    do {    
    const materia = prompt(`Por favor ingrese su materia: `);
    let notas = []
    let opcionNotas;

    do {
        const nota = parseFloat(prompt(`Por favor ingrese la nota: `))
        notas.push(nota)
        opcionNotas = prompt(`Desea Ingresar otra nota S/N: `)
    }
    while(opcionNotas.toLowerCase() === `s`)

    listaMaterias.push({
        nombre: materia,
        calificaciones: notas,
        promedio: promedionotas(notas)
    })

    opcionMateria = prompt(`Desea Ingresar otra materia S/N: `);
}
    while ( opcionMateria.toLowerCase() === `s`);

estudiantes.push({
    nombre: estudiante,
    materias: listaMaterias
});

opcionEstudiantes = prompt(`Desea Ingresar otro estudiante S/N: `)
}
    while (opcionEstudiantes.toLowerCase() === "s")

console.log(estudiantes)

function promedionotas (notas){
    const total = notas.reduce((acumulador, nota ) => acumulador + nota, 0)
    return total / notas.length;
}




