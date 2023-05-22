import Alpine from 'alpinejs'

window.Alpine = Alpine

// Import js for componenents
function importAll(r) {
  r.keys().forEach(r)
}

importAll(require.context("../../blocks/", true, /\/script\.js$/))

window.Alpine.start()

// Carousel
function changeCarouselVersionBasedOnScreen() {
  if (globalWidth < 1280) {
    document.querySelector('#carousel-mobile-1').checked = true;
  }
  if (globalWidth > 1280) {
    document.querySelector('#carousel-1').checked = true;
  }
}

let globalWidth = window.innerWidth
let onresize = function (e) {
  //note i need to pass the event as an argument to the function
  globalWidth = e.target.outerWidth;
  changeCarouselVersionBasedOnScreen()
}

changeCarouselVersionBasedOnScreen()
window.addEventListener("resize", onresize);
