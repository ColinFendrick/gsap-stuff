window.onload = function() {
  TweenLite.to("#top", 1, { 
    opacity: 1
  })
}

$(document).ready(function() {
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
          event.preventDefault();

          TweenLite.to($('html, body'), 1.5, {
            scrollTop: target.offset().top,
            onComplete: function() {
              $(target).focus();
              if ($(target).is(":focus")) {
                return false;
              } else {
                $(target).attr('tabindex', '-1');
                $(target).focus();
              }
            }
          })

          TweenLite.to($(target), 2.5, {
            opacity: 1
          })

          
        }
      }
    })
})