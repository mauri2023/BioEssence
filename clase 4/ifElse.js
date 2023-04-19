let perfil = " ";

if (perfil === "administrador" || perfil === "ADMINISTRADOR" || perfil === "Administrador") {
    console.log("Usted tiene todos los provilegios de uso del sistema");
}
else if (perfil == "Asistente" || perfil === "ASISTENTE" || perfil === "asistente") {
    console.log("Uste solo tiene permiso de consultar, registrar y modificar datos");
}
else if (perfil == "Invitado" || perfil === "invitado" || perfil === "INVITADO") {
    console.log("Usted solo tiene permiso de consultar datos");
}
else if (perfil == " ") {
    console.log("debe especificar nombre de usuario");
}
else {
    console.log("Debe especificar un perfil valido");
}