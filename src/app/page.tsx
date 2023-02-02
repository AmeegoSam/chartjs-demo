"use client";
import {Bar, Line, Pie} from 'react-chartjs-2'
import { createBarChartData } from "./charts/bar";
import { createLineChartData } from "./charts/line";
import { createPieChartData } from "./charts/pie";
import { DEFAULT_DATA } from "./charts/constants";
import { DEFAULT_BAR_CHART_OPTIONS } from "./charts/bar/constants";
import { DEFAULT_LINE_CHART_OPTIONS } from "./charts/line/constants";
import { DEFAULT_PIE_CHART_OPTIONS } from "./charts/pie/constants";
import { useState } from "react";
import DataContext from "@/app/DataContext";
import DataForm from "@/components/DataForm";
import styles from './page.module.css';


export default function Home() {
  const [data, setData] = useState(DEFAULT_DATA);
  const value = { data, setData };

  return (
    <main>
      <DataContext.Provider value={value}>
        <DataForm />
        <div className={styles.chart}>
          <Bar
            title={DEFAULT_DATA.title}
            data={createBarChartData(DEFAULT_DATA)}
            options={DEFAULT_BAR_CHART_OPTIONS}
          />
        </div>
        <div className={styles.chart}>
          <Line
              title={DEFAULT_DATA.title}
              data={createLineChartData(DEFAULT_DATA)}
              options={DEFAULT_LINE_CHART_OPTIONS}
          />
        </div>
        <div className={styles.chart}>
          <Pie
              title={DEFAULT_DATA.title}
              data={createPieChartData(DEFAULT_DATA)}
              options={DEFAULT_PIE_CHART_OPTIONS}
          />
        </div>
      </DataContext.Provider>
    </main>
  );
}
