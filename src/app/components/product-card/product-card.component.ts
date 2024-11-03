import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: ProductType;
  // @Input() product: ProductType = {} as ProductType;

  constructor() { }

  @Output() orderClick = new EventEmitter<string>();
  public getProductTitle(productTitle: string): void {
    this.orderClick.emit(productTitle);
  }

}
