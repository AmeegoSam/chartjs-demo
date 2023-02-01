import { BaseData } from "./types";

export const COLORS = ['#BAF3D7','#75AADF','#CBA9DA','#FFE082'];

export const DEFAULT_DATA: BaseData = {
  title: "Age Profile",
  dataset: [
    {
      label: "Employees",
      data: {
        "< 20 y/0": 0,
        "20 - 30": 50,
        "30 - 40": 60,
        "40 - 50": 25,
        "50 - 60": 10,
        "60 - 70": 3,
        "70 - 80": 0,
      },
    },
    {
      label: "Managers",
      data: {
        "< 20 y/0": 3,
        "20 - 30": 2,
        "30 - 40": 20,
        "40 - 50": 10,
        "50 - 60": 5,
        "60 - 70": 0,
        "70 - 80": 0,
      },
    },
  ],
};
