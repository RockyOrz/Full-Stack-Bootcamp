import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Achievements', url: '/folder/Achievements', icon: 'ribbon' },
    { title: 'To Do List', url: '/folder/ToDoList', icon: 'list' },
    { title: 'Add Task', url: '/folder/NewTask', icon: 'add-circle' },
    { title: 'Goals', url: '/folder/Goals', icon: 'bookmarks' },
    { title: 'Add Goal', url: '/folder/NewGoal', icon: 'add-circle' },
    { title: 'Notes', url: '/folder/Notes', icon: 'book' },
    { title: 'Add Notes', url: '/folder/NewNote', icon: 'add-circle' },
    { title: 'Video Diary', url: '/folder/VideoDiary', icon: 'aperture' },
    { title: 'Images Diary', url: '/folder/ImagesDiary', icon: 'images' },
  ];
}
