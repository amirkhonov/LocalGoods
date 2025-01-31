import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "../../shared/components/modal/modal.module";

import { FarmerComponent } from './farmer.component';
import { FarmerProductsComponent } from './farmer-products/farmer-products.component';
import { FarmerFarmsComponent } from './farmer-farms/farmer-farms.component';
import { FarmerFarmComponent } from './farmer-farms/farmer-farm/farmer-farm.component';
import { FarmerProductComponent } from './farmer-products/farmer-product/farmer-product.component';

@NgModule({
  declarations: [
    FarmerComponent,
    FarmerProductsComponent,
    FarmerFarmsComponent,
    FarmerFarmComponent,
    FarmerProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: FarmerComponent,
      children: [{path: ':id', component: FarmerProductsComponent}]
    }
    ]),
    FormsModule,
    ModalModule
  ]
})
export class FarmerModule { }
