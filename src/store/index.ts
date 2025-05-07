import { IStop, TStops } from "@/types/stops";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface IState {
  lines: number[];
  stops: Pick<IStop, "stop" | "order">[];
  timeTable: {
    [x: number]: {
      stops: Array<{
        order: IStop["order"];
        name: IStop["stop"];
        times: Array<IStop["time"]>;
      }>;
    };
  };
}

export const key: InjectionKey<Store<IState>> = Symbol();

export default createStore<IState>({
  state: {
    lines: [],
    stops: [],
    timeTable: [],
  },
  getters: {},
  mutations: {
    setLines(state, lines: number[]) {
      state.lines = lines;
    },
    setStops(state, stops: Pick<IStop, "stop" | "order">[]) {
      state.stops = stops;
    },
    setTimeTable(state, timeTable: IState["timeTable"]) {
      state.timeTable = timeTable;
    },
  },
  actions: {
    processStops({ commit }, stops: TStops) {
      const lines = [...new Set(stops.map((item) => item.line))];

      const stopList: Pick<IStop, "stop" | "order">[] = [];
      const stopSet = new Set<string>();

      stops.forEach(({ stop, order }) => {
        const key = `${stop}-${order}`;
        if (!stopSet.has(key)) {
          stopSet.add(key);
          stopList.push({ stop, order });
        }
      });

      const timeTable: IState["timeTable"] = {};

      lines.forEach((line) => {
        const lineStops = stops
          .filter((item) => item.line === line)
          .reduce((acc, curr) => {
            const existing = acc.find(
              (s) => s.name === curr.stop && s.order === curr.order
            );
            if (existing) {
              existing.times.push(curr.time);
            } else {
              acc.push({
                name: curr.stop,
                order: curr.order,
                times: [curr.time],
              });
            }
            return acc;
          }, [] as Array<{ name: string; order: number; times: string[] }>);

        timeTable[line] = { stops: lineStops };
      });

      commit("setLines", lines);
      commit("setStops", stopList);
      commit("setTimeTable", timeTable);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
