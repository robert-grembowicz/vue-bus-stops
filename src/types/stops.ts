export interface IStop {
  line: number;
  stop: string;
  order: number;
  time: string;
}

export type TStops = IStop[];
