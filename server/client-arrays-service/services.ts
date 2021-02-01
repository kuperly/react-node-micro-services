import axios, { AxiosPromise } from "axios";

export const services = {
  generateArray: async (value: number): Promise<number[]> =>
    Array.from({ length: +value - 1 }, (item, index) => +value - 1 - index),
  sendToLogger: <T>(dataToLog: T): Promise<AxiosPromise> => {
    return axios.post(`${process.env.LOGGER_END_POINT}/log`, dataToLog);
  },
};
