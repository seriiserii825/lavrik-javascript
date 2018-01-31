function Popup(target){
  function createElem(el, cls){
    let elem = document.createElement(el);
    elem.className = cls;

    return elem;
  }

  this.target = document.querySelector(target);
  
  this.popup = createElem('div', 'popup');
  this.popupContent = createElem('div', 'popup__content');
  this.overlay = createElem('div', 'overlay');

  this.popup.appendChild(this.popupContent);

  let that = this;

  document.body.appendChild(this.popup);
  document.body.appendChild(this.overlay);  


  this.open = function(tag, content){
    this.popupContent.innerHTML = '<' + tag + '>' + content + '</' + tag + '>'; 
  };

  this.close = function(){
    that.popup.classList.remove('show');
    that.overlay.classList.remove('show');
  };

  this.target.onclick = function(){
    that.popup.classList.add('show');
    that.overlay.classList.add('show');
  };

  this.overlay.onclick = this.close;
}

let popup = new Popup('.popup-target');
popup.open('h3', 'some text');

let popup2 = new Popup('.popup-target2');
popup2.open('h1', 'content for popup 2');