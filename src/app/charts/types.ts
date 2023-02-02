export type BaseData = {
  title: string;
  dataset: BaseDataSet[];
};

type BaseDataSet = { label: string; data: { [key: string]: number } };

export type BaseOptions = {
  scales: {
    y: { beginAtZero: true },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: ''
    },
  }
};