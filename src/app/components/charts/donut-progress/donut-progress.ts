import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsCoreOption, EChartsType } from 'echarts/core';
import { echarts } from '../../../custom-echarts';
import { PieSeriesOption } from 'echarts/charts';

@Component({
  selector: 'app-donut-progress',
  imports: [NgxEchartsDirective],
  templateUrl: './donut-progress.html',
  styleUrls: ['./donut-progress.scss'],
})
export class DonutProgress implements OnChanges {
  @Input() progress = 0;
  @Input() label = '';
  @Input() progressColor1 = '#4CAF50'; // Default green color
  @Input() progressColor2 = '#6CAAB0'; // Default green color

  echartInstance?: EChartsType;
  hasInitialRendered = false;

  series: PieSeriesOption[] = [
    {
      type: 'pie',
      radius: ['80%', '100%'], // donut
      startAngle: 90,
      emphasis: { disabled: true },
      animationDuration: 0,
      label: { show: false },
      data: [
        {
          id: 'progress',
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
          id: 'remainder',
          name: 'Background',
          value: 100,
          itemStyle: {
            color: 'var(--donut-gray-bg)', // light gray background
          },
        },
      ],
    },
  ];
  options: EChartsCoreOption = {
    series: this.series,
  };

  @HostListener('window:resize')
    onWindowResize() {
      this.echartInstance?.resize();
    }


  ngOnChanges(changes: SimpleChanges): void {
    if(!this.echartInstance) return;
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
      if(this.hasInitialRendered) return;
      this.hasInitialRendered = true;
      this.updateProgress();
    });
    
  }

  async updateProgress() {
    if (!this.echartInstance) return;
    const series: PieSeriesOption[] = [
      {
        type: 'pie',
        radius: ['80%', '100%'], // donut
        startAngle: 90,
        label: { show: false },
        emphasis: { disabled: true },
        animationDurationUpdate: 500,
        data: [
          {
            id: 'progress',
            name: 'Progress',
            value: this.progress,
            itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: this.progressColor1 },
              { offset: 1, color: this.progressColor2 },
            ]),
              borderRadius: 50,
            },
            emphasis: { disabled: true },
          },
          {
            id: 'remainder',
            name: 'Background',
            value: 100 - this.progress,
            itemStyle: {
              color: 'var(--donut-gray-bg)', // light gray background
            },
            emphasis: { disabled: true },
          },
        ],
      }
    ];

    const graphic = [
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
    ]
    this.options = ({
      series,
      graphic: graphic,
    })
  }
      
}
