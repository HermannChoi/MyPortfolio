export type FooterComponent = {
  info: FooterType;
};

export interface Links {
  href: string;
  src: string;
  name: string;
}

export interface FooterType {
  limit?: string;
  takeaway: string;
  output?: string;
  links: Links[];
}
