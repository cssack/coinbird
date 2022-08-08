async function startup(){
  await renderComponents();
	AOS.init();
	registerMouseOverExplanations();
}

// opens or closes the menu
function toggleMenu(){
  [].forEach.call(document.querySelectorAll('.burger-menu'), el => {
    el.classList.toggle('active');
  })
  document.querySelector('#main-menu').classList.toggle('show');
  document.querySelector('main').classList.toggle('d-none')
}

// used to quickly add reuseable components
async function renderComponents(){
  let replacedAtLeastOneElement = false;
  var components = document.querySelectorAll("component");

  for (let idx = 0; idx < components.length; idx++){
    let component = components[idx];
    let insideTemplate = document.querySelector("#template-" + component.id);
    if (insideTemplate != null){
      component.outerHTML = insideTemplate.innerHTML;
      continue;
    }
    let response = await fetch("components/" + component.id + ".html")
    component.outerHTML = await response.text();
  }
  
  // here we ensure that nested components will be rendered as well
  if (replacedAtLeastOneElement) 
    renderComponents();
}

// switches between a light theme and a dark theme
function toggleColorScheme(){
  toggleCss('#dark-stylesheet');
  toggleCss('#light-stylesheet');
}
function toggleCss(selector){
  let stylesheet = document.querySelector(selector);
  stylesheet.disabled = !stylesheet.disabled;
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