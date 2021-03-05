const boton = document.getElementById("boton")
boton.addEventListener("click", llenarTabla)
const tabla = document.getElementById("res")


function llenarTabla (){
  const XHTTP = new XMLHttpRequest()
  XHTTP.open('GET', './catalogo.json', true)
  XHTTP.send()
  XHTTP.onreadystatechange = function() {
    if (this.status == 200 && this.readyState == 4){
      let datos = JSON.parse(this.responseText)
      pintarHtml(datos)
    }
  }
}

const pintarHtml = (datos) => {
  tabla.innerHTML =''
  for(let item of datos){
    
    tabla.innerHTML += `<tr>
    <td> ${item.titulo} </td>
    <td> ${item.artista} </td>
  </tr>`

  }
}