const nombre = "IGNACIO"

localStorage.setItem('nombreUsuario', nombre) //agregar item

const ombre =localStorage.getItem('nombreUsuario') // para ver el item 
console.log(ombre)

localStorage.removeItem('nombreUsuario') //remueve el local storage
