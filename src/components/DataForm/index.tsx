"use client"

import { FC, Fragment, useContext } from "react";
import DataContext from "@/app/DataContext";
import {BaseData} from "@/app/charts/types";


const DataForm: FC<{}> = () => {
  const { data, setData } = useContext(DataContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, label: String, index: number) => {

    setData({
      ...data,
      dataset:
        data.dataset.map((d: BaseData, i:number) => {
          if (i != index) {
            return d;
          }
          let newData = {...d};
          newData.data[label] = event.target.value;
          return newData;
        })
    });
  }
    return (
    <>
      {data.dataset.map((dataSet, i) => (
        <>
          <div key={`dataSet-${i}`}>{dataSet.label}</div>
          {Object.entries(dataSet.data).map(([label, value]) => (
            <Fragment key={label}>
              <label>{label}</label>
              <input value={value}  onChange={(e) => handleChange(e, label, i)}/>
            </Fragment>
          ))}
        </>
      ))}
    </>
    );
};

export default DataForm;
export {DataContext};
