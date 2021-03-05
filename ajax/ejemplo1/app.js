const boton  = document.getElementById("boton")
const respuesta = document.getElementById("respuesta")
boton.addEventListener('click', traerDatos)

function traerDatos () {
  //console.log('funcion activa')

  const XHTTP = new XMLHttpRequest()
  XHTTP.open('GET', './archivo.txt', true)
   // open para abrir entre los parametros especificamos el metodo
  // depues la ruta del archivo si es verdadero el tercer parametro es de forma asincrona

  XHTTP.send() //enviamos los datos
  XHTTP.onreadystatechange /*esperamos un cambio ye ejcutamos la funcion*/ = function (){
    if( this.readyState == 4 && this.status == 200){ // Comprobacion si todo esta funcionando
      
      console.log(this.responseText) //muestra lo que recibio
      respuesta.innerHTML = `<h4>${this.responseText}</h4>`
    }
  } 

}