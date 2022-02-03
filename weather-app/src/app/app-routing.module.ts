import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoComponent } from './pages/weather-form/components/card-info/card-info.component';
import { WeatherFormComponent } from './pages/weather-form/weather-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'weather-form', pathMatch: 'full'},
    { path: 'weather-form', component: WeatherFormComponent },

    { path: 'weather-form/:cityName', component: CardInfoComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' },

   

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }