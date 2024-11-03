import {Component, Input} from '@angular/core';

@Component({
  selector: 'product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.scss']
})
export class ProductCountComponent {

  @Input() count: number = 1;

  constructor() { }

  decreaseCount() {
    if (this.count > 1) {  //если количество товаров есть куда уменьшать, уменьшить (не до 0)
      this.count--;
    }
  }

  increaseCount() {
    this.count++;
  }

}
