// sleep-theme.ts
const CustomBarTheme = {
  // Optional global palette (used when a series has no explicit color)
  color: [
    'var(--color-chart-pink, #f851ee)',
    'var(--color-chart-orange, #f1c16f)'
  ],

  // Text defaults
  textStyle: {
    color: 'var(--bar-x-axis-label-color, #dcdde1)',
  },

  grid: {
    top: 30,
    bottom: 60,
    left: 0,
    right: 0,
    containLabel: false
  },

  // Axis defaults
  categoryAxis: {
    
    axisLine: { show: false },
    axisLabel: {
      color: 'var(--bar-x-axis-label-color, #dcdde1)',
      fontWeight: 'bold'
    },
    splitLine: { show: false }
  },
  valueAxis: {
    axisLine: { show: false },
    axisLabel: {
      color: 'var(--bar-y-axis-label-color, #4d506a)',
      fontWeight: 'bold',
    },
    splitLine: {
      show: true,
      lineStyle: { color: 'var(--bar-split-line-color, #353855)' }
    }
  },

  // Legend defaults
  legend: {
    show: true,
    left: 0,
    bottom: 0,
    itemWidth: 18,
    itemHeight: 18,
    itemGap: 30,
    textStyle: {
      color: 'var(--bar-x-axis-label-color, #dcdde1)',
      fontSize: 12,
      fontWeight: 'bold'
    }
    // NOTE: legend.icon is best kept per-chart if you need 'circle'
  },

  // Bar series defaults (applies to all bar series unless overridden)
  bar: {
    barWidth: 10,
    itemStyle: {
      borderRadius: 50,
      shadowBlur: 8,
      shadowOffsetX: 6,
      shadowOffsetY: 10,
      shadowColor: 'rgba(0,0,0,0.25)' // safe default; override per-series
    }
  }
};

export default CustomBarTheme;
