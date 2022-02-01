import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherFormRoutingModule } from './weather-form-routing.module';
import { WeatherFormComponent } from './weather-form.component';

@NgModule({
    declarations: [
      WeatherFormComponent
    ],
    imports: [
      CommonModule,
      WeatherFormRoutingModule
    ]
  })
  
  export class WeatherFormModule { }