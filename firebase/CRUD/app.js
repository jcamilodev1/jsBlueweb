
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCZYO7r0FW-9if0ObNkqU-_2P29QLJvIFU",
  authDomain: "crud-e3ed0.firebaseapp.com",
  projectId: "crud-e3ed0",
});

var db = firebase.firestore();

const agregarUsuario = () => {
  // agregar usuario
  let nombre = document.getElementById("nombre").value
  let apellido = document.getElementById("apellido").value
  let fecha = document.getElementById("fecha").value
  db.collection("users").add({
    first: nombre,
    last: apellido,
    born: fecha
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById("nombre").value =""
    document.getElementById("apellido").value = ""
    document.getElementById("fecha").value = ""
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  }); 
}
const pintar =() => {
  let tabla = document.getElementById("tabla")
  // leer datos
db.collection("users").onSnapshot((querySnapshot) => { // se usa onSnapshot para que escuhe y pinte en tiempo real
  tabla.innerHTML = ""
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().first}`);
      tabla.innerHTML += `<tr>
      <th scope="row">${doc.id}</th>
      <td>${doc.data().first}</td>
      <td>${doc.data().last}</td>
      <td>${doc.data().born}</td>
      <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
      <td><button class="btn btn-warning" onclick="actulizar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')">Editar</button></td>

    </tr>`
  });
});
}
const eliminar = (id) =>{
  //borrar documentos
  db.collection("users").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
}
// actulizar datos
const actulizar = (id, nombre ,apellido ,fecha) =>{
  var washingtonRef = db.collection("users").doc(id);

  document.getElementById("nombre").value = nombre
  document.getElementById("apellido").value = apellido
  document.getElementById("fecha").value = fecha
  let boton = document.getElementById("boton")
  boton.innerHTML = "Editar"
  boton.onclick = function (){
    let nombre  = document.getElementById("nombre").value
    let apellido  = document.getElementById("apellido").value
    let fecha  = document.getElementById("fecha").value
    return washingtonRef.update({
      first: nombre,
      last: apellido,
      born: fecha
    })
    .then(function() {
        console.log("Document successfully updated!");
        document.getElementById("nombre").value = ""
        document.getElementById("apellido").value = ""
        document.getElementById("fecha").value = ""
        boton.innerHTML = "Guardar"
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    }); 
  }
  
}

pintar()
