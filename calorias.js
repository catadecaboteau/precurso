function caloriasDeTrote(x) {
    let acumulador = 0
    for (let i=1; i<=x;i++){
    acumulador = acumulador + (5*i)
    }
    return acumulador
}
console.log (caloriasDeTrote(2))