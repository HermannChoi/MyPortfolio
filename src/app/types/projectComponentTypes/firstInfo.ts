import { StaticImageData } from "next/image";

export interface FirstInfoType {
  src: StaticImageData;
  title: string;
  subtitle: string;
  period: string;
  personnel: string;
  responsibility?: string;
  language: string[];
  framework?: string[];
  stateLibrary?: string[];
  cicd?: string[];
  server?: string[];
  db?: string[];
  etc?: string[];
  description?: string;
}
