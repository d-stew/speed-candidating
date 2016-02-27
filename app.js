$(document).ready(function(){
  $('div').hide();

  $('.enter').on('click', function(){
    $('.landing').slideUp();
    $('div').show();
  })
})
