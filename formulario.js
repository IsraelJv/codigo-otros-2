
document.querySelector("#form").onsubmit = function (e) {

  e.preventDefault(); //Detiene el envío normal

  // Se obtienen los elementos del html
  const nameElement = document.getElementById("name");
  const ageElement = document.getElementById("age");
  const nationalityElement = document.getElementById("nationality");

  // Se obtiene el indice de la nacionalidad seleccionada
  const nationalityIndex = nationalityElement.selectedIndex;

  // Obtiene los valores de los elementos
  const name = nameElement.value;
  const age = parseInt(ageElement.value); // Por defecto es String
  const nationality = nationalityElement.options[nationalityIndex].value;

  // Se imprime en consola para verificar resultado
  console.log(`Nombre: ${name}, edad: ${age}, nacionalidad: ${nationality}`);

  /**********************/
  /* VALIDACIONES       */
  /**********************/

  (name.length === 0) // Validación del nombre
    ? nameElement.classList.add("error")
    : (isNaN(age) || age < 18 || age > 120) // Validación de la edad
      ? ageElement.classList.add("error")
      : agregarInvitado(name, age, nationality);

}

const agregarInvitado = (nombre, edad, nacionalidad) => {

  // Nacionalidades disponibles.
  const nacionalidades = {
    "ar": "Argentina",
    "mx": "Mexicana",
    "vnzl": "Venezolana",
    "per": "Peruana"
  };

  nacionalidad = nacionalidades[nacionalidad] || "Sin especificar";

  const lista = document.getElementById("lista-de-invitados");

  // Crea y añade el elemento de la lista de invitados
  const elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");

  const crearElemento = (descripcion, valor) => {

    // Se crean los elementos
    const spanNombre = document.createElement("span");
    const inputNombre = document.createElement("input");
    const espacio = document.createElement("br");

    // Se agrega texto a los elementos
    spanNombre.textContent = `${descripcion}: `;
    inputNombre.value = valor

    // Se agregan al div de lista de invitados
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  // Crea los elementos del invitado
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad.toString());
  crearElemento("Nacionalidad", nacionalidad);


  /// PENDIENTE

  lista.appendChild(elementoLista)
  // Crea los elementos
  var botonBorrar = document.createElement("button")
  var corteLinea = document.createElement("br")
  // Se agregan atributos a los elementos
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  // Se añaden al documento
  document.body.appendChild(corteLinea)
  document.body.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}