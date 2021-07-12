import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './components/weather/weather.component';
import { IdeaComponent } from './components/idea/idea.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { ImportantTextDirective } from './important-text.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    IdeaComponent,
    WeatherDetailsComponent,
    ImportantTextDirective,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
