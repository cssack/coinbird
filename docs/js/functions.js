function toggleMenu(){
  [].forEach.call(document.querySelectorAll('.burger-menu'), el => {
    el.classList.toggle('active');
  })
  document.querySelector('#main-menu').classList.toggle('show');
}

function toggleTheme(){
  let darkStyleSheet = document.querySelector('#dark-stylesheet');
  let lightStyleSheet = document.querySelector('#light-stylesheet');
  darkStyleSheet.disabled = !darkStyleSheet.disabled;
  lightStyleSheet.disabled = !lightStyleSheet.disabled;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}