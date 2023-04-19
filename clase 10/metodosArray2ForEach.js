const nombres = ["Nacho", "Jose", "Lucas"];

nombres.forEach(function (nombreActual) {    //foerEach recorre todo el array - lo que antes se hacia con el i
    console.log(nombreActual);
}
);

const numeros1 = [1, 2, 3, 4, 5];
numeros1.forEach(function (numeroActual) {
    const dobleDelNumeroActual = numeroActual * 2;
    console.log(dobleDelNumeroActual);
}
);

const numeros2 = [1, 2, 3, 4, 5];
numeros2.forEach(numeroActual => {
    const dobleDelNumeroActual = numeroActual * 2;
    console.log(dobleDelNumeroActual)
}
);




