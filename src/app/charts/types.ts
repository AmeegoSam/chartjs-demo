export type BaseData = {
  title: string;
  dataset: BaseDataSet[];
};

type BaseDataSet = { label: string; data: { [key: string]: number } };
