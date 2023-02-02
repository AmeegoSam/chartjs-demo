import {createContext} from "react";
import {DEFAULT_DATA} from "@/app/charts/constants";

const DataContext = createContext({
  data: DEFAULT_DATA,
  setData: () => {}
});

export default DataContext;