$(function() {
  // fade in instructions
  $('.logo').animate({
    'bottom': '-150',
    'opacity': '1'
  }, 1000)
  $('.howToText').animate({
    'opacity': '1'
  }, 2000)
  
  // play sound
  function playHadouken() {
    var sound = $('#hadouken-sound')[0];
    sound.volume = 0.5;
    sound.load();
    sound.play();
  }
  
  // main event handlers
  function ryuDefault() {
    $('.ryu').mouseenter(function() {
      $('.ryu-still').hide();
      $('.ryu-ready').show();
    })
    .mouseleave(function() {
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-still').show();
    })
    .mousedown(function() {
      playHadouken();
      $('.ryu-still').hide();
      $('.ryu-cool').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').show();
      $('.hadouken').finish().show()
        .animate(
        {'left': '200px'},
        700,
        function() {
          $('.logo').hide();
          $('.explosion').show();
          setTimeout(function() {
            $('.explosion').fadeOut('fast');
          }, 500);
          $(this).css('left', '-200px');
          $(this).hide();
        }
      );
    })
    .mouseup(function() {
      $('.ryu-throwing').hide();
      $('.ryu-ready').show();
    });
  }
  
  // start event handlers
  ryuDefault();
  
  // look cool
  $(document).keydown(function(event) {
    if ( event.which == 88 ) {
      $('.ryu').off()
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-cool').show();
    }
  }).keyup(function(event) {
    if ( event.which == 88 ) {
      $('.ryu-cool').hide();
      if ($('.ryu').is(':hover')) {
        $('.ryu-ready').show();
      } else {
        $('.ryu-still').show();
      }
      ryuDefault();
    }
  })
})