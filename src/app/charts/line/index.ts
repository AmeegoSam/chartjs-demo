import {
  ArcElement, BarElement,
  CategoryScale,
  Chart,
  ChartData, ChartOptions, Legend, LinearScale, LineElement, PointElement, Title, Tooltip
} from "chart.js";
import { keys, values } from "lodash-es";

import { BaseData, BaseOptions } from "../types";
import { COLORS } from "../constants";
import {DEFAULT_LINE_CHART_OPTIONS} from "@/app/charts/line/constants";

Chart.register(LinearScale, CategoryScale, LineElement, PointElement, Tooltip, Title);

export const createLineChartData = (data: BaseData, theme: number): ChartData<"line"> => ({
  labels: keys(data.dataset[0].data),
  datasets: data.dataset.map((dataset, i) => ({
    label: dataset.label,
    data: values(dataset.data),
    backgroundColor: COLORS[theme][i],
  })),
});

export const setLineChartOptions = (title: string): ChartOptions<"line"> => ({
  ...DEFAULT_LINE_CHART_OPTIONS,
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: true
    }
  },
  plugins: {
    ...DEFAULT_LINE_CHART_OPTIONS.plugins,
    // legend: {
    //   display: false,
    // },
    title: {
      display: true,
      text: title,
    },
  },
});
