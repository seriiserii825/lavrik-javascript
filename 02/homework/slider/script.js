function Slider(obj){
    this.images = document.querySelectorAll(obj.images);
    this.prevButton = document.querySelector(obj.prevButton);
    this.nextButton = document.querySelector(obj.nextButton);
    this.fadeDuration = obj.fadeDuration;
    this.loop = obj.loop;
    this.loopDuration = obj.loopDuration || 2000;

    for (let i = 0; i < this.images.length; i++) {
        this.images[i].style.transition = 'all ' + this.fadeDuration + ' ease';
    }

    let i = 0;
    let that = this;

    this.nextButton.onclick = function(){
        that.images[i].classList.remove('showed');

        i++;

        if (i > that.images.length - 1) {
            i = 0;
        }

        that.images[i].classList.add('showed');
    };

    this.prevButton.onclick = function(){
        that.images[i].classList.remove('showed');

        i--;

        if (i < 0) {
            i = that.images.length - 1;
        }

        that.images[i].classList.add('showed');
    };

    function startLoop(){
        setInterval(function(){
            that.images[i].classList.remove('showed');

            i++;

            if (i > that.images.length - 1) {
                i = 0;
            }

            that.images[i].classList.add('showed');
        }, that.loopDuration);
    }

    if (this.loop === true) {
        startLoop();
    }
}

let slider1 = new Slider({
    images: '.slider-1 img',
    prevButton: '.slider-1 .btn-prev',
    nextButton: '.slider-1 .btn-next',
    fadeDuration: '1s'
});

let slider2 = new Slider({
    images: '.slider-2 img',
    prevButton: '.slider-2 .btn-prev',
    nextButton: '.slider-2 .btn-next',
    fadeDuration: '1s',
    loop: true,
    loopDuration: 5000
});
