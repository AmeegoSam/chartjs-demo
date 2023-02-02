import {
  ArcElement, BarElement,
  CategoryScale,
  Chart,
  ChartData,
  ChartOptions, Legend, LinearScale, LineElement, PointElement, Title, Tooltip,
} from "chart.js";
import { keys, values } from "lodash-es";

import { BaseData } from "../types";
import { COLORS } from "../constants";

import {DEFAULT_BAR_CHART_OPTIONS} from "@/app/charts/bar/constants";

Chart.register(LinearScale, CategoryScale, BarElement, Tooltip, Title, Legend);

export const createBarChartData = (data: BaseData, theme:number): ChartData<"bar"> => ({
  labels: keys(data.dataset[0].data),
  datasets: data.dataset.map((dataset, i) => ({
    label: dataset.label,
    data: values(dataset.data),
    backgroundColor: COLORS[theme][i],
  })),
});

export const setBarChartOptions = (title: string): ChartOptions<"bar"> => ({
  ...DEFAULT_BAR_CHART_OPTIONS,
  plugins: {
    ...DEFAULT_BAR_CHART_OPTIONS.plugins,
    title: {
      display: true,
      text: title,
    },
  },
});