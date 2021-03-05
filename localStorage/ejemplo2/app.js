
const boton = document.getElementById("btnBotones");
const container = document.getElementById("botones");
const fondo = document.getElementById("fondo");


(()=>{

  btnBotones.addEventListener("click", agregarBotones)
})();
const iniciar = () =>{
  const color =localStorage.getItem('colorFondo')
  console.log(color)
  if (color == null){
    fondo.className = "bg-dark"
  }else{
    fondo.className = color
  }
}

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
  var colorBoton = e.target.classList[1] //target para ver a donde apunta al evento 
  //class list para conocer la clase del obejeto que tiene el evento
  colorFondo(colorBoton)
}
const colorFondo = (colorBoton) => {
  switch( colorBoton){
    case ('btn-primary'):
      fondo.className = 'bg-primary'
      localStorage.setItem('colorFondo','bg-primary')
      break;
    case ('btn-secondary'):
      fondo.className = 'bg-secondary'
      localStorage.setItem('colorFondo','bg-secondary')
      break;
    case ('btn-danger'):
    fondo.className = 'bg-danger'
    localStorage.setItem('colorFondo','bg-danger')
      break;
    case ('btn-success'):
      fondo.className = 'bg-success'
    localStorage.setItem('colorFondo','bg-success')
      break;
    case ('btn-warning'):
      fondo.className = 'bg-warning'
    localStorage.setItem('colorFondo','bg-warning')
      break;
    
  }
}
iniciar()