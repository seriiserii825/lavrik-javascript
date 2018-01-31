$(function(){
  function Slider(obj){
    this.images = $(obj.images);
    this.btnPrev = $(obj.btnPrev);
    this.btnNext = $(obj.btnNext);
    this.loop = obj.loop;

    let that = this;
    let i = 0;

    this.btnPrev.on('click', function(){

      that.images.eq(i).removeClass('showed');

      i--;

      if(i < 0){
        i = that.images.length - 1;  
      }

      that.images.eq(i).addClass('showed');
    });

    this.btnNext.on('click', function(){

      that.images.eq(i).removeClass('showed');

      i++;


      if(i > that.images.length - 1){
        i = 0;  
      }

      that.images.eq(i).addClass('showed');
    });

    if (this.loop){
      setInterval(function(){
        that.images.eq(i).removeClass('showed');

        i++;


        if(i > that.images.length - 1){
          i = 0;  
        }

        that.images.eq(i).addClass('showed');
      }, 2000);
    }
  }

  let slider = new Slider({
    btnPrev: '.btn-prev',
    btnNext: '.btn-next',
    images: '.gallery img',
    loop: false
  });
});