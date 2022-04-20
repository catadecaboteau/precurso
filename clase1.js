// number
let peso = 25
let peso2 = 25.5
let suma = peso + peso2
console.log(suma)

// string
let cadenaDeTexto = 'Este es un ejemplo';
let otraCadenaDeTexto = 10;
console.log(cadenaDeTexto + ' ' + otraCadenaDeTexto)

// comparación
let numeroA = 10;
let numeroC = "10";

//  simple
console.log(numeroA == numeroC)
//estricto
console.log(numeroA === numeroC)

// funciones
function sumar (a, b) {
    return a + b;
}

function sumar2 (c,d) {
    console.log (c,d);
}

let resultado = sumar(100,500);
let resultado2 = sumar2(200,50);

console.log("Este es el resultdo de la funcion sumar: ", resultado)
console.log("este es el resultado de la funcion sumar2: ", resultado2)

//funciones2

function saludar (nombre,a,b){
    return "Hola mi nombre es "+ nombre + " y mi numero favorito es "+ sumar(a,b)
}
console.log(saludar("Cata",10,100))


function escribirCartelito(titulo,nombre,apellido) {
    return (titulo+" "+nombre+" "+" "+apellido)
}


function signo(numero) {
    if (numero > 0){
        return 1;
    } else if (numero == 0) {
        return 0;
    } else {
        return -1;
    }
 }


