import { Component } from '@angular/core';
import { MockServerService } from './mock-server.service';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { echarts } from './custom-echarts';
import { color, EChartsCoreOption } from 'echarts/core';
import { hmsToSeconds, secondsToHM } from '../../../shared/utils/time-utils';
import { count, min } from 'rxjs';

@Component({
  selector: 'app-custom-bar-chart',
  imports: [NgxEchartsDirective],
  templateUrl: './custom-bar-chart.html',
  styleUrl: './custom-bar-chart.scss',
  providers: [provideEchartsCore({ echarts })],
})
export class CustomBarChart {
  private readonly invisibleBaseLine = hmsToSeconds('7:30');
  options: EChartsCoreOption = {
    xAxis: {
      type: 'category',
      data: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      axisLine: false,
      axisLabel: {
        color: 'var(--bar-x-axis-label-color)', // gray-600 style
      },
    },
    grid: {
      left: 0,
      right: 0,
      containLabel: false  // important: prevents extra space for labels
    },
    yAxis: {
      type: 'value',
      min: hmsToSeconds('7:'),
      max: hmsToSeconds('23:00'),
      interval: hmsToSeconds('16:00'),
      
      axisLabel: {
        formatter: (value: number) => {
          return secondsToHM(value);
        },
        color: 'var(--bar-y-axis-label-color)', // gray-600 style
        fontWeight: 'bold',
      },
      splitLine: {
        lineStyle: {
        color: 'var(--bar-split-line-color)'
        }
      }
    },
    series: [
       {
        name: 'baseline',
        type: 'bar',
        stack: 'sleep',
        data: Array(7).fill(this.invisibleBaseLine),   // baseline for all days
        itemStyle: { color: 'transparent' },
        silent: true,                // no tooltip
        emphasis: { disabled: true },
        barWidth: '18%'
      },
      {
        stack: 'sleep',
        name: 'Abobve average',
        data: [
          hmsToSeconds('23:20') - this.invisibleBaseLine,
          hmsToSeconds('0'),
          hmsToSeconds('24:00') - this.invisibleBaseLine,
          hmsToSeconds('23:40') - this.invisibleBaseLine,
          hmsToSeconds('23') - this.invisibleBaseLine,
          hmsToSeconds('0'),
          hmsToSeconds('23:10') - this.invisibleBaseLine,
        ],
        type: 'bar',
        barWidth: 10,
        clip: false,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'var(--color-chart-pink)' },  // top
            { offset: 1, color: 'var(--color-chart-purple)' }   // bottom
          ]),
          borderRadius: 50, // Top-left and top-right corners rounded
          shadowColor: 'rgba(248, 81, 238, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 4,
          shadowOffsetY: 6,
        }
      },
      {
        stack: 'sleep',
        name: 'Below average',
        data: [
          hmsToSeconds('0'),
          hmsToSeconds('21:30') - this.invisibleBaseLine,
          hmsToSeconds('0'),
          hmsToSeconds('0'),
          hmsToSeconds('0'),
          hmsToSeconds('21') - this.invisibleBaseLine,
          hmsToSeconds('0'),
        ],
        type: 'bar',
        barWidth: 10,
        clip: false,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'var(--color-chart-yellow)' },  // top
            { offset: 1, color: 'var(--color-chart-orange)' }   // bottom
          ]), 
          borderRadius: 50, // Top-left and top-right corners rounded
          shadowColor: 'rgba(241, 193, 111, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 4,
          shadowOffsetY: 6,
        }
      },
      
    ],
  };

  mergeOption: any;
  loading = false;


  constructor(private api: MockServerService) {}

  // getData() {
  //   this.loading = true;
  //   this.api
  //     .getData()
  //     .then((data) => {
  //       this.mergeOption = { series: [{ data }] };
  //     })
  //     .then(() => {
  //       this.loading = false;
  //     });
  // }
}