
class Pelicula {

  constructor(nombre, id){
    this.nombre = nombre
    this.id =id
  }
  reproducir() {
    return `Hola estas reproduciendo ${this.nombre}`
  }
}
class Serie extends Pelicula{ // el extends se usa para extender las propiedas y las funciones de la clase pelicula
  
  constructor(nombre, id, cap){
    super(nombre,id) //extiende las propiedas de pelicula
    this.cap = cap
  }

  reproducirCapitulo(){
    return `reproduciendo capitulo ${this.cap} `
  }
}
const peliculaUno= new Pelicula('Rapidos', 01)
const peliculaDos = new Pelicula("Harry", 3)

console.log(peliculaUno.reproducir())

const serieUNo = new Serie('dexter', 4, "el misterio del principe")
console.log(serieUNo.reproducirCapitulo())