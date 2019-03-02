var menuButton = document.querySelector("#menu");
var ul = document.querySelector("#main-nav");
var menuImg = document.querySelector("#menuImg");
var nav = document.querySelector("nav");


function expandMenu(){
    if(menuButton.textContent=="X"){
        closeMenu();
    }else{
        menuButton.textContent="X"
        ul.style.display="block";
        nav.style.justifyContent="space-between";

    }
}

function closeMenu(){
    menuButton.textContent="";
    ul.style.display="none";
    menuButton.appendChild(menuImg);
    nav.style.justifyContent="flex-end";
}

menuButton.addEventListener("click", expandMenu);