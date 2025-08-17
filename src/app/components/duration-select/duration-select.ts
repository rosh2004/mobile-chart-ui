import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-duration-select',
  imports: [CommonModule],
  templateUrl: './duration-select.html',
  styleUrl: './duration-select.scss'
})
export class DurationSelect {
  @ViewChild("chart") chart?: ChartComponent;

  @Input() selectedDuration: 'DAY' | 'WEEK' | 'MONTH' = 'WEEK';

  durationOptions: Array<'DAY' | 'WEEK' | 'MONTH'> = ['DAY', 'WEEK', 'MONTH'];
}
