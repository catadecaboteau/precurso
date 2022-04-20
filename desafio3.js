function reporteDePasajeros(cantidadEstaciones){
    let cantidadPasajeros = 200
    let array = []
    for (let i=0; i<=cantidadEstaciones; i++)
    if (i==0) {
    cantidadPasajeros = cantidadPasajeros 
    array.push("En la estación"+" "+(i)+" hay "+cantidadPasajeros+" pasajeros arriba del tren")
    }
    else if (i>0 && i<5){
    cantidadPasajeros = (cantidadPasajeros +=20)
    array.push("En la estación"+" "+(i)+" hay "+cantidadPasajeros+" pasajeros arriba del tren")
    }
    else if (i==5){
    cantidadPasajeros = (cantidadPasajeros +=40)
    array.push("En la estación "+(i)+" hay "+cantidadPasajeros+ " " +"pasajeros arriba del tren")
    } 
    return array
}
console.log(reporteDePasajeros(2))