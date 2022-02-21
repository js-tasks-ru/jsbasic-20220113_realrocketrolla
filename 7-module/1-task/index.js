import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.elem = createElement(
      `<!--Корневой элемент RibbonMenu-->
      <div class="ribbon">
        <!--Кнопка прокрутки влево-->
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
    
        <!--Ссылки на категории-->
        <nav class="ribbon__inner">
        </nav>
    
        <!--Кнопка прокрутки вправо-->
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>`
    );

    this.createRibbonItem();
    this.ribbonArrow();
    
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    let ribbonItems = ribbonInner.querySelectorAll('.ribbon__item');
    for (let i = 0; i < ribbonItems.length; i++) {
      ribbonItems[i].addEventListener('click', (event) => {
        event.preventDefault();
        ribbonItems.forEach(item => {
          item.classList.remove('ribbon__item_active');
        })
        ribbonItems[i].classList.add('ribbon__item_active');
      })
      ribbonItems[i].addEventListener('click', this.onClick);
    }
  }

  createRibbonItem() {
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    for (let category of this.categories) {
      let ribbonItem = createElement(
        `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`
      )
      ribbonInner.append(ribbonItem);
    } ribbonInner.firstElementChild.classList.add('ribbon__item_active');
    return (ribbonInner);
  }

  ribbonArrow() {
    let ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    let ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
    let ribbonInner = this.elem.querySelector('.ribbon__inner');

    ribbonArrowRight.addEventListener('click', function () {
      ribbonInner.scrollBy(350, 0);
    });

    ribbonArrowLeft.addEventListener('click', function () {
      ribbonInner.scrollBy(-350, 0);
    });

    ribbonInner.addEventListener('scroll', function () {
      if (ribbonInner.scrollLeft === 0) {
        ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      }

      let scrollRight = (ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth);
      if (scrollRight < 1) {
        ribbonArrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowRight.classList.add('ribbon__arrow_visible');
      }
    })
  }

  onClick = (event) => {
    let customEvent = new CustomEvent('ribbon-select', {
      bubbles: true,
      detail: event.currentTarget.dataset.id
    });
    this.elem.dispatchEvent(customEvent);
  };
}