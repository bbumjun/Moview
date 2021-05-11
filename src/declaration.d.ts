declare module "*.css";
declare module "*.js";
declare module "rgbaster" {
  interface Opts {
    ignore?: string[];
    scale?: number;
    skipTransparentPixels?: boolean;
  }
  export default function (
    src: string,
    opts?: Opts
  ): Promise<
    {
      color: string;
      count: number;
    }[]
  >;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
