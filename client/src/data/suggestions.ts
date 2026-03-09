import type { SuggestionsType as Suggestions } from "@/types/indes";

export const suggestions: Suggestions[] = [
  {
    id: 1,
    userName: "John Snow",
    image: "https://i.pravatar.cc/150?img=11",
    followedBy: ['Arya Stark', 'Rob Stark']
  },
  {
    id: 2,
    userName: "Rob Stark",
    image: "https://i.pravatar.cc/150?img=12",
    followedBy: ['Ned Stark', 'Arya Stark']
  },
  {
    id: 3,
    userName: "Arya Stark",
    image: "https://i.pravatar.cc/150?img=13",
    followedBy: ['John Stark', 'Varis']
  },
  {
    id: 4,
    userName: "Tony Stark",
    image: "https://i.pravatar.cc/150?img=14",
    followedBy: ['Steve Rogers', 'Peter parker']
  }
];