// Medotod filter . Retorna un elemento 

const usuarios = [
    {
        name: "Fede1",
        edad: 33,
        vivo: true,
        id:1
    },
    {
        name: "Fede2",
        edad: 34,
        vivo: true,
        id:2
    },
    {
        name: "Fede3",
        edad: 35,
        vivo: true,
        id:3
    },
]

const usuarioBuscado = usuarios.find(function(usuarioABuscar){
    return usuarioABuscar.id === 3;
})

console.log(usuarioBuscado);