window.onload = function () {
  TweenLite.to("#main-title", 1.5, { 
    opacity: 1,
    top: 0,
    onComplete: function () {
      TweenLite.to("#subtitle", 1.5, {
        opacity: 1,
        onComplete: function () {
          TweenLite.to("#begin-btn", 1, {
            opacity: 1
          })
        }
      })
    }
  })

  TweenLite.to("#zero", 3, {
    opacity: 1
  })

  TweenLite.to($('html, body'), 1, {
    scrollTop: 0
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
        console.log
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

          // const prevPos = $(this.hash)[0].id - 1;
          // TweenLite.to(`#${prevPos}`, 2, {
          //   opacity: 0.4
          // })
        }
      }
    })
})