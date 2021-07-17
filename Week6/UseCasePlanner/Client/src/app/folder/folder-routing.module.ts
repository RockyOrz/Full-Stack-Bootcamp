import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { AchievementsPage } from './achievements/achievements.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'achievements',
    loadChildren: () => import('./achievements/achievements.module').then( m => m.AchievementsPageModule)
  },
  {
    path: 'to-do-list',
    loadChildren: () => import('./to-do-list/to-do-list.module').then( m => m.ToDoListPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./add-task/add-task.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'add-goal',
    loadChildren: () => import('./add-goal/add-goal.module').then( m => m.AddGoalPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'add-note',
    loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'video-diary',
    loadChildren: () => import('./video-diary/video-diary.module').then( m => m.VideoDiaryPageModule)
  },
  {
    path: 'images-diary',
    loadChildren: () => import('./images-diary/images-diary.module').then( m => m.ImagesDiaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
