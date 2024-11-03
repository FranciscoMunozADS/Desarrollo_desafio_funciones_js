/* Punto 3: 3.1 y 3.2 */

/* Cambiar con un click de cualquier color, a negro */

azul = document.getElementById("color1");
rojo = document.getElementById("color2");
verde = document.getElementById("color3");
amarillo = document.getElementById("color4");

function aNegro(negro) {
  negro.style.backgroundColor = "black";
}

azul.addEventListener("click", function () {
  aNegro(azul);
});

rojo.addEventListener("click", function () {
  aNegro(rojo);
});

verde.addEventListener("click", function () {
  aNegro(verde);
});

amarillo.addEventListener("click", function () {
  aNegro(amarillo);
});

/* Punto 3: 3.3 */

let color = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "pink";
  } else if (event.key === "s") {
    color = "orange";
  } else if (event.key === "d") {
    color = "lightblue";
  } else if (event.key === "q") {

    /* Punto 3.4 (aún dentro del EventListener) */
    
    crearNuevoDiv("purple");
  } else if (event.key === "w") {
    crearNuevoDiv("gray");
  } else if (event.key === "e") {
    crearNuevoDiv("brown");
  }

  document.getElementById("key").style.backgroundColor = color; // ésta línea actualiza el color del primer 'div: #key', con las teclas (A, S o D)
});

/* función que crea un nuevo div del color especifico */

function crearNuevoDiv(color) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.id = "nuevodiv";
  nuevoDiv.style.backgroundColor = color;
  document.body.appendChild(nuevoDiv);
}
