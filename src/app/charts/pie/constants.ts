import { ArcElement, ChartOptions, LinearScale } from "chart.js";

export const DEFAULT_PIE_CHART_OPTIONS: ChartOptions<"pie"> = {
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

export const DEFAULT_PIE_REGISTRY_ITEMS = [LinearScale, ArcElement];