//Array
const gondolaArriba = ["cafe","Chocolate","Azucar"];
const gondolaMedio = [1,2,3];
const gondolaAbajo = [4,5,6];

const gondola = [gondolaAbajo,gondolaMedio,gondolaArriba[2]];

//onsole.log(gondola);

const gondola1 = [
["cafe","Chocolate","Azucar"],
[1,2,3],
[4,5,6],
];

//console.log(gondola1[0][2])  
//console.log(gondola1[2][2])

for(let i = 0; i < gondola1.length; i++){
    //console.log(gondola1[i])
    for(let j = 0; j < gondola1[i].length; j++){
        //console.log(gondola1[i][j], "i " + i, "j "+ j);
    }
}

console.log(gondola1.flat()); //Para ver todos elementos de los array en una sola dimension.
