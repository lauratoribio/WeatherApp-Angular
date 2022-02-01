import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoComponent } from './pages/weather-form/components/card-info/card-info.component';
import { WeatherFormComponent } from './pages/weather-form/weather-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'weather-form', pathMatch: 'full'},
    { path: 'weather-form', component: WeatherFormComponent },

    { path: 'weather-form/:cityName', component: CardInfoComponent},

    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' },

    { path: 'weather-form', loadChildren: () => 
      import('./pages/weather-form/weather-form.module').then(m => m.WeatherFormModule)},

    { path: 'card-form', loadChildren: () =>
    import('./pages/weather-form/components/card-form/card-form.module').then(m => m.CardFormModule)},

    { path: 'card-info', loadChildren: () =>
    import('./pages/weather-form/components/card-info/card-info.module').then(m => m.CardInfoModule)},

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }