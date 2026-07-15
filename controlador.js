// zona de codigo principal
/*function hacer_bucle(){
    for (let i = 0; i < 10000; i++) {
    console.log(i);
    }
}
async function hacer_saludo(){
    const info= await hacer_bucle();
    console.log("hola mundo...");

}
const info_cliente= {
    nombre: "Juan",
    apellido: "Perez",
    roll: "Administrador"
}
const boton_enviar= document.getElementById("Registrar");
console.log(boton_enviar);

boton_enviar.addEventListener("click", ()=>{
    const info_storage= localStorage.getItem("cliente");
    console.log(info_storage);

    localStorage.setItem("info_cliente", JSON.stringify([info_cliente]));
    localStorage.setItem("info_token", JSON.stringify([]));
    localStorage.setItem("info_api", JSON.stringify([]));
    localStorage.setItem("info_producto", JSON.stringify([]));

    hacer_saludo();
});*/
import ClienteModelo from "./cliente_modelo.js";
const boton_registrar= document.getElementById("boton_Registrar");
boton_registrar.addEventListener("click",function(){
    const nombre= document.querySelector("#nombre").value;
    if(nombre.lenght<3){ 
        alert("El nombre debe tener al menos 3 caracteres");
        return;
    }
    const apellido= document.querySelector("#apellido").value;
    
    const rol= document.querySelector("#rol").value;
    const cliente= new ClienteModelo(nombre, apellido, rol);
    console.log(cliente);

});

/* una funcion callback es una funcion que se pasa como argumento a otra funcion y se ejecuta despues de que la funcion principal ha terminado su ejecucion. */
