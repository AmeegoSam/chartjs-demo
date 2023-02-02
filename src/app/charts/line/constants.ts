import { LineElement, PointElement, ChartOptions, LinearScale } from "chart.js";

export const DEFAULT_LINE_CHART_OPTIONS: ChartOptions<"line"> = {
  scales: {
    y: { beginAtZero: true },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

export const DEFAULT_LINE_REGISTRY_ITEMS = [LinearScale, LineElement];