function sumaDeLosParesDel0Al(x) {
    let acumulador = 0
    for (let i=0; i<=x;i++){
        if (i%2==0)
    acumulador +=i
    }
    return acumulador
}
console.log (sumaDeLosParesDel0Al(4))