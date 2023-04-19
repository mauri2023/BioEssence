/*  caso con swicht

const edad = 5;

switch(edad)
{
    case 5:
    console.log("tiene 5");
    break;
        case 10:
        console.log("tiene 10");
        break;
            case 15:
            console.log("tiene 15");
            break;
                default:
                console.log("tiene " + edad + "años");
} */


/*
if(edad >= 18)
{
    console.log("Es mayor de edad");
}
else
{
    console.log("Es menor de edad");    
}
*/

let pagoMes = 3000;
let consumoKwh = 450;

let consumoActual = consumoKwh > 300 ? (pagoMes + (pagoMes * 0.2)) : pagoMes;

console.log("Debido a que su hogar tuvo un consumo de " + consumoKwh +
    "KWH, en base al ajuste tarifario hogares con consumo mayor a 300 KWH pagaram 20% mas, pagando u ntotal de $"
    + consumoActual)
