



const registrar = ( ) =>{
  let email = document.getElementById("email").value
  let password = document.getElementById("contraseña").value

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    verificar()
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
}

const ingresar = () =>{
  let email = document.getElementById("email2").value
  let password = document.getElementById("contraseña2").value
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
}
const pintar = (user) =>{
  var contenido = document.getElementById("contenido")

  contenido.innerHTML = `<h2>Hola Bienvenido</h2>${user.email}
  <button onclick="cerrar()">Cerrar sesion</button>`
}
const observador = () =>{
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("existe")
      var uid = user.uid;
      pintar(user)
    } else {
      console.log("no existe")
    }
  });
}
const cerrar = () =>{
  firebase.auth().signOut()
  .then(function() {
    console.log("saliendo")
  }).catch(function(error) {
    console.log("no podimos salir")
  });
  
}
const verificar = () =>{
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()
  .then(function() {
    console.log("enviando correo")
  })
  .catch(function(error) {
    // An error happened.
  });
}
observador()