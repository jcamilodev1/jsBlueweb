

const boton = document.getElementById("btnBotones");
const container = document.getElementById("botones");
const fondo = document.getElementById("fondo");

(()=>{

  btnBotones.addEventListener("click", agregarBotones)

})();

function agregarBotones (e){
  
  e.preventDefault()
  container.innerHTML =`<button class="btn btn-primary" >primary</button>
  <button class="btn btn-secondary">secondary</button>
  <button class="btn btn-danger" >danger</button>
  <button class="btn btn-success" >success</button>
  <button class="btn btn-warning" >warning</button>
  `
  container.addEventListener('click',delegacion)
}

function delegacion (e){ //cuando usamos eventos pasamos un parametro
  e.preventDefault() //para prevenir que se ejecute algo
  //console.log(e.target.classList[1])
  const colorBoton = e.target.classList[1] //target para ver a donde apunta al evento 
  //class list para conocer la clase del obejeto que tiene el evento
  switch( colorBoton){
    case ('btn-primary'):
      fondo.className = 'bg-primary'
      break;
    case ('btn-secondary'):
      fondo.className = 'bg-secondary'
      break;
    case ('btn-danger'):
    fondo.className = 'bg-danger'
      break;
    case ('btn-success'):
      fondo.className = 'bg-success'
      break;
    case ('btn-warning'):
      fondo.className = 'bg-warning'
      break;
    
  }
}