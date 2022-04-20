function masMenos(array) {
    let positivos = 0
    let ceros = 0
    let negativos = 0

    for (let i=0; i<array.length; i++) {
    if (array[i]>0) {
    positivos = (positivos+=1)
    ceros = ceros
    negativos = negativos
    }
    else if (array[i]==0) {
    positivos = positivos
    ceros = (ceros+=1)
    negativos = negativos
    }
    else if (array[i]<0) {
    positivos = positivos
    ceros = ceros
    negativos = (negativos+=1)
    }
}
    return [((positivos)/array.length),((ceros)/array.length),((negativos)/array.length)];
}
console.log(masMenos([1]))
