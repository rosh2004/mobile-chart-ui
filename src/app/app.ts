import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { DurationSelect } from "./components/duration-select/duration-select";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, DurationSelect]
})
export class App {
  protected readonly title = signal('chart-ui-app');

}
