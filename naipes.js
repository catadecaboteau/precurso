function naipes (tipoDePalo) {
    let array =[]
        for (let i=1; i<=12; i++) {
    if (i!==8 && i!==9)
    array = array + " " + [(i)+" de "+tipoDePalo]
        }
        return array
    }
console.log (naipes("espadas"))