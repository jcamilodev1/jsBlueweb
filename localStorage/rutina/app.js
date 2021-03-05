// variables
const formulario = document.querySelector('#formulario');
const lista = document.getElementById("lista")
let actividades = []

//funciones
const crearItems = ( actividad ) => {

  let item = {
    actividad:actividad,
    estado: false
  }
  actividades.push(item)
  //console.log(actividades)
  guardarDB(actividades)
}

const guardarDB = (array) =>{
  localStorage.setItem("actividades", JSON.stringify(array)) // conveirtye un objeto en una cadena de texto
  pintarDb()
}
const pintarDb = () =>{
  lista.innerHTML = ""
  actividades = JSON.parse( localStorage.getItem("actividades"))

  if (actividades == null){
    actividades = []
  }else{
    actividades.forEach(element => {
    lista.innerHTML += `
    <div class="alert ${!element.estado ? 'alert-danger' : 'alert-success' }" role="alert">
      <i class="material-icons me-3 float-start" >fitness_center</i>
    <strong>${element.actividad}</strong> -- ${element.estado}
    <span class="float-end">
      <span class="material-icons">check</span>
        <span class="material-icons">delete</span>
    </span>
    </div>`
    });
  }
  
  
}
const elminarDb = (texto)=>{
  let indexArray 
  actividades.forEach((item, index) =>{
    //console.log(item.actividad)
    if( item.actividad === texto){
      indexArray = index
    }
    
  })
  actividades.splice(indexArray,1)
  guardarDB(actividades)
}
const cambiarDb = (texto) =>{
  let indexArray = actividades.findIndex((item) => item.actividad == texto)

  actividades[indexArray].estado = true
  guardarDB(actividades)
}
//eventos

formulario.addEventListener('submit', (e) => {

  e.preventDefault();
  let actividad = document.querySelector('#actividad').value;
  crearItems(actividad)
  formulario.reset()
});

document.addEventListener("DOMContentLoaded", pintarDb)


lista.addEventListener("click", (e)=>{
  e.preventDefault()
  let texto = e.composedPath()[2].childNodes[3].innerHTML
  if( e.target.innerHTML == "check" ||  e.target.innerHTML == "delete"){
    if(e.target.innerHTML == "check"){
      cambiarDb(texto)
    }
    if(e.target.innerHTML == "delete"){
      elminarDb(texto)
      console.log(texto)
    }
  }
  
})