"use client";
import { ChartData } from "chart.js";
import { keys, values } from "lodash-es";
import { mainTheme } from "humi-design";

import { BaseData } from "../types";

export const createBarChartData = (data: BaseData): ChartData<"bar"> => ({
  labels: keys(data.dataset[0].data),
  datasets: data.dataset.map((dataset,i) => ({
    label: dataset.label,
    data: values(dataset.data),
    backgroundColor: values(mainTheme.colors)[i]?.[1]
  })),
});
