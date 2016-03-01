$(document).ready(function(){
  $('div').hide();
  $('.tinder').hide();
  $('.buttons').hide();

  // Animate 'Find My Ideal Candidate' button
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

  // Go to Overview page
  $('.enter-button').on('click', function(){
    $('.landing').slideUp();
    $('div').show();
  });

  // Go to first issue page
  $('.start-button').on('click', function(){
    $('.about-main').slideUp(1000);
    $('.guns').show();
    $('.top-bar').animate({'margin':'1.5% 0 0 0'}, 1000);
    $('.img-circle').animate({'height':'100px','width':'100px'}, 1000);
  });

  // Object object to store user responses
  var user = {};

  $('.gun-button').click(function(){
    user.guns = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].guns) {
        candidates[i].matchScore += 1;
      };
    };
    $('.guns').slideUp();
    $('.crime').fadeIn();
  });

  $('.crime-button').click(function() {
    user.crime = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].crime) {
        candidates[i].matchScore += 1;
      };
    };
    $('.crime').slideUp();
    $('.healthcare').fadeIn();
  });

  $('.healthcare-button').click(function(){
    user.healthcare = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].healthcare) {
        candidates[i].matchScore += 1;
      };
    };
    $('.healthcare').slideUp();
    $('.energy').fadeIn();
  });

  $('.energy-button').click(function(){
    user.energy = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].energy) {
        candidates[i].matchScore += 1;
      };
    };
    $('.energy').slideUp();
    $('.drugs').fadeIn();
  });

  $('.drugs-button').click(function(){
    user.drugs = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].drugs) {
        candidates[i].matchScore += 1;
      };
    };
    $('.drugs').slideUp();
    $('.taxes').fadeIn();
  });

  $('.taxes-button').click(function(){
    user.taxes = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].taxes) {
        candidates[i].matchScore += 1;
      };
    };
    $('.taxes').slideUp();
    $('.immigration').fadeIn();
  });

  $('.immigration-button').click(function(){
    user.immigration = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].immigration) {
        candidates[i].matchScore += 1;
      };
    };
    $('.immigration').slideUp();
    $('.ss').fadeIn();
  });

  $('.ss-button').click(function(){
    user.ss = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].ss) {
        candidates[i].matchScore += 1;
      };
    };
    $('.ss').slideUp();
    $('.military').fadeIn();
  });

  $('.military-button').click(function(){
    user.military = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].military) {
        candidates[i].matchScore += 1;
      };
    };
    $('.military').slideUp();
    $('.fp').fadeIn();
  });

  $('.fp-button').click(function(){
    user.fp = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].fp) {
        candidates[i].matchScore += 1;
      };
    };
    $('.fp').slideUp();
    $('.tpp').fadeIn();
  });

  $('.tpp-button').click(function(){
    user.tpp = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].tpp) {
        candidates[i].matchScore += 1;
      };
    };
    $('.tpp').slideUp();
    $('.marriage').fadeIn();
  });

  $('.marriage-button').click(function(){
    user.marriage = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].marriage) {
        candidates[i].matchScore += 1;
      };
    };
    $('.marriage').slideUp();
    $('.religion').fadeIn();
  });

  $('.religion-button').click(function(){
    user.religion = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].religion) {
        candidates[i].matchScore += 1;
      };
    };
    $('.religion').slideUp();
    $('.epa').fadeIn();
  });

  $('.epa-button').click(function(){
    user.epa = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].epa) {
        candidates[i].matchScore += 1;
      };
    };
    $('.epa').slideUp();
    $('.voting').fadeIn();
  });

  $('.voting-button').click(function(){
    user.voting = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].voting) {
        candidates[i].matchScore += 1;
      };
    };
    $('.voting').slideUp();
    $('.nsa').fadeIn();
  });

  $('.nsa-button').click(function(){
    user.nsa = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].nsa) {
        candidates[i].matchScore += 1;
      };
    };
    $('.nsa').slideUp();
    $('.wages').fadeIn();
  });

  $('.wages-button').click(function(){
    user.wages = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].wages) {
        candidates[i].matchScore += 1;
      };
    };
    $('.wages').slideUp();
    $('.citizens').fadeIn();
  });

  $('.citizens-button').click(function(){
    user.citizens = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].citizens) {
        candidates[i].matchScore += 1;
      };
    };
    $('.citizens').slideUp();
    $('.abortion').fadeIn('slow');
  });

  $('.abortion-button').click(function(){
    user.abortion = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if(this.value == candidates[i].abortion) {
        candidates[i].matchScore += 1;
      };
    };
    candidates.sort(function(a,b) {
			return  b.matchScore - a.matchScore;
		});
    $('.abortion').slideUp();
    $('.head-bar').slideUp();
    $('.match').fadeIn('slow');
    $('.insert').append('<img class="match" src=' + candidates[0].image +'>');
    $('.insert').append('<h2 class="match">' + candidates[0].name + '!</h2>');
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
  abortion: 2,
  image: "images/trump.jpg"
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
  image: "images/sanders.jpg"
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
  image: "images/carson.jpg"
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
  image: "images/johnson.jpg"
};

var rubio = {
  name: "Marco Rubio",
  matchScore: 0,
  guns: 1,
  crime: 5,
  healthcare: 2,
  energy: 2,
  drugs: 1,
  taxes: 1,
  immigration: 2,
  ss: 2,
  military: 5,
  fp: 1,
  tpp: 5,
  marriage: 1,
  religion: 5,
  epa: 1,
  voting: 2,
  nsa: 1,
  wages: 2,
  citizens: 1,
  abortion: 1,
  image: "images/rubio.jpg"
};

var clinton = {
  name: "Hillary Clinton",
  matchScore: 0,
  guns: 5,
  crime: 2,
  healthcare: 5,
  energy: 5,
  drugs: 3,
  taxes: 5,
  immigration: 4,
  ss: 1,
  military: 2,
  fp: 2,
  tpp: 2,
  marriage: 5,
  religion: 2,
  epa: 5,
  voting: 5,
  nsa: 4,
  wages: 4,
  citizens: 5,
  abortion: 5,
  image: "images/clinton.jpg"
};

var kasich = {
  name: "John Kasich",
  matchScore: 0,
  guns: 1,
  crime: 4,
  healthcare: 2,
  energy: 2,
  drugs: 1,
  taxes: 1,
  immigration: 2,
  ss: 5,
  military: 2,
  fp: 2,
  tpp: 3,
  marriage: 3,
  religion: 5,
  epa: 3,
  voting: 4,
  nsa: 2,
  wages: 3,
  citizens: 3,
  abortion: 2,
  image: "images/kasich.jpg"
};

var cruz = {
  name: "Ted Cruz",
  matchScore: 0,
  guns: 1,
  crime: 5,
  healthcare: 1,
  energy: 1,
  drugs: 2,
  taxes: 1,
  immigration: 1,
  ss: 5,
  military: 5,
  fp: 2,
  tpp: 5,
  marriage: 1,
  religion: 5,
  epa: 2,
  voting: 3,
  nsa: 4,
  wages: 1,
  citizens: 1,
  abortion: 1,
  image: "images/cruz.jpg"
};

var stein = {
  name: "Jill Stein",
  matchScore: 0,
  guns: 5,
  crime: 1,
  healthcare: 5,
  energy: 5,
  drugs: 5,
  taxes: 5,
  immigration: 5,
  ss: 1,
  military: 1,
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
  image: "images/stein.jpg"
};

var candidates = [trump,sanders,carson,johnson,rubio,clinton,kasich,cruz,stein]
