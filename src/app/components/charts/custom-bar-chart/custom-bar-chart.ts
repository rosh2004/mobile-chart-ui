import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { EChartsCoreOption } from 'echarts/core';
import { hmsToSeconds, secondsToHM } from '../../../shared/utils/time-utils';
import { echarts } from './custom-echarts';

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
      top: 30,
      bottom: 60,
      containLabel: false  // important: prevents extra space for labels
    },
    yAxis: {
      type: 'value',
      min: hmsToSeconds('7'),
      max: hmsToSeconds('23:00'),
      interval: hmsToSeconds('16:00'),
      
      axisLabel: {
        formatter: (value: number) => {
          return secondsToHM(value);
        },
        color: 'var(--bar-y-axis-label-color)', // gray-600 style
        fontWeight: 'bold',
        margin: 15
      },
      splitLine: {
        lineStyle: {
        color: 'var(--bar-split-line-color)'
        }
      }
    },
    series: [
       {
        name: '',
        type: 'bar',
        stack: 'sleep',
        data: Array(7).fill(this.invisibleBaseLine),   // baseline for all days
        itemStyle: { color: 'transparent' },
        silent: true,                // no tooltip
        emphasis: { disabled: true },
        barWidth: '20%',
        showLegendSymbol: false,
      },
      {
        stack: 'sleep',
        name: 'Above average',
        data: [
          hmsToSeconds('23:20') - this.invisibleBaseLine,
          hmsToSeconds('0'),
          hmsToSeconds('23:59') - this.invisibleBaseLine,
          hmsToSeconds('20:40') - this.invisibleBaseLine,
          hmsToSeconds('23') - this.invisibleBaseLine,
          hmsToSeconds('0'),
          hmsToSeconds('23:10') - this.invisibleBaseLine,
        ],
        type: 'bar',
        barWidth: '20%',
        emphasis: { disabled: true },
        clip: false,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'var(--color-chart-pink)' },  // top
            { offset: 1, color: 'var(--color-chart-purple)' }   // bottom
          ]),
          borderRadius: 50, // Top-left and top-right corners rounded
          shadowColor: 'rgba(248, 81, 238, 0.2)',
          shadowBlur: 8,
          shadowOffsetX: 6,
          shadowOffsetY: 8,
        }
      },
      {
        stack: 'sleep',
        name: 'Below average',
        data: [
          hmsToSeconds('0'),
          hmsToSeconds('19:30') - this.invisibleBaseLine,
          hmsToSeconds('0'),
          hmsToSeconds('0'),
          hmsToSeconds('0'),
          hmsToSeconds('21') - this.invisibleBaseLine,
          hmsToSeconds('0'),
        ],
        type: 'bar',
        barWidth: '20%',
        emphasis: { disabled: true },
        clip: false,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'var(--color-chart-yellow)' },  // top
            { offset: 1, color: 'var(--color-chart-orange)' }   // bottom
          ]), 
          borderRadius: 50, // Top-left and top-right corners rounded
          shadowColor: 'rgba(241, 193, 111, 0.2)',
          shadowBlur: 8,
          shadowOffsetX: 6,
          shadowOffsetY: 8,
        }
      },
    ],
    legend: {
      show: true,                // force legend visible
      orient: 'horizontal',      // or 'vertical'
      bottom: 0,                 // position at bottom
      icon: 'circle',  
      itemWidth: 18,           // 👈 icon width
      itemHeight: 18,             // circle instead of square
      itemGap: 30,
      textStyle: {
        color: 'var(--bar-x-axis-label-color)',
        fontSize: 12,
        fontweight: 'bold',
      },
      left: 0,
      emphasis: { disabled: true },
    },
  };

  mergeOption: any;
  loading = false;


}