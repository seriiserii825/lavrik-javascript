let inputs = document.querySelectorAll('input[type=text], input[type=password]');

/*
for(let i = 0; i < inputs.length; i++){
  inputs[i].onfocus = function(){
      this.classList.add('focus');
  }
}


for(let i = 0; i < inputs.length; i++){
    inputs[i].onblur = function(){
        this.classList.remove('focus');
    }
}

*/

let jq = new OurJquery(inputs);

jq.on('mouseover', function(){
    this.classList.add('focus');
});

jq.addClass('error');

function fade(elem, t, f){
  // кадров в секунду (по умолчанию 50)
  var fps = f || 50; 
  // время работы анимации (по умолчанию 500мс)
  var time = t || 500; 
  
  var timer = setInterval(function(){
    // изменение opacity
    
    // если анимация окончена
    if(/* проверка */){
      // убираем интервал выполнения
      clearInterval(timer);
      // и убираем элемент из потока документа
      elem.style.display = 'none';
    }
  }, (1000 / fps));
}
