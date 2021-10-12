
Splitting();

$('.email').keyup(function(){
   $( ".field p" ).remove();
   var emailText = $('.email').val();
   $(".field").append("<p class='text' data-splitting='chars'>" + emailText + "</p>");
    Splitting();
});

$('.signup').submit(function(event){
 event.preventDefault();
  $(".field").addClass("haunt");
  var grave = ($(".field .text .word").width() + 40) + 'px';
  $('body').get(0).style.setProperty("--width", grave);
  setTimeout(function(){	
    $('.email').val('');
    $( ".field p" ).remove();
    $(".field").removeClass("haunt");
    $('body').get(0).style.setProperty("--width", "calc(100% + 200px)");
    $(".field").append("<p class='text initial' data-splitting='chars'>email</p>");
    Splitting();
}, 7000);
});
