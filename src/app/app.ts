import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { DurationSelect } from "./components/duration-select/duration-select";
import { CustomBarChart } from "./components/charts/custom-bar-chart/custom-bar-chart";
import { DonutProgress } from "./components/charts/donut-progress/donut-progress";
import { provideEchartsCore } from 'ngx-echarts';
import { echarts } from './custom-echarts';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, DurationSelect, CustomBarChart, DonutProgress],
  providers: [provideEchartsCore({ echarts })],
})
export class App {

}
