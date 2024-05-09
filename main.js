let estudiantes = [] 

function nombres (){
    let opcionEstudiantes;
    do {
        const estudiante = prompt(`Ingrese el nombre del estudiante: `) 
        let listaMaterias = []
        materia(listaMaterias)
        estudiantes.push({
            nombre: estudiante,
            materias: listaMaterias });

        opcionEstudiantes = prompt(`Desea Ingresar otro estudiante S/N: `);
    }
    
    while (opcionEstudiantes.toLowerCase() === "s")
}

function materia (listaMaterias) {  
    let opcionMateria;
    do {
        let notas = notas1()
        const materia = prompt(`Por favor ingrese su materia: `);
        listaMaterias.push({
            nombre: materia,
            calificaciones: notas,
            promedio: promedionotas(notas)
        })
    
        opcionMateria = prompt(`Desea Ingresar otra materia S/N: `);
    }
    while (opcionMateria.toLowerCase() === `s`)
}

function notas1 (){
    let notas = []
    let opcionNotas;
    do {
        const nota = parseFloat(prompt(`Por favor ingrese la nota: `))
        notas.push(nota)
        opcionNotas = prompt(`Desea Ingresar otra nota S/N: `)
    }
    while(opcionNotas.toLowerCase() === `s`)
    return notas;
}

function promedionotas (notas){
    const total = notas.reduce((acumulador, nota ) => acumulador + nota, 0)
    return total / notas.length;
}

nombres()
console.log(estudiantes)
