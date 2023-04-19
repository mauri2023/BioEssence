const sumar = (...numeros) => {      //...numeros : es el array 
    const total = numeros.reduce((total,actual) => total + actual ,0)       //Es un arrowFunction 
    console.log(total);
}

sumar(2,5,3,1,2);
sumar(2,2);
sumar();