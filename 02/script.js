let links = document.querySelectorAll('a[target="_blank"]');

for(let i = 0; i < links.length; i++){
  links[i].onclick = comfirmAway;
}

function comfirmAway(){
    if(!confirm('Перейти на другой сайт?')){
        return false;
    }
}

let images = document.querySelectorAll('img');

for(let i = 0; i < images.length; i++){
  images[i].onmousedown = stopMove;
  images[i].oncontextmenu = stopMove;
}

function stopMove(){
    return false;
}
