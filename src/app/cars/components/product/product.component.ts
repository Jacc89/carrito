import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public List: any;


  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.service.getProduct()
    .subscribe((res: any)=>{
      this.List = res;
    })
  }

}
