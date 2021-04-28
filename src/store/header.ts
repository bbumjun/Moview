import { atom } from "recoil";
import { content } from "common/string";
export const contentTypeState = atom<keyof typeof content>({
  key: "contentType",
  default: "movie",
});
