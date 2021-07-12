import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName: string = 'Rocky';
  home: boolean = true;

  isHome() {
    this.home = true;
  }

  isNotHome() {
    this.home = false;
  }
}
