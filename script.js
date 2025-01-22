$('.book')
  .on('click', '.active', function() {
    $(this).removeClass('active').addClass('flipped').next('.page').addClass('active');
  })
  .on('click', '.flipped', function() {
    $(this).removeClass('flipped').addClass('active').prev('.page').removeClass('active');
  });

$('.book').hammer().on('swipeleft', function() {
  $('.active').removeClass('active').addClass('flipped').next('.page').addClass('active');
});

$('.book').hammer().on('swiperight', function() {
  $('.flipped:last').removeClass('flipped').addClass('active').prev('.page').removeClass('active');
});


    
    
}

