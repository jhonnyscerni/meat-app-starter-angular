import { OrderService } from './order.service';
import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model';
import { RadionOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadionOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }


}
