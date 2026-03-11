import type { IconType } from "react-icons";

export type FooterLinks = {
  id: number,
  name: string
};

export type NavLinks = {
  id: number,
  icon: IconType,
  name: string
};

export type Suggestions = {
  id: number,
  userName: string,
  image: string,
  followedBy: string[]
};

export type Stories = {
  id: number,
  userName: string,
  avatar: string,
  storyImage: string | null,
  isViewed: boolean,
  isMyStory?: boolean
};
