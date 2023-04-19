function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}

/* console.log(gananciaTotal([]));
console.log(gananciaTotal([100]));
console.log(gananciaTotal([100, 2]));
console.log(gananciaTotal([2, 10, -20]));
console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]));
*/

function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo[i] > 0) {
            cantidad++;
        }
    }
    return cantidad;
}

console.log(cantidadDeMesesConGanancia([2,3,5,6,7,-5,3]));
