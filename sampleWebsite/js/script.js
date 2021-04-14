const menuBtn = document.getElementById('menuBtn');
const menuItems = document.getElementById('menu-items');


menuBtn.onclick = function(){
    menuItems.classList.toggle('show');
    menuBtn.classList.toggle('close');
    
}

menuItems.onclick = function(){
    menuItems.classList.remove('show');
    menuBtn.classList.remove('close');
    
}

