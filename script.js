// Animación al aparecer elementos al hacer scroll

const elementos = document.querySelectorAll(
'.card, .precio, .comentario, .galeria img'
);

const mostrar = () => {

elementos.forEach((elemento)=>{

const posicion = elemento.getBoundingClientRect().top;

if(posicion < window.innerHeight - 100){

elemento.classList.add("mostrar");

}

});

}

window.addEventListener("scroll", mostrar);

mostrar();