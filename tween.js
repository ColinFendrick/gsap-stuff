window.onload = function() {
  console.log('asdlf')
  const one = document.getElementById("one");
  TweenLite.to("#one", 1, { 
    opacity: 1
  })
}

$(function() {
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      console.log(event)
    })
})