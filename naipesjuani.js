function naipes(tipoDePalo) {
    let cartasDeUnPalo = [];
    for (let i = 1; i<=12;i++) {
    if (i!==8 && i!==9)
    cartasDeUnPalo.push (i +" "+"de"+" "+tipoDePalo)
    }
    return cartasDeUnPalo;
    }
console.log (naipes("espadas"))