const dolar = document.getElementById("dolar")
const uf= document.getElementById("uf")

dolar.addEventListener("click", function(){
  obtenerDatos('dolar')
})
uf.addEventListener("click", function(){
  obtenerDatos('uf')
})
const obtenerDatos = (valor) => {

  let url = `https://mindicador.cl/api/${valor}`
  const XHTTP = new XMLHttpRequest()
  XHTTP.open('GET', url,  true)
  XHTTP.send()
  XHTTP.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4){
      let datos = JSON.parse(this.responseText)
      pintarHtml(datos.serie)
    }
}
}
const pintarHtml = (datos) => {
  let tabla =document.getElementById("respuesta")
  tabla.innerHTML = ''
  let i = 0
  for (item of datos){
    i++
    if(i > 10){
      break
    }
    tabla.innerHTML += `
    <li>
            <strong>Fecha:</strong> ${item.fecha.substr(0,10)} -----  
            <strong>Valor:</strong> ${item.valor}
          </li>
    `
  }
}