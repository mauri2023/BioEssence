
/*function tripleDeLaSuma(numero1,numero2){
    let resultadoDeLaSuma = numero1 + numero2;
    return triple(resultadoDeLaSuma);
}
function triple(numero){
    return numero * 3;
}

console.log(tripleDeLaSuma(10,30));

2.

function perimetro(radio) {
    let perimetro = 2 * 3.14 * radio;
    return perimetro;
  }
  
  function area(radio) {
    let area = 3.14 * (radio * radio);
    return area;
  }
  
  let radio = 5;
  
  console.log("Perímetro: " + perimetro(radio));
  console.log("Área: " + area(radio))

  */

  /*
  
  function longitudNombreCompleto(nombre,apellido){
    let nombreCompleto = nombre + " " + apellido;
    return nombreCompleto.length;
}  

console.log(longitudNombreCompleto("Federico","Naccarato"));

*/

/*
function esMayor(unNumero){
    if(unNumero >= 5){
        return true;
    }
    else{
        return false;   
    }
}
console.log(esMayor(4));

// 
function finDeSemana(dia)
{
switch(dia)
{	
		case "viernes":
		console.log("buen finde");
		break;
			case "lunes":
			console.log("buena semana");
			break;
				default:
				console.log("buen dia");
	}
    }
    finDeSemana("viernes");
	finDeSemana("lunes");
	finDeSemana("jueves");
  
  */

  /*  let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}
*/
function tengoClases(dia) {
	switch (dia) {
      case "lunes":
        return("tenés clases");
        break;
      case "miercoles":
         return("tenés clases");
        break;
      case "viernes":
         return("tenés clases");
        break;
        default:
        return("no tenes clases");
	}
}

console.log(tengoClases("miercoles"));