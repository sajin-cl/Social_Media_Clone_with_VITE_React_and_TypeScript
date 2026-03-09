import type { IconType } from "react-icons";

export type FooterLinksType = {
  id: number,
  name: string
};

export type NavLinksType = {
  id: number,
  icon: IconType,
  name: string
};

export type SuggestionsType = {
  id: number,
  userName: string,
  image: string,
  followedBy: string[]
};
