import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherFormComponent } from './pages/weather-form/weather-form.component';
import { CardFormComponent } from './pages/weather-form/components/card-form/card-form.component';
import { CardInfoComponent } from './pages/weather-form/components/card-info/card-info.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherFormComponent,
    CardFormComponent,
    CardInfoComponent,
    NotFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
