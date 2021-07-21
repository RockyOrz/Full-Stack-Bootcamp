import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Achievement', url: '/Achievements', icon: 'trophy' },
    { title: 'ToDo List', url: '/Todo List', icon: 'footsteps' },
    { title: 'Add ToDo', url: '/Add ToDo', icon: 'add' },
    { title: 'Notes', url: '/Notes', icon: 'reader' },
    { title: 'Add Note', url: '/Add Note', icon: 'add' },
    { title: 'Video Diary', url: '/Video Diary', icon: 'play' },
    { title: 'Image Diary', url: '/Image Diary', icon: 'image' },
  ];
  constructor() {}
}
