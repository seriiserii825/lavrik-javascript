$(function(){
  let question = $('.list ul li:first-child');
  let answer = $('.list ul li:last-child');

  question.on('click', function(){
    answer.slideUp();

    if($(this).next().is(':visible')){
      $(this).next().slideUp();      
    }else{
      $(this).next().slideDown();
    }
  });

});
