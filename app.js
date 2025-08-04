// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Definimos la variable numeroAmigos y la inicializamos en 0,asi mismo creamos una lista vacia
let numeroAmigos=0;
let listaAmigosCompleta=[];

//Creamos una funcion para asignar texto a las etiquetas usando su ID
function asignarTextoId(id,texto){
    let elementoHTML=document.querySelector(`#${id}`);
    elementoHTML.innerHTML=texto;
    return;
}

//Funcion para limpiar automaticamente el campo de entrada
function limpiarCampo(){
    document.getElementById("amigo").value="";
    return;
}

//Funcion para agregar amigos a la lista 
function agregarAmigo(){ 
    //Tomamos el elemento que esta en el campo vacio y lo almacenamos en la variable usuario
    let usuario = document.getElementById("amigo").value;

    //Si el campo esta vacio enviamos una alerta
    if (usuario == ""){
        alert("Por favor ingrese un nombre");
        return;
    }else{
        //Si no, agregamos el elemento del campo a la lista 
        listaAmigosCompleta.push(usuario);

        //Sumamos 1 al numero de amigos ingresados
        numeroAmigos += 1;
        
        //Llamamos a la funcion asignarTextoId para mostrar el estado de la lista actual
        asignarTextoId("listaAmigos",`Amigos agregados: [${listaAmigosCompleta}]`);

        //LLamamos a la funcion limpiarCampo para vaciar la celda automaticamente
        limpiarCampo();
        return;
    }
}

//Funcion para sortear el amigo secreto
function sortearAmigo(){
    //Si el numero de amigos actual es igual a 0 mostramos una alerta
    if (numeroAmigos === 0){
        alert("No hay amigos para sortear");
        return;
    }else{
        //Si no, usamos una funcion random para sacar un indice aleatorio de la lista
        indiceLista=Math.floor(Math.random() * numeroAmigos);

        //Almacenamos el elemento del indice sorteado en la variable amigoSecreto
        amigoSecreto=listaAmigosCompleta[indiceLista];

        //Eliminamos el elemento sorteado de la lista usando su indice
        listaAmigosCompleta.splice(indiceLista,1);

        //disminuimos en 1 el numero de amigos
        numeroAmigos -=1;

        //Llamamos a la funcion asignarTextoId para mostrar la lista actual de la lista 
        asignarTextoId("listaAmigos",`Amigos agregados: [${listaAmigosCompleta}]`);

        //Llamamos a la funcion asignarTextoId para mostrar el amigo secreto sorteado
        asignarTextoId("resultado",`Tu amigo secreto es: ${amigoSecreto}`);
        return;
    }
}