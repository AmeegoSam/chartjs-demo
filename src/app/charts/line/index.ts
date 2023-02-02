import {
  ChartData,
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  PointElement,
} from "chart.js";
import { keys, values } from "lodash-es";

import { BaseData } from "../types";
import { COLORS } from "../constants";

Chart.register(LinearScale, CategoryScale, LineElement, PointElement, Tooltip, Title);

export const createLineChartData = (data: BaseData): ChartData<"line"> => ({
  labels: keys(data.dataset[0].data),
  datasets: data.dataset.map((dataset, i) => ({
    label: dataset.label,
    data: values(dataset.data),
    backgroundColor: COLORS[i],
  })),
});
