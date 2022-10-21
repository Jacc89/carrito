import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  ApiUrl:string = 'https://fakestoreapi.com/products/';

  getProduct(){
    return this.http.get<any>(this.ApiUrl)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
