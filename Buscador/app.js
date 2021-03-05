const formulario = document.getElementById("formulario")
const boton = document.getElementById("boton")
const resultado = document.getElementById("resultados")
const productos = [
  {nombre:"platanos", valor: 100},
  {nombre:"sandia", valor: 100},
  {nombre:"pera", valor: 100},
  {nombre:"piña", valor: 100}
]
const filtrar = () =>{
  resultado.innerHTML= ""
  const texto = formulario.value.toLowerCase() //la funcion value y lower para que las entradas sean las mismas
  for(let producto of productos){
    let nombre = producto.nombre.toLocaleLowerCase()
    if (nombre.indexOf(texto) !== -1){ //indezof devuelve -1 cuando no encuentra nada 
      resultado.innerHTML += `<li>Nombre: ${producto.nombre} -- ${producto.valor}</li>`
    }
  }
  if(resultado.innerHTML === ""){
    resultado.innerHTML += `<li>Producto no encontrado</li>`
  }

}

boton.addEventListener("click", filtrar)
formulario.addEventListener("keyup", filtrar)

filtrar()
