function initCarousel() {
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselSlide = document.querySelectorAll('.carousel__slide');
  let carouselWidth = carouselInner.offsetWidth;

  carouselArrowLeft.style.display = 'none';
  let index = 0;

  carouselArrowRight.addEventListener('click', function carouselRight() {
    if (carouselSlide[index] && index < (carouselSlide.length - 1)) {
      carouselInner.style.transform = 'translateX(' + (-carouselWidth * (index + 1)) + 'px)';
      index++;
    }
  });

  carouselArrowLeft.addEventListener('click', function carouselLeft() {
    if (carouselSlide[index] && index >= 0) {
      carouselInner.style.transform = 'translateX(' + (-carouselWidth * index + carouselWidth) + 'px)';
      index--;
    }
  });
  
  carouselArrowRight.addEventListener('click', function hiddenRight() {
    if (index === (carouselSlide.length - 1)) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }
    carouselArrowLeft.style.display = '';
  });

  carouselArrowLeft.addEventListener('click', function hiddenLeft() {
    if (index === 0) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }
    carouselArrowRight.style.display = '';
  });
}