import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import CustomBarTheme from './custom-theme';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  BarChart,
  SVGRenderer,
  LegendComponent
]);
echarts.registerTheme('customBarTheme', CustomBarTheme);

export { echarts };
