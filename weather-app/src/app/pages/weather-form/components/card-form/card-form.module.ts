import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardFormRoutingModule } from './card-form-routing.module';
import { CardFormComponent  } from './card-form.component';


@NgModule({
  declarations: [
    CardFormComponent
  ],
  imports: [
    CommonModule,
    CardFormRoutingModule
  ]
})
export class CardFormModule { }