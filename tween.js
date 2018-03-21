$(document).ready(function() {
  const tl_title = new TimelineLite();
  const tl_pq = new TimelineLite();
  const tl_mq = new TimelineLite();

  //Stuff on initial loading
  $('.heading').css({ "display": "flex" });
  tl_title.to("html, body", 0.75, { scrollTop: 0 })
    .to("#main-title, .heading", 1.5, { opacity: 1 })
    .to("#subtitle", 1.25, { opacity: 1 })
    .to("#begin-btn", 1, { opacity: 1 });

  // Handling the clicks and rendering to next item
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

        if (target[0].id === 'pq') {
          tl_pq.to("#pq, #pq-title", 1.5, { opacity: 1 })
            .to("#pq-forms", 1.5, { opacity: 1 });
        } else if (target[0].id === 'mq') {
          tl_mq.to("#mq, #mq-title", 1.5, { opacity: 1 })
            .to("#mq-forms", 1.5, { opacity: 1 })
        } else {
          TweenLite.to($(target), 2, { opacity: 1 })
        }

        // Scrolls to the element & focuses it
        TweenLite.to($('html, body'), 1.5, {
          scrollTop: target.offset().top - 200,
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
  });
});
