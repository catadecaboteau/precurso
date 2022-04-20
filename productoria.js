function productoria (x) {
    let acumulador = 1
    for (let i = 0; i<x.length; i++) {
    acumulador = acumulador * x[i]
    }
    return acumulador
}
console.log (productoria([1,2,7]))