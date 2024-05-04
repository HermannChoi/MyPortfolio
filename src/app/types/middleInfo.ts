import { StaticImageData } from "next/image";

export interface MiddleContentsType {
  image: StaticImageData;
  title: string;
  description: string;
}

export interface MiddleInfoType {
  info: MiddleContentsType[];
}
