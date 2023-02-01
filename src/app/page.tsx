"use client";
import { Bar } from 'react-chartjs-2'
import { createBarChartData } from "./charts/bar";
import { DEFAULT_DATA } from "./charts/constants";
import { DEFAULT_BAR_CHART_OPTIONS } from "./charts/bar/constants";
import DataForm from "@/components/DataForm";

export default function Home() {
  return (
    <main>
      <DataForm />
      <Bar
        title={DEFAULT_DATA.title}
        data={createBarChartData(DEFAULT_DATA)}
        options={DEFAULT_BAR_CHART_OPTIONS}
      />
    </main>
  );
}
