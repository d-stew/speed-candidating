$(document).ready(function(){
  $('div').hide();
  $('.tinder').hide();
  $('.buttons').hide();

  $('.enter-button').mouseenter(function() {
    $(this).filter(':not(:animated)').animate({height: '+=15px', width: '+=15px'});
  }, function() {
    $(this).animate({height: '+=15px', width: '+=15px'});
      });
  $('.enter-button').mouseleave(function() {
    $(this).filter(':not(:animated)').animate({height: '-=15px', width: '-=15px'});
  }, function() {
    $(this).animate({height: '-=15px', width: '-=15px'});
      });

  $('.enter-button').on('click', function(){
    $('.landing').slideUp();
    $('div').show();
  });

  $('.start-button').on('click', function(){
    $('.about-main').slideUp(1000);
    $('.guns').show();
    $('.top-bar').animate({'margin':'1.5% 0 0 0'}, 1000);
    $('.img-circle').animate({'height':'100px','width':'100px'}, 1000);
  });

  $('.gun-button').click(function(){
    $('.guns').slideUp();
    $('.crime').fadeIn();
  });

  $('.crime-button').click(function() {
    $('.crime').slideUp();
    $('.healthcare').fadeIn();
  });

  $('.healthcare-button').click(function(){
    $('.healthcare').slideUp();
    $('.energy').fadeIn();
  });

  $('.energy-button').click(function(){
    $('.energy').slideUp();
    $('.pot').fadeIn();
  });

  $('.pot-button').click(function(){
    $('.pot').slideUp();
    $('.taxes').fadeIn();
  });
});
