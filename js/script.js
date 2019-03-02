var menuButton = document.querySelector("#menu");
var ul = document.querySelector("#main-nav");
var menuImg = document.querySelector("#menuImg");


function expandMenu(){
    if(menuButton.textContent=="X"){
        closeMenu();
    }else{
        menuButton.textContent="X"
        ul.style.display="block";
    }
}

function closeMenu(){
    menuButton.textContent="";
    ul.style.display="none";
    menuButton.appendChild(menuImg);
}

menuButton.addEventListener("click", expandMenu);