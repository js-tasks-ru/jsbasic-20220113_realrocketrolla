import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};

    this.elem = createElement (
      `<div class="products-grid">
      <div class="products-grid__inner">
        <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
      </div>
    </div>`
    );
    
    this.createProductsGridInner();
    
  }

  createProductsGridInner() {
    let gridInner = this.elem.querySelector('.products-grid__inner');
    for (let product of this.products) {
      let productCard = new ProductCard(product);
      gridInner.append(productCard.elem);
    } 
  }

  updateFilter(filters) {
    let gridInner = this.elem.querySelector('.products-grid__inner');
    gridInner.innerHTML = '';
    this.filters = Object.assign(this.filters, filters);
    
    for (let product of this.products) {
      if (this.filters.noNuts === true && product.nuts === true) {
        continue;
      }
      if (this.filters.vegeterianOnly === true && product.vegeterian !== true) {
        continue;
      }
      if (this.filters.maxSpiciness !== undefined && this.filters.maxSpiciness < product.spiciness ) {
        continue;
      }
      if (this.filters.category !== undefined && this.filters.category != product.category) {
        continue;
      }
      let productCard = new ProductCard(product);
      gridInner.append(productCard.elem);
    }
  }
}