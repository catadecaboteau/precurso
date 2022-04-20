
function sumatoriaBajoImporte(gananciasPeriodo) {
    let acumulador = 0;
    for (let i = 0; i < gananciasPeriodo.length;i++) {
  if (gananciasPeriodo[i]<=1000 && gananciasPeriodo[i]>0)
  acumulador = acumulador + gananciasPeriodo[i]
    }
    return acumulador;
  }
  console.log(sumatoriaBajoImporte([1,2]))