import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal : number = 0;

  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(res =>{
      this.products = res;
      this.grandTotal = this.service.getTotalPrice();
    })
  }

  removeItem(item: any){
     this.service.removeCartItem(item);
  }

  emptyCart(){
    this.service.removeAllCart();
  }

}
