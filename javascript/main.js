/*const frames = document.querySelectorAll('frame');
const windowHeight = window.innerHeight;
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  frames.forEach(function(frame, i) {
    console.log(frame.offsetTop < scrollTop + windowHeight/2, scrollTop < frame.offsetTop + windowHeight/2, frame.offsetTop < scrollTop + windowHeight/2 && scrollTop < frame.offsetTop + windowHeight/2, i);
    if (frame.offsetTop < scrollTop + windowHeight/2 && scrollTop < frame.offsetTop + windowHeight/2) {
      
    }
  });
});
*/
const frames = document.querySelectorAll('.js-frame');
const windowHeight = window.innerHeight;
const framesArray = [...frames];
console.log(frames, framesArray)
const navElements = document.querySelectorAll('.js-page-nav li');
const btnElements = document.querySelectorAll('js-scroll');
const btnElementsArray = [...btnElements];

let options = {
  // root: document.querySelector(''),
  rootMargin: '0px',
  threshold: 0.5,
}

let callback = function(entries, observed) {
  if (entries[0].isIntersecting === true) {
    const i = framesArray.findIndex(el => {
      return el.className === entries[0].target.className;
    });

    setSelectorActivity(i);

    console.log(entries, entries[0].target.className, i);
  }
};

let observed = new IntersectionObserver(callback, options);

// let target = document.querySelector('listItem');


for (let i = 0; i < frames.length; i++) {
  observed.observe(frames[i]);
};

const setSelectorActivity = function  (index) {
  
  for (let i = 0; i < navElements.length; i++) {
  navElements[i].classList.remove('selected');
}
navElements[index].classList.add('selected');
};


for(let i = 0; i < navElements.length; i++) {
  console.log('for', i);
navElements[i].addEventListener('click', () => handleScroll(i));
};

function handleScroll(i) {
  console.log('handleScroll', i);
  window.scrollTo({
    top: i * windowHeight,
    behavior: 'smooth'
  });
}

for(let i = 0; i < btnElements.length; i++) {
  console.log('for', i);
btnElements[i].addEventListener('click', () => handleScroll(i));
};