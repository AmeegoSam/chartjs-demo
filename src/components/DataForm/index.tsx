import { DEFAULT_DATA } from "@/app/charts/constants";
import { FC, Fragment, useState } from "react";
import { Field, Grid } from "humi-design";

const DataForm: FC<{}> = () => {
  const [data, setData] = useState(DEFAULT_DATA);
  return (
    <>
      {data.dataset.map((dataSet, i) => (
        <>
          <Grid key={`dataSet-${i}`}>{dataSet.label}</Grid>
          {Object.entries(dataSet.data).map(([label, value]) => (
            <Fragment key={label}>
              <label>{label}</label>
              <Field value={value} />
            </Fragment>
          ))}
        </>
      ))}
    </>
  );
};

export default DataForm;
