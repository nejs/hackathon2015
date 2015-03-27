$(function(){
  $(document).on('click', 'a', function(e){
    e.preventDefault();
    var a = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(a).position().top-70
    }, 500);
    
  });
});