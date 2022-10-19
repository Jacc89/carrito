import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ServicesCartComponent } from './services/services-cart/services-cart.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent,
    ProductComponent,
    ServicesCartComponent
  ],
  imports: [
    CommonModule
  ], exports:[
    HeaderComponent,
    CartComponent,
    ProductComponent,
    ServicesCartComponent
  ]
})
export class CarsModule { }
