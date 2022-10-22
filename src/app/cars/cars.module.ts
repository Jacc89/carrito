import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { CartRoutingModule } from './cart-routing.module';
import { FilterPipe } from './shared/filter.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent,
    ProductComponent,
    FilterPipe,
    
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ], 
  exports:[
    HeaderComponent,
    CartComponent,
    ProductComponent,
    FilterPipe
    
  ]
})
export class CarsModule { }
