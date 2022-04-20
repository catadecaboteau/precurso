let premios = ["Oro","Plata","Bronce","Seguí Participando","Seguí Participando"]

function medallaSegunPuesto (puesto){
 if(puesto<4){
return premios [puesto-1]
 } else {
        return "Seguí Participando";
    } 
}

console.log(medallaSegunPuesto(2))