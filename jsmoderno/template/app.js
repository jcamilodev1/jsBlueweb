let lista = document.getElementById("lista-dinamica")
const arrayItem = ["item 1", "item 2", "item 3"];
const template = document.getElementById("template").content
const fragmento = new DocumentFragment()
//console.log(template)

arrayItem.forEach(item =>{
  template.querySelector('.list .text-danger').textContent = item
  const clone = template.cloneNode(true)
  fragmento.appendChild(clone)
  
})
lista.appendChild(fragmento)