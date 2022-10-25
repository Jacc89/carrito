import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public List: any;
  public filterCategory : any;
  searchKey: string = "";
  public page!: number;

  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.service.getProduct()
    .subscribe((res: any)=>{
      this.List = res;
      this.filterCategory = res;
      this.List.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category === "men's clothing" ){
          a.category ="fashion"
        }
        Object.assign(a, {quantity:1, total:a.price});
        
      });
      console.log(this.List)
    });
    this.service.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addToCart(item:any){
    this.service.addToCart(item);

  }
  filter(category:string){
    this.filterCategory = this.List
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
        
      }
      console.log(a);
    })
  }

}
