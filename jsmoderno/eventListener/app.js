// const btnAumentar = document.querySelector('.btn-info')
// const btnDisminuir =document.querySelector('.btn-danger')
// const span = document.getElementById('span')
let contador = 0


// btnAumentar.addEventListener("click", () => {
//   contador ++
//   span.textContent = contador
// })
// btnDisminuir.addEventListener("click", () => {
//   contador --
//   span.textContent = contador
// })

const container = document.querySelector('.container')
container.addEventListener("click", (e) =>{
  //console.log(e.target)
  if(e.target.classList.contains("btn-info")){
    contador++
    span.textContent = contador
  }if(e.target.classList.contains("btn-danger")){
    contador--
    span.textContent = contador
  }
  e.stopPropagation()
})