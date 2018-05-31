import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private productColumnTitle = {
    id: 'ID',
    product_name: 'Name',
    quantity: 'Quantity',
    price: 'Price'
  }
  private products = [
    { id: 1, product_name: 'Gskill Tridentz RGB 8GB(4GB x 2)', quantity: 4, price: 2000000 },
    { id: 2, product_name: 'Corsair Vengeange RGB RGB 16GB(8GB x 2)', quantity: 4, price: 2000000 },
  ];

  constructor() { }

  ngOnInit() {

  }

  showLocalCurrency(price: number) {
    return price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  }
}
