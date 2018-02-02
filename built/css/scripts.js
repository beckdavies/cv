function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 20,
  headerEl = document.getElementById('js-header');
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add("is-smaller");
  } else {
    headerEl.classList.remove("is-smaller");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);