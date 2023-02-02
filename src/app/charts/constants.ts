import { BaseData } from "./types";

export const COLORS = [['#BAF3D7','#75AADF','#CBA9DA','#FFE082'],['#0A9397','#75AADF','#6B098A','#9F7032']];

export const DEFAULT_DATA: BaseData = {
  title: "Age Profile",
  dataset: [
    {
      label: "Cooks",
      data: {
        "<20": 10,
        "20 - 29": 23,
        "30 - 39": 5,
        "40 - 49": 2,
        "50 - 59": 5,
        "60+": 1,
      },
    },
    {
      label: "Managers",
      data: {
        "<20": 0,
        "20 - 29": 2,
        "30 - 39": 5,
        "40 - 49": 5,
        "50 - 59": 2,
        "60+": 2,
      },
    },
    {
      label: "Front Counter",
      data: {
        "<20": 20,
        "20 - 29": 15,
        "30 - 39": 5,
        "40 - 49": 5,
        "50 - 59": 5,
        "60+": 12,
      },
    }
  ],
};
