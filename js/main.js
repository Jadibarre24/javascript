function datosPacientes(){
    let nombre  = (prompt("Cual es tu nombre"))
    let edad  = Number (prompt("Que edad tienes " ))
    if((nombre == "") || (edad == "" ))
    alert("Datos incorrectos.")
    else if (edad <= 18)
    alert("ingrese edad.")
    else
    alert ("bienvenido " + nombre)
}
function detalles() {
    const ubicacion =  ["Cabeza" , "Estomago" , "Musculos" ];
    confirm (ubicacion [0])
    if (ubicacion [0]===true)
    alert("Tienes atencion de prioridad media. espere su llamado")
    else if (ubicacion [0]=== false)
    confirm (ubicacion [1])
    else if (ubicacion [1]===true)
    alert("Tienes atencion de prioridad alta. espere su llamado")
    else if (ubicacion [1]===false)
    confirm (ubicacion [2])
    else if (ubicacion [2]===true)
    alert("Tienes atencion de prioridad baja. espere su llamado")
    else if (ubicacion [2]===false)
    alert ("Espere en la sala.")
else{
    alert("El medico en un momento lo atendera. ")    
} 
}
alert ("Bienvenido")
datosPacientes()
let sintomas = confirm ("Tiene dolor")
if (sintomas=== true)
alert("En que parte del cuerpo")
else if(sintomas === false )
alert("Error de confirmacion ")
else(
    alert("En que parte del cuerpo le duele ")
    )
detalles()
 



