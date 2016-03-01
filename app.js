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

  var user = {};

  $('.gun-button').click(function(){
    user.guns = this.value;
    $('.guns').slideUp();
    $('.crime').fadeIn();
  });

  $('.crime-button').click(function() {
    user.crime = this.value;
    $('.crime').slideUp();
    $('.healthcare').fadeIn();
  });

  $('.healthcare-button').click(function(){
    user.healthcare = this.value;
    $('.healthcare').slideUp();
    $('.energy').fadeIn();
  });

  $('.energy-button').click(function(){
    user.energy = this.value;
    $('.energy').slideUp();
    $('.drugs').fadeIn();
  });

  $('.drugs-button').click(function(){
    user.drugs = this.value;
    $('.drugs').slideUp();
    $('.taxes').fadeIn();
  });

  $('.taxes-button').click(function(){
    user.taxes = this.value;
    $('.taxes').slideUp();
    $('.immigration').fadeIn();
  });

  $('.immigration-button').click(function(){
    user.immigration = this.value;
    $('.immigration').slideUp();
    $('.ss').fadeIn();
  });

  $('.ss-button').click(function(){
    user.ss = this.value;
    $('.ss').slideUp();
    $('.military').fadeIn();
  });

  $('.military-button').click(function(){
    user.military = this.value;
    $('.military').slideUp();
    $('.fp').fadeIn();
  });

  $('.fp-button').click(function(){
    user.fp = this.value;
    $('.fp').slideUp();
    $('.tpp').fadeIn();
  });

  $('.tpp-button').click(function(){
    user.tpp = this.value;
    $('.tpp').slideUp();
    $('.marriage').fadeIn();
  });

  $('.marriage-button').click(function(){
    user.marriage = this.value;
    $('.marriage').slideUp();
    $('.religion').fadeIn();
  });

  $('.religion-button').click(function(){
    user.religion = this.value;
    $('.religion').slideUp();
    $('.epa').fadeIn();
  });

  $('.epa-button').click(function(){
    user.epa = this.value;
    $('.epa').slideUp();
    $('.voting').fadeIn();
  });

  $('.voting-button').click(function(){
    user.voting = this.value;
    $('.voting').slideUp();
    $('.nsa').fadeIn();
  });

  $('.nsa-button').click(function(){
    user.nsa = this.value;
    $('.nsa').slideUp();
    $('.wages').fadeIn();
  });

  $('.wages-button').click(function(){
    user.wages = this.value;
    $('.wages').slideUp();
    $('.citizens').fadeIn();
  });

  $('.citizens-button').click(function(){
    user.citizens = this.value;
    $('.citizens').slideUp();
    $('.match').fadeIn('slow');
    console.log(user);
  });

});
