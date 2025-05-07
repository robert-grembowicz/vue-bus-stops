export interface IStop {
  line: number;
  stop: string;
  order: number;
  time: string;
}

export type TStops = IStop[];

export const stops: TStops = [
  {
    line: 110,
    stop: "Cmentarz Grębałów",
    order: 9,
    time: "12:38",
  },
  {
    line: 111,
    stop: "Cło",
    order: 24,
    time: "16:05",
  },
  {
    line: 112,
    stop: "Rondo Grunwaldzkie",
    order: 2,
    time: "9:29",
  },
  {
    line: 109,
    stop: "Cracovia Stadion",
    order: 1,
    time: "10:44",
  },
  {
    line: 102,
    stop: "Kopalina",
    order: 17,
    time: "12:24",
  },
  {
    line: 109,
    stop: "Wodociągi",
    order: 14,
    time: "9:06",
  },
  {
    line: 102,
    stop: "Cmentarz Bielany",
    order: 25,
    time: "18:11",
  },
  {
    line: 111,
    stop: "Pleszów",
    order: 1,
    time: "16:35",
  },
  {
    line: 102,
    stop: "Chełmska",
    order: 20,
    time: "19:31",
  },
  {
    line: 110,
    stop: "Wadów",
    order: 15,
    time: "21:24",
  },
];
