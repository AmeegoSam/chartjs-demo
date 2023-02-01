"use client";
import { BarChart } from "humi-design";
import { createBarChartData } from "./charts/bar";
import { DEFAULT_DATA } from "./charts/constants";
import { DEFAULT_BAR_CHART_OPTIONS } from "./charts/bar/constants";
import DataForm from "@/components/DataForm";

export default function Home() {
  return (
    <main>
      <DataForm />
      <BarChart
        title={DEFAULT_DATA.title}
        data={createBarChartData(DEFAULT_DATA)}
        type="bar"
        options={DEFAULT_BAR_CHART_OPTIONS}
      />
    </main>
  );
}
