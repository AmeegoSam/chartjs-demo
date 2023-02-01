import { BarElement, ChartOptions, LinearScale } from "chart.js";

export const DEFAULT_BAR_CHART_OPTIONS: ChartOptions<"bar"> = {
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

export const DEFAULT_BAR_REGISTRY_ITEMS = [LinearScale, BarElement];