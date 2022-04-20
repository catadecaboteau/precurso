function alturaArbolUtopico(ciclos) {
    let alturaResultante=1
    for (let i=0; i<=ciclos; i++) {
    if (i==0)
    alturaResultante = alturaResultante
    else if (i%2==0) 
    alturaResultante = alturaResultante*2
    else if (i%2!=0) 
    alturaResultante = alturaResultante +1
    } 
    return alturaResultante   
}
console.log(alturaArbolUtopico(4))