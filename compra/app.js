const cards = document.getElementById("cards")
const items = document.getElementById("items")
const footer = document.getElementById("footer")
const fragment = new DocumentFragment()
let carrito = {}

/// eventos
document.addEventListener('DOMContentLoaded', e => { 
  traerApi() 
  if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
    pintarCarrito()
  }
});
cards.addEventListener("click", e =>{
  detectarCarrito(e)
})
items.addEventListener("click", e=>{
  btnAccion(e)
})
//funciones

const traerApi = async () => {
  try {
    const res = await fetch('./api.json')
    const data = await res.json()
    pintarProductos(data)
    //console.log(data)
  } catch (error) {
    console.log(error)
  }
}
const pintarProductos = data =>{
  
  
  data.forEach(producto => {
    const templateCards = document.getElementById("template-card").content
    templateCards.querySelector("h5").textContent = producto.nombre
    templateCards.querySelector("p").textContent = producto.precio
    templateCards.querySelector("img").src = producto.url
    templateCards.querySelector('button').dataset.id = producto.id

    var clone = templateCards.cloneNode(true)
    fragment.appendChild(clone)
  });
  cards.appendChild(fragment)
}

const detectarCarrito = (e) =>{
  //console.log(e.target.classList.contains("btn-primary")) 
  if(e.target.classList.contains("btn-primary")){
    agregarCarrito(e.target.parentElement)
    //console.log(e.target.parentElement)
  }
  e.stopPropagation()
}

const agregarCarrito  = (objeto) => {
  //console.log(objeto)
  const producto = {
    id: objeto.querySelector("button").dataset.id,
    nombre: objeto.querySelector("h5").textContent,
    precio: objeto.querySelector("p").textContent,
    cantidad: 1
  }
  if(carrito.hasOwnProperty(producto.id) ){
    producto.cantidad = carrito[producto.id].cantidad + 1
    
  }
  carrito[producto.id] = {... producto}
  pintarCarrito()
  //console.log(producto)
}
const pintarCarrito = () => {
  console.log(carrito)
  items.innerHTML = ""
  const templateCarrito = document.getElementById("template-carrito").content
  Object.values(carrito).forEach(producto => {
    items.innerHTML = ""
    templateCarrito.querySelector("th").textContent = producto.id
    templateCarrito.querySelectorAll("td")[0].textContent = producto.nombre
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad
    templateCarrito.querySelector('.btn-info').dataset.id = producto.id
    templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
    templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio
    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
  })
  items.appendChild(fragment)
  pintarFotter()

  localStorage.setItem("carrito", JSON.stringify(carrito)) //guardamos en local lo del carrito
}
const pintarFotter = () =>{
  footer.innerHTML =``
  const templateFotter = document.getElementById("template-footer").content
  if(Object.keys(carrito).length ===0){
    footer.innerHTML =`<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
    return
  }
  const nCantidad = Object.values(carrito).reduce((acc,{cantidad})=>acc + cantidad, 0)
  const nPrecio = Object.values(carrito).reduce((acc,{cantidad, precio})=>acc + cantidad * precio, 0)
  templateFotter.querySelectorAll("td")[0].textContent = nCantidad
  templateFotter.querySelector("span").textContent = nPrecio

  const clone = templateFotter.cloneNode(true)
  fragment.appendChild(clone)
  footer.appendChild(fragment)
  const vaciar = document.getElementById("vaciar-carrito")
  vaciar.addEventListener("click", () =>{
    carrito = {}
    pintarCarrito()
  })
}
const btnAccion = e =>{
  console.log(e.target)
  // Accion de aumentar
  if(e.target.classList.contains("btn-info")){
    const producto = carrito[e.target.dataset.id]
    producto.cantidad = carrito[e.target.dataset.id].cantidad +1
    carrito[e.target.dataset.id]= {...producto}
    pintarCarrito()
  }
  if(e.target.classList.contains("btn-danger")){
    const producto = carrito[e.target.dataset.id]
    producto.cantidad = carrito[e.target.dataset.id].cantidad -1
    carrito[e.target.dataset.id]= {...producto}
    pintarCarrito()
    if(producto.cantidad == 0){
      delete carrito[e.target.dataset.id]
      pintarCarrito()
    }
  }
  e.stopPropagation()
}

