"use client";
import {Bar, Line, Pie} from 'react-chartjs-2'
import {createBarChartData, setBarChartOptions} from "./charts/bar";
import { createLineChartData, setLineChartOptions } from "./charts/line";
import { createPieChartData, setPieChartOptions } from "./charts/pie";
import { DEFAULT_DATA } from "./charts/constants";
import { useState } from "react";
import DataContext from "@/app/DataContext";
import DataForm from "@/components/DataForm";
import styles from './page.module.css';
import {
  ArcElement, BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";

// Chart.register(LinearScale, CategoryScale, ArcElement, LineElement, PointElement, BarElement, Tooltip, Title, Legend);


export default function Home() {
  const [data, setData] = useState(DEFAULT_DATA);
  const [theme, setTheme] = useState(0);
  const value = { data, setData };

  const changeThemeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
  }
  return (
    <main>
      <label>Theme</label>
      <select onChange={changeThemeHandler}>
        <option value={0}>Lighter</option>
        <option value={1}>Darker</option>
      </select>
      <DataContext.Provider value={value}>
        <DataForm />
        <div className={styles.container}>
          <div className={styles.chart} aria-label={"Bar Chart"}>
            <Bar
              title={DEFAULT_DATA.title}
              data={createBarChartData(DEFAULT_DATA, theme)}
              options={setBarChartOptions(DEFAULT_DATA.title + " bar chart")}
            />
          </div>
          <div className={styles.chart}>
            <Line
                title={DEFAULT_DATA.title}
                data={createLineChartData(DEFAULT_DATA, theme)}
                options={setLineChartOptions(DEFAULT_DATA.title + " line chart")}
            />
          </div>
          <div className={styles.chart}>
            {/*<Pie*/}
            {/*    title={DEFAULT_DATA.title}*/}
            {/*    data={createPieChartData(DEFAULT_DATA, theme)}*/}
            {/*    options={setPieChartOptions(DEFAULT_DATA.title + " pie chart")}*/}
            {/*/>*/}
          </div>
        </div>
      </DataContext.Provider>
    </main>
  );
}
