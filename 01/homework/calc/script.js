let submit = document.querySelector('input[type="submit"]');
let calcCollection = document.querySelectorAll('input[name="calc1"], input[name="calc2"]');
let select = document.querySelector('#sign');
let output = document.querySelector('.output');

submit.onclick = function (e) {
  e.preventDefault();
  let result;
  let sign = select.value;

  if (calcCollection[0].value === '' || calcCollection[1].value === '') {
    submit.setAttribute('disabled', 'disabled');
  } else {
    let calc1 = parseInt(calcCollection[0].value);
    let calc2 = parseInt(calcCollection[1].value);

    switch (sign) {
      case '+':
        result = calc1 + calc2;
        break;

      case '-':
        result = calc1 - calc2;
        break;

      case '*':
        result = calc1 * calc2;
        break;

      case '/':
        if (calc2 > 0) {
          result = calc1 / calc2;
        } else {
          alert('invalid opperation');
        }
        break;
    }

    if (result) {
      output.innerHTML = result;
    }
  }
};

for(let i = 0; i < calcCollection.length; i++){
  calcCollection[i].onkeydown = function(){
    submit.removeAttribute('disabled');
  };
}

