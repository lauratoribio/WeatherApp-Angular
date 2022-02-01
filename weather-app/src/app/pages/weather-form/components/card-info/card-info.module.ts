import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardInfoRoutingModule } from './card-info-routing.module';
import { CardFormComponent  } from '../card-form/card-form.component';

@NgModule({
    declarations: [
        CardFormComponent
    ],
    imports: [
      CommonModule,
      CardInfoRoutingModule
    ]
  })
  export class CardInfoModule { }
