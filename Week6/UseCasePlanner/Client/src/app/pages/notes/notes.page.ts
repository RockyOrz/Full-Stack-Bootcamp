import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  themes = {
    autumn: {
      primary: '#ff8f00',
      secondary: '#ffea00',
      tertiary: '#aeea00',
      dark: '#bf360c',
      medium: '#f9a825',
      light: '#fbc02d'
    },
    night: {
      primary: '#424242',
      secondary: '#90a4ae',
      tertiary: '#7044ff',
      dark: '#222428',
      medium: '#546e7a',
      light: '#424242'
    },
    neon: {
      primary: '#4fc3f7',
      secondary: '#ffab40',
      tertiary: '#7044ff',
      dark: '#222428',
      medium: '#989aa2',
      light: '#f4f5f8'
    }
  };

  constructor(private themeService: ThemeService) { }

  changeTheme(name: any) {
    this.themeService.setTheme(this.themes[name]);
  }

  ngOnInit() {
  }

}
