import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { CartRoutingModule } from './cart-routing.module';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module



@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent,
    ProductComponent,
    FilterPipe,
    
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ], 
  exports:[
    HeaderComponent,
    CartComponent,
    ProductComponent,
    FilterPipe,
    NgxPaginationModule
    
  ]
})
export class CarsModule { }
