let btnPrev = document.querySelector('.btn-prev');
let btnNext = document.querySelector('.btn-next');

let images = document.querySelectorAll('.gallery .photos img');

let i = 0;

btnNext.onclick = function(){
    images[i].style.display = 'none';
    i++;
    images[i].style.display = 'block';
};


