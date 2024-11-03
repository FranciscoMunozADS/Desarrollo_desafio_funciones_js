/* 
Código Base 

function pintar() {
ele.style.backgroundColor = "yellow";
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar); 
*/

/* 
Punto 2.2

De esta manera la función 'pintar' puede recibir cualquier elemento del DOM como parámetro.
Ésta función cambia el color de fondo del elemento de HTML (#ele1) al hacerle click.
*/

function pintar(elemento) {
  elemento.style.backgroundColor = "yellow";
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", function () {
  pintar(ele);
});

/* Punto 2.3  */

function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

/* ya está definida la const 'ele' en la linea 23, por lo que no es correcto señalarla nuevamente */

ele.addEventListener("click", function () {
  pintar(ele, "yellow"); // al definir un color, al hacer click se cambiará a (yellow)
});

pintar(ele); // Si no se proporciona ningún color al llamar a 'pintar', se usará "green"

/* ésta última función se ejecutará al cargar la página, queriendo decir que por defecto será "green" */
