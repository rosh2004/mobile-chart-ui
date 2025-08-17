import { AfterViewInit, Component, HostListener, Input, OnChanges, OutputEmitterRef, SimpleChanges } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { ECharts, EChartsCoreOption, EChartsType } from 'echarts/core';
import { echarts } from './custom-echarts';
import { delay } from 'rxjs';

@Component({
  selector: 'app-donut-progress',
  imports: [NgxEchartsDirective],
  templateUrl: './donut-progress.html',
  styleUrls: ['./donut-progress.scss'],
  providers: [provideEchartsCore({ echarts })],
})
export class DonutProgress implements OnChanges {
  @Input() progress = 0;
  @Input() label = '';
  @Input() progressColor1 = '#4CAF50'; // Default green color
  @Input() progressColor2 = '#6CAAB0'; // Default green color

  echartInstance?: EChartsType;

  options: EChartsCoreOption = {
    series: [
      {
        type: 'pie',
        radius: ['80%', '100%'], // donut
        startAngle: 90,
        data: [
          {
            name: 'Progress',
            value: 0,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: this.progressColor1 },
                { offset: 1, color: this.progressColor2 },
              ]),
              borderRadius: 50,
            },
          },
          {
            name: 'Background',
            value: 100,
            itemStyle: {
              color: 'var(--donut-gray-bg)', // light gray background
            },
          },
        ],
        label: { show: false },
        hoverAnimation: false,
      },
    ],
  };

  @HostListener('window:resize')
    onWindowResize() {
      this.echartInstance?.resize();
    }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progress'] ) {
      this.updateProgress();
    }

    if( changes['progressColor1'] || changes['progressColor2'] ) {
      this.updateProgress();
    }
  }

  onChartInit(echartsInstance: EChartsType){
    this.echartInstance = echartsInstance;
    this.echartInstance.on('finished', () => {
      this.updateProgress();
    });
  }

  async updateProgress() {
    if (!this.echartInstance) return;
    this.echartInstance.setOption({
      series: [
        {
          type: 'pie',
          data: [
              {
                type: 'pie',
                name: 'Progress',
                value: this.progress,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: this.progressColor1 },
                    { offset: 1, color: this.progressColor2 },
                  ]),
                  borderRadius: 50,
                },
              },
              {
                type: 'pie',
                name: 'Background',
                value: 100 - this.progress,
                itemStyle: {
                  color: 'var(--donut-gray-bg)', // light gray background
                },
              },
            ],
        }
      ],
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: String(this.progress) + '%',
            fontSize: 22,
            fontWeight: 'bold',
            fill: 'var(--color-text)',
          },
        },
      ],
    });
  }
}
