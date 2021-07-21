import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Todo List',
    pathMatch: 'full'
  },
  {
    path: 'Achievements',
    loadChildren: () => import('./pages/achievements/achievements.module').then( m => m.AchievementsPageModule)
  },
  {
    path: 'Todo List',
    loadChildren: () => import('./pages/todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
  {
    path: 'Add ToDo',
    loadChildren: () => import('./pages/add-todo/add-todo.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'Notes',
    loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'Add Note',
    loadChildren: () => import('./pages/add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'Video Diary',
    loadChildren: () => import('./pages/video-diary/video-diary.module').then( m => m.VideoDiaryPageModule)
  },
  {
    path: 'Image Diary',
    loadChildren: () => import('./pages/image-diary/image-diary.module').then( m => m.ImageDiaryPageModule)
  },
  {
    path: 'todo-list',
    loadChildren: () => import('./pages/todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./pages/add-todo/add-todo.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'add-note',
    loadChildren: () => import('./pages/add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'video-diary',
    loadChildren: () => import('./pages/video-diary/video-diary.module').then( m => m.VideoDiaryPageModule)
  },
  {
    path: 'image-diary',
    loadChildren: () => import('./pages/image-diary/image-diary.module').then( m => m.ImageDiaryPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
