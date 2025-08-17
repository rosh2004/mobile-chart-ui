import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { DurationSelect } from "./components/duration-select/duration-select";
import { CustomBarChart } from "./components/charts/custom-bar-chart/custom-bar-chart";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, DurationSelect, CustomBarChart]
})
export class App {
  protected readonly title = signal('chart-ui-app');

}
