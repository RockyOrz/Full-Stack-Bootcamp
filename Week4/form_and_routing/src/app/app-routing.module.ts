import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path: 'mdf', component: ModelDrivenFormComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'add-student', component: AddStudentComponent},
  {path: 'student/:id', component: StudentComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
