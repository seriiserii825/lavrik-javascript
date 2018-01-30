let inputCollection = document.querySelectorAll('input[type="email"], input[type="text"], input[type="number"]');
let myForm = document.querySelector('.myForm');
let result = document.querySelector('.result');

function isEmpty(el){
    return el.value.length === 0;
}

myForm.onsubmit = function(){
    let res = [];
    let resultText = '';

    for (let i = 0; i < inputCollection.length; i++) {
        if (!isEmpty(inputCollection[i])) {
            res.push(inputCollection[i]);
        }else{
            inputCollection[i].classList.remove('succes');
            inputCollection[i].classList.add('error');
            resultText += 'Missing datat for input ' + inputCollection[i].getAttribute('type') + '<br>';
        }
    }

    result.classList.remove('succes');
    result.classList.add('error');
    result.innerHTML = resultText;

    if(res.length === inputCollection.length){
        result.classList.remove('error');
        result.classList.add('succes');
        result.innerHTML = 'Data was sent';

        setTimeout(function(){
            console.log('wait');
        }, 2000);

    }else{
        return false;
    }
};

for (let i = 0; i < inputCollection.length; i++) {
    inputCollection[i].oninput = function(){
        this.classList.remove('error');
        this.classList.add('succes');
    };
}
