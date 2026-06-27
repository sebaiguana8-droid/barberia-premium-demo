/*==========================================================
    BARBERÍA PREMIUM
    SCRIPT.JS
    PARTE 1
==========================================================*/

"use strict";

/*==========================================================
    SELECTORES
==========================================================*/

const header = document.querySelector("header");

const preloader = document.querySelector(".preloader");

const cards = document.querySelectorAll(
".service-card,.testimonial,.gallery-item,.stat-box,.faq-item,.feature,.info-box"
);

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

const counters = document.querySelectorAll("[data-counter]");

/*==========================================================
    PRELOADER
==========================================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

if(preloader){

preloader.classList.add("hide");

}

},600);

});

/*==========================================================
    HEADER SCROLL
==========================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("header-scroll");

}else{

header.classList.remove("header-scroll");

}

});

/*==========================================================
    ANIMACIÓN AL APARECER
==========================================================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

cards.forEach(card=>{

observer.observe(card);

});

/*==========================================================
    CONTADORES
==========================================================*/

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;

const target = Number(counter.dataset.counter);

let current = 0;

const increment = target/120;

const update = ()=>{

current += increment;

if(current < target){

counter.textContent = Math.floor(current);

requestAnimationFrame(update);

}else{

counter.textContent = target;

}

}

update();

counterObserver.unobserve(counter);

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==========================================================
    FIN PARTE 1
==========================================================*/
/*==========================================================
    PARTE 2
    MENÚ ACTIVO + BOTÓN SCROLL + MENÚ MÓVIL
==========================================================*/

/*==========================================================
    MENÚ ACTIVO
==========================================================*/

const activateMenu = ()=>{

let current = "";

sections.forEach(section=>{

const top = window.scrollY;

const offset = section.offsetTop - 140;

const height = section.offsetHeight;

if(top >= offset && top < offset + height){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

const href = link.getAttribute("href");

if(href === "#" + current){

link.classList.add("active");

}

});

};

window.addEventListener("scroll",activateMenu);

activateMenu();

/*==========================================================
    BOTÓN VOLVER ARRIBA
==========================================================*/

const scrollButton = document.createElement("div");

scrollButton.className = "scroll-top";

scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(scrollButton);

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

scrollButton.classList.add("show-scroll");

}else{

scrollButton.classList.remove("show-scroll");

}

});

scrollButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==========================================================
    MENÚ MÓVIL
==========================================================*/

const menuButton = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

if(menuButton && nav){

menuButton.addEventListener("click",()=>{

nav.classList.toggle("mobile-open");

});

}

/*==========================================================
    CERRAR MENÚ AL HACER CLICK
==========================================================*/

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

if(nav){

nav.classList.remove("mobile-open");

}

});

});

/*==========================================================
    SCROLL SUAVE BOTONES
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const destino = document.querySelector(this.getAttribute("href"));

if(destino){

e.preventDefault();

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==========================================================
    EFECTO HOVER PREMIUM
==========================================================*/

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = ((x / rect.width) - .5) * 8;

const rotateX = ((y / rect.height) - .5) * -8;

card.style.transform =

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform = "";

});

});

/*==========================================================
    FIN PARTE 2
==========================================================*/
/*==========================================================
    PARTE 3
    EFECTOS PREMIUM + OPTIMIZACIÓN
==========================================================*/

/*==========================================================
    PARALLAX HERO
==========================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(!hero) return;

const scroll = window.pageYOffset;

hero.style.backgroundPositionY = `${scroll * 0.45}px`;

});

/*==========================================================
    CURSOR PREMIUM
==========================================================*/

const cursor = document.createElement("div");

cursor.className = "cursor-premium";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("a,.btn,.service-card,.gallery-item,.testimonial").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.classList.add("cursor-grow");

});

el.addEventListener("mouseleave",()=>{

cursor.classList.remove("cursor-grow");

});

});

/*==========================================================
    BARRA DE PROGRESO
==========================================================*/

const progress = document.createElement("div");

progress.className = "scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total =

document.documentElement.scrollHeight -

window.innerHeight;

const percent =

(window.scrollY / total) * 100;

progress.style.width = percent + "%";

});

/*==========================================================
    LAZY LOAD IMÁGENES
==========================================================*/

document.querySelectorAll("img").forEach(img=>{

img.loading = "lazy";

});

/*==========================================================
    BOTONES
==========================================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});

/*==========================================================
    PERFORMANCE
==========================================================*/

let resizeTimer;

window.addEventListener("resize",()=>{

clearTimeout(resizeTimer);

resizeTimer = setTimeout(()=>{

window.dispatchEvent(new Event("scroll"));

},100);

});

/*==========================================================
    EFECTO FADE DEL HEADER
==========================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY > 120){

header.style.borderBottom =

"1px solid rgba(255,255,255,.05)";

}else{

header.style.borderBottom = "none";

}

});

/*==========================================================
    CONSOLE
==========================================================*/

console.log(

"%cBARBERÍA PREMIUM",

"color:#d4af37;font-size:20px;font-weight:bold"

);

console.log(

"%cSitio cargado correctamente",

"color:#ffffff;font-size:13px"

);

/*==========================================================
    FIN DEL SCRIPT
==========================================================*/