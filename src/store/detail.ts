import { atomFamily } from "recoil";
import { getDominantColor } from "common/utils";

export const backgroundColorState = atomFamily({
  key: "backgroundColor",
  default: async (src: string) => getDominantColor(src),
});
