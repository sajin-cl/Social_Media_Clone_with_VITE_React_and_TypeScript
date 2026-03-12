import type { FooterLinks as FooterLinksType, NavLinks as NavLinksType } from "@/types/model";
import { IoHomeOutline, IoSearchSharp, IoHeartOutline, IoStatsChart } from "react-icons/io5";
import { RiYoutubeLine, RiTelegram2Line } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { BsPlus } from "react-icons/bs";


export const navLinks: NavLinksType[] = [
  { id: 1, name: 'Home', icon: IoHomeOutline },
  { id: 2, name: 'Reels', icon: RiYoutubeLine },
  { id: 3, name: 'Messaging', icon: RiTelegram2Line },
  { id: 4, name: 'Search', icon: IoSearchSharp },
  { id: 5, name: 'Explore', icon: MdOutlineExplore },
  { id: 6, name: 'Notification', icon: IoHeartOutline },
  { id: 7, name: 'Create', icon: BsPlus },
  { id: 8, name: 'Dashboard', icon: IoStatsChart }

];


export const footerLinks: FooterLinksType[] = [
  { id: 1, name: 'Meta' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Blog' },
  { id: 4, name: 'Jobs' },
  { id: 5, name: 'Help' },
  { id: 6, name: 'Api' },
  { id: 7, name: 'Privacy' },
  { id: 8, name: 'Terms' },
  { id: 9, name: 'Locations' },
  { id: 10, name: 'social media lite' },
  { id: 11, name: 'Contact Uploading & Non-Users' },
  { id: 12, name: 'Beta Verified' },
];

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];