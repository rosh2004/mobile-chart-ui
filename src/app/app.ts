import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { DurationSelect } from "./components/duration-select/duration-select";
import { BarChart } from "./components/charts/bar-chart/bar-chart";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, DurationSelect, BarChart]
})
export class App {
  protected readonly title = signal('chart-ui-app');

}
