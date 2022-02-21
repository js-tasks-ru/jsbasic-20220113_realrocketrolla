import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(
      `<div class="carousel">
      <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
  
      <div class="carousel__inner">
        <!--Верстка слайда-->
      </div>`
    );
    this.carouselSlide();
    this.carouselArrow();

    let carouselInner = this.elem.querySelector('.carousel__inner');
    let carouselSlides = carouselInner.querySelectorAll('.carousel__slide');

    for (let i = 0; i < carouselSlides.length; i++) {
      let button = carouselSlides[i].querySelector('.carousel__button');
      button.addEventListener('click', () => {
        let customEvent = new CustomEvent('product-add', {
          bubbles: true,
          detail: this.slides[i].id 
        });
        this.elem.dispatchEvent(customEvent);
      });
    }
  }

  carouselSlide() {
    let carouselInner = this.elem.querySelector('.carousel__inner');
    for (let slide of this.slides) {
      let slid = createElement(
      `<div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${slide.price.toFixed(2)}</span>
              <div class="carousel__title">${slide.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
        </div>`
      );
      carouselInner.append(slid);
    } return (carouselInner);
  }

  carouselArrow() {
    let carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    let carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let carouselInner = this.elem.querySelector('.carousel__inner');
    let carouselSlide = carouselInner.querySelectorAll('.carousel__slide');
    
    carouselArrowLeft.style.display = 'none';
    let index = 0;

    carouselArrowRight.addEventListener('click', function carouselRight() {
      let carouselWidth = carouselInner.offsetWidth;
      if (carouselSlide[index] && index < (carouselSlide.length - 1)) {
        carouselInner.style.transform = 'translateX('+ (-carouselWidth * (index + 1)) + 'px)';
        index++;
      }
    });

    carouselArrowLeft.addEventListener('click', function carouselLeft() {
      let carouselWidth = carouselInner.offsetWidth;
      if (carouselSlide[index] && index >= 0) {
        carouselInner.style.transform = 'translateX('+ (-carouselWidth * index + carouselWidth) + 'px)';
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
} 