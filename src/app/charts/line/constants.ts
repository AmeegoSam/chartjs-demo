import { LineElement, PointElement, ChartOptions, LinearScale } from "chart.js";

export const DEFAULT_LINE_CHART_OPTIONS: ChartOptions<"line"> = {
  aspectRatio: 1,
  scales: {
    y: { beginAtZero: true },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

export const DEFAULT_LINE_REGISTRY_ITEMS = [LinearScale, LineElement];