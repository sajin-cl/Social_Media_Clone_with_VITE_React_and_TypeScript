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
  userImage: string,
  storyImage: string ,
  isViewed: boolean,
  isMyStory?: boolean
};

export type Commment = {
  id: number,
  userName: string,
  text: string
}

export type Posts = {
  id: number,
  userName: string,
  userImage:string,
  postImage: string,
  caption: string,
  likes: number,
  shares:number,
  comments: Commment[],
  createdAt: string
};
