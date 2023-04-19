let notas = [3,5,10,9,7,8,8,8];
notas.push(1);
notas.push(4);

let total = notas.length;

let ultimo = notas.pop();

notas.shift(); // Para sacar el primero

notas.unshift(2); // Para agregar al primero

console.log(total);

console.log(notas);

console.log(ultimo);    