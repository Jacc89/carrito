import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
   public cartItemList : any = [];
   public productList = new BehaviorSubject<any>([]); 
   public search = new BehaviorSubject<string>(""); 

  ApiUrl:string = 'https://fakestoreapi.com/products/';

  getProduct(){
    return this.http.get<any>(this.ApiUrl)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product :any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice(): number{
    let  grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if (product.id== a.id) {
        this.cartItemList.splice(index,1); 
      }
    })
  }

  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }



}
