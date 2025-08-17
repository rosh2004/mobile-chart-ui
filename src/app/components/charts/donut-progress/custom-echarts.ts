import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

import { GraphicComponent } from 'echarts/components';
echarts.use([
  TitleComponent,
  TooltipComponent,
  LineChart,
  BarChart,
  SVGRenderer,
  GraphicComponent,
  PieChart
]);

export { echarts };
