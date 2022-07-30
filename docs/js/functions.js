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

function adaptMousePosition(evt, sender){
  if (evt.clientX < document.body.clientWidth/2){
    document.body.classList.remove("mouse-right")
    document.body.classList.add("mouse-left")
  }
  else{
    document.body.classList.remove("mouse-left")
    document.body.classList.add("mouse-right")
  }
}

function registerMouseOverExplanations(){
  [].forEach.call(document.querySelectorAll('[data-explanation][data-explanation-target]'), el => {

    el.addEventListener('mouseenter', (e) => {
      let target = document.querySelector(e.target.getAttribute("data-explanation-target"))

      target.style.opacity = 0;
      let explanation = e.target.getAttribute("data-explanation")
      setTimeout(() => {
          target.innerHTML = explanation
          target.style.opacity = 1;
      }, 300);
    });
  })
}