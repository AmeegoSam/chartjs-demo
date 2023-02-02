"use client";
import { Bar } from 'react-chartjs-2'
import { createBarChartData } from "./charts/bar";
import { DEFAULT_DATA } from "./charts/constants";
import { DEFAULT_BAR_CHART_OPTIONS } from "./charts/bar/constants";
import { useState } from "react";
import DataContext from "@/app/DataContext";
import DataForm from "@/components/DataForm";


export default function Home() {
  const [data, setData] = useState(DEFAULT_DATA);
  const value = { data, setData };

  return (
    <main>
      <DataContext.Provider value={value}>
        <DataForm />
        <Bar
          title={DEFAULT_DATA.title}
          data={createBarChartData(DEFAULT_DATA)}
          options={DEFAULT_BAR_CHART_OPTIONS}
        />
      </DataContext.Provider>
    </main>
  );
}
