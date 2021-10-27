import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerDashboardComponent } from './components/employer-dashboard/employer-dashboard.component';
import { JobBoardComponent } from './components/job-board/job-board.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GuardGuard } from './services/authGuard/guard.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'job-board',
    component: JobBoardComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'employer-dashboard',
    component: EmployerDashboardComponent,
    canActivate: [GuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
