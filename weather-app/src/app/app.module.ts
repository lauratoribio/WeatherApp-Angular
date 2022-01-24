import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherFormComponent } from './pages/weather-form/weather-form.component';
import { CardFormComponent } from './pages/components/card-form/card-form.component';
import { CardInfoComponent } from './pages/components/card-info/card-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherFormComponent,
    CardFormComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
