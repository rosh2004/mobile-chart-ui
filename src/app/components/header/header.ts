import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isDarkMode = document.documentElement.classList.contains('dark');
  toggleDarkMode() {
    if(this.isDarkMode) {
      document.documentElement.classList.remove('dark');
      this.isDarkMode = false;
    } else {
      document.documentElement.classList.add('dark');
      this.isDarkMode = true;
    }
  }
}
