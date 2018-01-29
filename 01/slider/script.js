let btnPrev = document.querySelector('.btn-prev');
let btnNext = document.querySelector('.btn-next');
let stop = document.querySelector('.stop');
let animationDuration = 2000;

let images = document.querySelectorAll('.gallery .photos img');
let intervalSlides;

let j = 0;

function nextSlider(){
  for(let i = 0; i < images.length; i++){
    images[i].className = '';
  }

  images[j].className = 'showed';

  console.log(images[j]);

  j++;

  if (j > images.length - 1) {
    j = 0;
  }
}

function startSlider(){
  intervalSlides = setInterval(function(){
    nextSlider();
  }, animationDuration);
}

for(let j = 0; j < images.length; j++){
  images[j].onclick = function(e){

    if(e.target.parentElement.classList.contains('active')){
      e.target.parentElement.classList.remove('active');
      clearInterval(intervalSlides);
      stop.classList.add('show');
    }else{
      e.target.parentElement.classList.add('active');
      startSlider();
      stop.classList.remove('show');
    }
  };
}

let i = 0;

btnPrev.onclick = function () {
  images[i].className = '';
  i--;

  if (i < 0) {
    i = images.length - 1;
  }

  images[i].className = 'showed';
};

btnNext.onclick = function () {
  images[i].className = '';

  i++;

  if (i > images.length - 1) {
    i = 0;
  }

  images[i].className = 'showed';
};














