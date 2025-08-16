import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('chart-ui-app');


  toggleDark() {
    document.documentElement.classList.toggle('dark');
  }
}
