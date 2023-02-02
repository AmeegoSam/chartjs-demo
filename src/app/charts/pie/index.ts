import {
  ChartData,
  ChartOptions,
} from "chart.js";
import { keys, values } from "lodash-es";

import { BaseData } from "../types";
import { COLORS } from "../constants";
import {DEFAULT_PIE_CHART_OPTIONS} from "@/app/charts/pie/constants";

export const createPieChartData = (data: BaseData, theme: number): ChartData<"pie"> => ({
  labels: keys(data.dataset[0].data),
  datasets: data.dataset.map((dataset, i) => ({
    label: dataset.label,
    data: values(dataset.data),
    backgroundColor: COLORS[theme][i],
  })),
});

export const setPieChartOptions = (title: string): ChartOptions<"pie"> => ({
  ...DEFAULT_PIE_CHART_OPTIONS,
  plugins: {
    ...DEFAULT_PIE_CHART_OPTIONS.plugins,
    title: {
      display: true,
      text: title,
    },
  },
});