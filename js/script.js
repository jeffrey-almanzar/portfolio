var menuButton = document.querySelector("#menu");
var ul = document.querySelector("#main-nav");
var menuImg = document.querySelector("#menuImg");
var nav = document.querySelector("nav");
var li = document.querySelectorAll("li");

function expandMenu(){
    if(menuButton.textContent=="X"){
        closeMenu();
    }else{
        menuButton.textContent="X"
        ul.style.display="block";
        nav.style.justifyContent="space-around";
        
    }
}

function closeMenu(){
    menuButton.textContent="";
    ul.style.display="none";
    menuButton.appendChild(menuImg);
    nav.style.justifyContent="flex-end";
}



for (var i=0; i<li.length; i+=1){
    li[i].addEventListener('click',closeMenu);
}

menuButton.addEventListener("click", expandMenu);