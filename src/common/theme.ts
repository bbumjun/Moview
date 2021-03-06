const calcRem = (size: number) => `${size / 16}rem`;

const maxWidth = calcRem(1280);
const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};
const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};
const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",
  tablet: "768px",
  tabletL: "1024px",
  laptop: "1280px",
  desktop: "1440px",
};
const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
  laptop: `only screen and (max-width: ${deviceSizes.laptop})`,
  desktop: `only screen and (max-width: ${deviceSizes.desktop})`,
};

const colors = {
  black: "#101113",
  darkGray: "#1c1d1f",
  lightGray: "#ebebeb",
  middleGray: "#B5B5B5",
  red: "#e50914",
};
const theme = {
  maxWidth,
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
};

export default theme;
