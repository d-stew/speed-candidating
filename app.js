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
    $('.abortion').fadeIn('slow');
  });

  $('.abortion-button').click(function(){
    user.abortion = this.value;
    $('.abortion').slideUp();
    $('.match').fadeIn('slow');
  });

});

var trump = {
  name: "Donald Trump",
  matchScore: 0,
  guns: 5,
  crime: 5,
  healthcare: 2,
  energy: 1,
  drugs: 2,
  taxes: 4,
  immigration: 1,
  ss: 4,
  military: 5,
  fp: 4,
  tpp: 2,
  marriage: 2,
  religion: 5,
  epa: 1,
  voting: 4,
  nsa: 2,
  wages: 1,
  citizens: 4,
  abortion: 2
};

var sanders = {
  name: "Bernie Sanders",
  matchScore: 0,
  guns: 3,
  crime: 1,
  healthcare: 5,
  energy: 5,
  drugs: 5,
  taxes: 5,
  immigration: 4,
  ss: 1,
  military: 2,
  fp: 5,
  tpp: 1,
  marriage: 5,
  religion: 1,
  epa: 5,
  voting: 5,
  nsa: 5,
  wages: 5,
  citizens: 5,
  abortion: 5,
};

var carson = {
  name: "Ben Carson",
  matchScore: 0,
  guns: 1,
  crime: 2,
  healthcare: 2,
  energy: 2,
  drugs: 1,
  taxes: 1,
  immigration: 2,
  ss: 5,
  military: 4,
  fp: 2,
  tpp: 4,
  marriage: 2,
  religion: 5,
  epa: 2,
  voting: 3,
  nsa: 4,
  wages: 2,
  citizens: 3,
  abortion: 1,
};

var johnson = {
  name: "Gary Johnson",
  matchScore: 0,
  guns: 5,
  crime: 2,
  healthcare: 1,
  energy: 2,
  drugs: 5,
  taxes: 1,
  immigration: 5,
  ss: 4,
  military: 1,
  fp: 5,
  tpp: 4,
  marriage: 5,
  religion: 4,
  epa: 2,
  voting: 2,
  nsa: 5,
  wages: 3,
  citizens: 4,
  abortion: 4,
};

var rubio = {
  name: "Marco Rubio",
  matchScore: 0,
  guns: 3,
  crime: 1,
  healthcare: 5,
  energy: 5,
  drugs: 5,
  taxes: 5,
  immigration: 4,
  ss: 1,
  military: 2,
  fp: 5,
  tpp: 1,
  marriage: 5,
  religion: 1,
  epa: 5,
  voting: 5,
  nsa: 5,
  wages: 5,
  citizens: 5,
  abortion: 5,
};

var clinton = {

};

var kasich = {

};

var cruz = {

};

var stein = {

};

var candidates = [trump,sanders,carson,johnson,rubio,clinton,kasich,cruz,stein]

console.log(trump);
console.log(candidates);
