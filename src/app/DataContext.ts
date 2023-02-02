import {createContext} from "react";
import {DEFAULT_DATA} from "@/app/charts/constants";
import {BaseData} from "@/app/charts/types";


const DataContext = createContext({
  data: DEFAULT_DATA,
  setData: (data: BaseData) => {}
});

export default DataContext;