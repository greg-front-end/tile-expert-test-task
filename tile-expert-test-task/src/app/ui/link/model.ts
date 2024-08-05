export interface Link {
  url: string;
  label?: string;
}

export interface LinkWithIcon extends Link {
  iconSrc?: string;
}