document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("menu__back").addEventListener("click", ocultar_menu);



nav = document.getElementById("nav");
background_menu = document.getElementById("menu__back");

function mostrar_menu(){
    nav.style.right = "0px"; //mueve el NAV 0 pixeles ya q le habiamos puesto -300
    background_menu.style.display = "block"; //para q se muestre ya q esta en none
}

function ocultar_menu(){
    nav.style.right = "-300px";
    background_menu.style.display = "none";
}

