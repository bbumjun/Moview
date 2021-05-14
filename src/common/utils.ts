import analyze from "rgbaster";

export const getCurDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}-${month}-${day}`;
};
export const parseDate = (date: string) => {
  const [year, month, day] = date.split("-");
  return { year, month, day };
};

export const getDominantColor: (src: string) => Promise<string> = (src) => {
  return analyze(src).then((result) => result[0].color);
};

export const getHalfAndRounded: (rate: number) => string = (rate) =>
  (Math.round((rate * 10) / 2) / 10).toFixed(1);

export const ratio = {
  standard: 1.33,
  high: 1.78,
  widescreen: 2.4,
};

export const getCountryFlag: (isoCode: string) => string = (isoCode) =>
  `https://flagcdn.com/16x12/${isoCode.toLowerCase()}.png`;
