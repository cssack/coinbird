// opens or closes the menu
function toggleMenu(){
  [].forEach.call(document.querySelectorAll('.burger-menu'), el => {
    el.classList.toggle('active');
  })
  document.querySelector('#main-menu').classList.toggle('show');
}

// switches between a light theme and a dark theme
function toggleTheme(){
  let darkStyleSheet = document.querySelector('#dark-stylesheet');
  let lightStyleSheet = document.querySelector('#light-stylesheet');
  darkStyleSheet.disabled = !darkStyleSheet.disabled;
  lightStyleSheet.disabled = !lightStyleSheet.disabled;
}

// here we add a css class to the body indicating if the mouse is left from the screen center or right.
function adaptMousePosition(evt, sender){
  document.body.classList.remove(evt.clientX < document.body.clientWidth/2 ? "mouse-right" : "mouse-left");
  document.body.classList.add(evt.clientX < document.body.clientWidth/2 ? "mouse-left" : "mouse-right");
}


// here we register an event handler registering whenever the mouse is over a explainable element.
// whenever the mouse is over such an element, the explainer target will be updated to contain the explanation
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