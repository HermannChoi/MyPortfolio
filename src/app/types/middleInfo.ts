import { StaticImageData } from "next/image";

export interface MiddleContentsType {
  image: StaticImageData;
  title: string;
  subtitle?: string;
  description: string;
  subtitle2?: string;
  description2?: string;
}

export interface MiddleInfoType {
  info: MiddleContentsType[];
}
