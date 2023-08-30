
export const dataTableReparH = [
    { Centre: "Lille", HT: 0, BT: 2, Autres: 2 },
    { Centre: "Lyon", HT: 0, BT: 12, Autres: 16 },
    { Centre: "Marseille", HT: 0, BT: 3, Autres: 11 },
    { Centre: "Nancy", HT: 0, BT: 7, Autres: 3 },
    { Centre: "Nantes", HT: 0, BT: 12, Autres: 11 },
    { Centre: "Paris", HT: 0, BT: 13, Autres: 8 },
    { Centre: "Toulouse", HT: 0, BT: 4, Autres: 7 },
  ];
  export const dataTableHeadH = ["Centre", "Haute tension (HT)", "Basse tension (BT)", "Autres"];
  export const dataBarChartH = [
    {
      year: "2017",
      FH: 390,
      FM: 750,
      AE: 755,
    },
    {
      year: "2018",
      FH: 550,
      FM: 950,
      AE: 969,
    },
    {
      year: "2019",
      FH: 430,
      FM: 940,
      AE: 960,
    },
    {
      year: "2020",
      FH: 490,
      FM: 498,
      AE: 1005,
    },
    {
      year: "2021",
      FH: 520,
      FM: 1010,
      AE: 1060,
    },
    {
      year: "2022",
      FH: 210,
      FM: 410,
      AE: 415,
    },
  ];
  export const barLabelsH = [
    {
      name: "Anomalies FH type BT",
    },
    {
      name: "Anomalies FM type HT",
    },
    {
      name: "Anomalies AE ni BT ni HT",
    },
  ];
  export const barColorsH = ["#7AE6ED", "#009CDF", "#9D50FF"];
  export const pieColorsH = ["#7AE6ED", "#009CDF"];
  
  export const dataPieC = [
    {
      name: "Anomalies FH",
      value: 8146,
    },
    {
      name: "Anomalies FM",
      value: 1313,
    },
    {
      name: "Anomalies AE",
      value: 355,
    },
  ];
  export const pieColorsHumainFMHT = ["#E8E8E8"];

export const dataHumainFMHT = [
  {
    name: "Aucune donnée",
    value: 100000,
  },
];

export const pieColorsHumainFMBT = ["#009CDF", "#9D50FF", "#3F51B5", "#7AE6ED"];

export const dataHumainFMBT = [
  {
    name: "Configuration inexacte",
    value: 9000,
  },
  {
    name: "Manipulation intempestive",
    value: 2007,
  },
  {
    name: "Défaut de conception",
    value: 11707,
  },
  {
    name: "Défaut procédure",
    value: 7007,
  },
];

export const pieColorsHumainFMNS = [
  "#009CDF",
  "#7AE6ED",
  "#4DA466",
  "#9D50FF",
  "#3F51B5",
  "#FBA23A",
];

export const dataHumainFMNS = [
  {
    name: "Configuration inexacte",
    value: 7000,
  },
  {
    name: "Terre oubliée après déconsignation",
    value: 4007,
  },
  {
    name: "Manoeuvre inopportune conduite",
    value: 4107,
  },
  {
    name: "Manipulation intempestive",
    value: 4707,
  },
  {
    name: "Défaut de conception",
    value: 2207,
  },
  {
    name: "Défaut procédure",
    value: 4007,
  },
];