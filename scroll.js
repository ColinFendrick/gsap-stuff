const controller = new ScrollMagic.Controller();

$(document).ready(function() {
  const scene = new ScrollMagic.Scene({ triggerElement: "#one", duration: 100 })
    .setPin("#one")
    .addTo(controller);
})