
const frames = document.querySelectorAll('.js-frame');
const windowHeight = window.innerHeight;
const framesArray = [...frames];
console.log(frames, framesArray)
const navElements = document.querySelectorAll('.js-page-nav li');
const btnElements = document.querySelectorAll('js-scroll');
const btnElementsArray = [...btnElements];

let options = {
  // root: document.querySelector(''),
  rootMargin: '108px',
  threshold: 0.5,
}

let callback = function(entries, observed) {
  const intersectedEl = entries.find(el => {
    return el.isIntersecting === true;
  });
  const classes = intersectedEl?.target?.className || null;
  const i = framesArray.findIndex(el => {
    return el.className === classes;
  });

setSelectorActivity(i);
};

let observed = new IntersectionObserver(callback, options);

// let target = document.querySelector('listItem');


for (let i = 0; i < frames.length; i++) {
  observed.observe(frames[i]);
};

const setSelectorActivity = function  (index) {
  if (index >= 0) {
    for (let i = 0; i < navElements.length; i++) {
      navElements[i].classList.remove('selected');
    }
    navElements[index].classList.add('selected');
  }
};

for(let i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener('click', () => handleScroll(i));
};

function handleScroll(i) {
  window.scrollTo({
    top: i * windowHeight,
    behavior: 'smooth'
  });
}

for(let i = 0; i < btnElements.length; i++) {
  btnElements[i].addEventListener('click', () => handleScroll(i));
};