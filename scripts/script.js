let moving = 0;
let carousel = [...document.querySelector('.about-easy-web__carousel-list').children];
let leftButton = document.querySelector('.about-easy-web__left-arrow');
let rightButton = document.querySelector('.about-easy-web__right-arrow');
leftButton.disabled = true;
let MIN = 0;
let MAX = carousel.length - 3;

let ratesMobileCarousel = [...document.querySelector('.rates__carousel-list').children];
let index = 0;
let ratesCarouselButtons = [...document.querySelector('.rates__carousel-buttons').children];
let buttons = ratesCarouselButtons.map(x => x.children[0]);


leftButton.addEventListener('click', (e) => {
  moving--;

  if (moving === MIN) {
    leftButton.disabled = true;
    leftButton.classList.remove('about-easy-web__arrow--blue');
  }

  if (moving > MIN && moving < MAX) {
    rightButton.disabled = false;
    rightButton.classList.add('about-easy-web__arrow--blue');
  }

  movingDesktopCarousel(moving);
  
});

rightButton.addEventListener('click', (e) => {

  moving++;

  if (moving === MAX) {
    rightButton.disabled = true;
    rightButton.classList.remove('about-easy-web__arrow--blue');
  } 

  if (moving > MIN && moving < MAX) {
    leftButton.disabled = false;
    leftButton.classList.add('about-easy-web__arrow--blue');
  }

  movingDesktopCarousel(moving);
});

function movingDesktopCarousel (moving) {
  for (let i = 0; i < carousel.length; i++) {
    carousel[i].style.transition = '500ms';
    carousel[i].style.transform = `translateX(-${moving * (carousel[i].clientWidth + 24)}px)`;
  }
}

for (let i = 0; i < [...buttons].length; i++) {
  buttons[0].style.backgroundColor = '#004EFF';

  buttons[i].addEventListener('click', (e) => {
    grayButtons(buttons);

    index = i;

    if (index === i) {
      buttons[i].style.backgroundColor = '#004EFF';
    }
    
    moveMobileCarousel(index);
  })
}

function grayButtons (b) {
  for (let i = 0; i < [...buttons].length; i++) {
    buttons[i].style.backgroundColor = '#F6F7FB';
  }
}

function moveMobileCarousel (index) {
  for (let i = 0; i < ratesMobileCarousel.length; i++) {
    ratesMobileCarousel[i].style.transition = '500ms';
    ratesMobileCarousel[i].style.transform = `translateX(-${index * (ratesMobileCarousel[i].clientWidth + 12)}px)`;
  }
}
