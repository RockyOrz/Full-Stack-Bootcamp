import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { MatInputModule } from '@angular/material/input';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { JobBoardComponent } from './components/job-board/job-board.component';
import { EmployerDashboardComponent } from './components/employer-dashboard/employer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    JobBoardComponent,
    EmployerDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
