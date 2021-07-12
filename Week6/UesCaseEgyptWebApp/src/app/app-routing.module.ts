import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IdeaComponent } from './components/idea/idea.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: WeatherComponent },
  {
    path: 'weather/:name/:springN/:springM/:summerN/:summerM/:winterN/:winterM/:autumnN/:autumnM/:visitFrom/:visitTo',
    component: WeatherDetailsComponent,
  },
  { path: 'idea', component: IdeaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
