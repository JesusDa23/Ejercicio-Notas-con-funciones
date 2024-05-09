function contraseñaValida (){
    contraseña = prompt(`Por favor ingrese su contraseña: `)
    if (contraseña === "2Fj(jjbFsuj" || contraseña === "eoZiugBf&g9"){
        return true
    }
    else {
        return false
    }
}


console.log(contraseñaValida())