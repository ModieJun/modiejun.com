import fs from "fs";

import data from "../data/section-data.json";

export type Content = {
  heading: string;
  subheading: string;
  date: string | Date;
  info: string[];
};
export type Data = {
  title: string;
  content: Content[];
};

export const getJsonFromFile = (): Data[] => {
  return data;
};
