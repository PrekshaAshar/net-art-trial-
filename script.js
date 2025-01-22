$(document).ready(function () {
  const book = $('.book');

  book.on('click', '.active', nextPage);
  book.on('click', '.flipped', prevPage);

  book.hammer().on('swipeleft', nextPage);
  book.hammer().on('swiperight', prevPage);

  function nextPage() {
    $('.active')
      .removeClass('active')
      .addClass('flipped')
      .next('.page')
      .addClass('active');
  }

  function prevPage() {
    $('.flipped')
      .last()
      .removeClass('flipped')
      .addClass('active')
      .siblings('.page')
      .removeClass('active');
  }
});
``

    
    
}

