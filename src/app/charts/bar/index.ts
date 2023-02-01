import {
  ChartData,
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { keys, values } from "lodash-es";

import { BaseData } from "../types";
import { COLORS } from "../constants";

Chart.register(LinearScale, CategoryScale, BarElement, Tooltip, Title);

export const createBarChartData = (data: BaseData): ChartData<"bar"> => ({
  labels: keys(data.dataset[0].data),
  datasets: data.dataset.map((dataset, i) => ({
    label: dataset.label,
    data: values(dataset.data),
    backgroundColor: COLORS[i],
  })),
});
