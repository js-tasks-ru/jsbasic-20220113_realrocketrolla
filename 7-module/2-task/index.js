import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  
  constructor() {
    this.elem = createElement(
      `<!--Корневой элемент Modal-->
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>
    
        <div class="modal__inner">
          <div class="modal__header">
            <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
    
            <h3 class="modal__title">
              Заголовок
            </h3>
          </div>
    
          <div class="modal__body">
            Тело окна
          </div>
        </div>`
    );
    this.closeX();
    this.closeEsc();
  }

  open() {
    let body = document.querySelector('body');
    body.append(this.elem);
    body.classList.add('is-modal-open');
    console.log(body);
  }

  setTitle(title) {
    let modalTitle = this.elem.querySelector('.modal__title');
    modalTitle.innerHTML = title;
  }

  setBody(body) {
    let modalBody = this.elem.querySelector('.modal__body');
    modalBody.innerHTML = '';
    modalBody.append(body);
  }

  close() {
    let body = document.querySelector('body');
    body.classList.remove('is-modal-open');
    body.lastElementChild.remove();
  }

  closeX() {
    let body = document.querySelector('body');
    let button = this.elem.querySelector('.modal__close');
    button.addEventListener('click', function() {
      body.classList.remove('is-modal-open');
      body.lastElementChild.remove();
    });
  }

  closeEsc() {
    let body = document.querySelector('body');
    document.addEventListener('keydown', function closeModalWindow(event) {
      if (event.code === 'Escape' && body.classList.contains('is-modal-open')) {
        body.classList.remove('is-modal-open');
        body.lastElementChild.remove();
      }
    });
    document.removeEventListener('keydown', function closeModalWindow(){});
  }
}
