function calcularImpuestos (edad,ingresos){
    if (edad > 18 && ingresos >= 1000 ){
        return (ingresos * 40)/100
    }
    else {
        return 0
    }
}


console.log(calcularImpuestos(19, 1000))