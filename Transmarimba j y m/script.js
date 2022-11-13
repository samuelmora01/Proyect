const btn =document.querySelector('#menu-btn');
const menu =document.querySelector('#sidemenu');

btn.addEventListener("click", e => {
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");

    document.querySelector('body').classList.toggle('body-expanded');
});

document.write('hola mundo')



let numero =5;
let numero2 ='samuel';

prompt("holas");
let saludo = prompt("holas");
alert(saludo);