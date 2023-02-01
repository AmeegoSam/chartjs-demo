"use client"
import { DEFAULT_DATA } from "@/app/charts/constants";
import { FC, Fragment, useState } from "react";

const DataForm: FC<{}> = () => {
  const [data, setData] = useState(DEFAULT_DATA);
  return (
    <>
      {data.dataset.map((dataSet, i) => (
        <>
          <div key={`dataSet-${i}`}>{dataSet.label}</div>
          {Object.entries(dataSet.data).map(([label, value]) => (
            <Fragment key={label}>
              <label>{label}</label>
              <input value={value} />
            </Fragment>
          ))}
        </>
      ))}
    </>
  );
};

export default DataForm;
