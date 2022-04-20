function asientosDisponibles (array,numero) {
    if (array.indexOf(numero)>=0){
        return ("Felicitaciones, el asiento número"+" "+numero+" "+"está disponible")
    }
    else if (array.indexOf(numero)==-1) {
        return ("Lo sentimos, el asiento número"+" "+numero+" "+"está ocupado, pero aún quedan"+" "+(array.length)+" "+"asientos disponibles")
    }
}
console.log(asientosDisponibles([3, 15, 18, 25], 78))