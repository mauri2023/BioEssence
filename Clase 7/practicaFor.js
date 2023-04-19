function noParesDeContarImparesHasta(numero){
  const impares = [];
  for(let i = 1; i <= numero; i++){
    if(i % 2 !== 0){
      impares.push(i);
    }
  }
  return impares;
}

console.log(noParesDeContarImparesHasta(10));


