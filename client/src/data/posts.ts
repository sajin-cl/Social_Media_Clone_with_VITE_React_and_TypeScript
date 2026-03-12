import type { Posts as PostType } from "@/types/model";

export const posts:PostType[] = [
  {
    id: 1,
    userName: "Sajin CL",
    userImage: "/profile.webp",
    postImage: "https://picsum.photos/500/400?random=1",
    caption: "Winter is coming ❄️",
    likes: 124,
    shares:200,
    comments: [
      { id: 1, userName: "Arya Stark", text: "Nice shot!" },
      { id: 2, userName: "Rob Stark", text: "Amazing 🔥" }
    ],
    createdAt: "2h"
  },
  {
    id: 2,
    userName: "Arya Stark",
    userImage: "https://i.pravatar.cc/?img=13",
    postImage: "https://picsum.photos/500/400?random=2",
    caption: "A girl has no name ⚔️",
    likes: 89,
    shares:142,
    comments: [
      { id: 1, userName: "John Snow", text: "Be careful" }
    ],
    createdAt: "5h"
  },
  {
    id: 3,
    userName: "Tony Stark",
    userImage: "https://i.pravatar.cc/150?img=14",
    postImage: "https://picsum.photos/500/400?random=3",
    caption: "Sometimes you gotta run before you can walk 🚀",
    likes: 210,
    shares:2,
    comments: [
      { id: 1, userName: "Peter Parker", text: "Legend 🔥" }
    ],
    createdAt: "1h"
  },
  {
    id: 4,
    userName: "Peter Parker",
    userImage: "https://i.pravatar.cc/150?img=15",
    postImage: "https://picsum.photos/500/400?random=4",
    caption: "Friendly neighborhood vibes 🕷️",
    likes: 176,
    shares:10,
    comments: [
      { id: 1, userName: "Tony Stark", text: "Kid is good!" },
      { id: 2, userName: "Bruce Wayne", text: "Its awesome!" }
    ],
    createdAt: "3h"
  },
  {
    id: 5,
    userName: "Bruce Wayne",
    userImage: "https://i.pravatar.cc/150?img=16",
    postImage: "https://picsum.photos/500/400?random=5",
    caption: "The night is darkest just before the dawn 🦇",
    likes: 320,
    shares:23,
    comments: [
      { id: 1, userName: "Clark Kent", text: "Stay safe." }
    ],
    createdAt: "8h"
  },
  {
    id: 6,
    userName: "Clark Kent",
    userImage: "https://i.pravatar.cc/150?img=17",
    postImage: "https://picsum.photos/500/400?random=6",
    caption: "Up, up and away ☀️",
    likes: 287,
    shares:12,
    comments: [
      { id: 1, userName: "Bruce Wayne", text: "Nice view." }
    ],
    createdAt: "10h"
  }
];