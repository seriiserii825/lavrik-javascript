function $(selector){
  let elements;

  if(selector instanceof HTMLElement){
    elements = [selector];
  }else{
    elements = document.querySelectorAll(selector);
  }

  return new Jquery(elements);
}

function Jquery(elements){
  this.elements = elements;

  let that = this;

  this.on = function(eventName, f){
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener(eventName,f);
    }

    return this;
  };

  this.addClass = function(className){
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(className);
    };

    return this;
  }

  this.removeClass = function(className){
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.remove(className);
    };

    return this;
  }

  this.html = function(html){
    if(html === undefined){
      return this.elements[0].innerHTML;
    }

    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = html;
    }; 

    return this;
  }

  this.fade = function(t, f){
  // кадров в секунду (по умолчанию 50)
  var fps = f || 50; 
  // время работы анимации (по умолчанию 500мс)
  var time = t || 500; 
  // сколько всего покажем кадров
  var steps = time / fps;   
  // текущее значение opacity - изначально 0
  var op = 1;
  // изменение прозрачности за 1 кадр
  var d0 = op / steps;
  
  // устанавливаем интервал (1000 / fps) 
  // например, 50fps -> 1000 / 50 = 20мс  
  var timer = setInterval(function(){
    // уменьшаем текущее значение opacity
    op -= d0;

    for (var i = 0; i < that.elements.length; i++) {
      that.elements[i].style.opacity = op;
    }
    // устанавливаем opacity элементу DOM
    //that.elements.style.opacity = op;
    // уменьшаем количество оставшихся шагов анимации
    steps--;
    
    // если анимация окончена
    if(steps == 0){
      // убираем интервал выполнения
      clearInterval(timer);
      // и убираем элемент из потока документа
      for (var i = 0; i < that.elements.length; i++) {
        that.elements[i].style.display = 'none';
      }
    }
  }, (1000 / fps));
}
}
