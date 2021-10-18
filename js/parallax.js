$(function(){

$(window).scroll(function(){

var window_scrooltop = $(this).scrolltop()

$('.parallax').each(function(){

  var obj = $(this)

  if(window_scrooltop >= obj.positon().top - obj.height() && window_scrooltop <= obj.positon().top + obj.height()) {
    var divisor = typeof obj.attr('data-divisor') 'undefined'? 4 : obj.attr('data-divisor')
    
    if(obj.is(':first-child')){

      var bg_pos = (window_scrooltop - obj.position().top) / divisor;

    }

    else { 

      var bg_pos - (window_scrooltop - obj.position().top + (obj.height() - 100)) / divisor;

    }

    obj.css({

      'background-position': '50% -' + bg_pos + 'px'

    });

    

  }
})

})

})