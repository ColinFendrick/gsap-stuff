const tl_title = new TimelineLite();

// When the page loads, fade in the intro stuff
window.onload = function() {
  $('.heading').css({ "display": "flex" });
  tl_title.to("html, body", 0.75, { scrollTop: 0 })
    .to("#main-title, .heading", 1.5, { opacity: 1 })
    .to("#subtitle", 1.25, { opacity: 1 })
    .to("#begin-btn", 1, { opacity: 1 })
}

const tl_personalForms = new TimelineLite();

// Clicking one answer will scroll to the next question
$(document).ready(function() {
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        event.preventDefault();
        $(target).css({ "display": "flex" })

        if (target[0] === $('.forms')[0]) {
          tl_personalForms.to(".forms, .form-title", 1.5, { opacity: 1 })
            .to(".personalForms", 1.5, { opacity: 1 })
        } else {
          TweenLite.to($(target), 2, { opacity: 1 })
        }

        // Scrolls to the element & focuses it
        TweenLite.to($('html, body'), 1.5, {
          scrollTop: target.offset().top,
          onComplete: function() {
            console
            $(target).focus();
            if ($(target).is(":focus")) {
              return false;
            } else {
              $(target).attr('tabindex', '-1');
              $(target).focus();
            }
          }
        })
      }
    }
  })
})
