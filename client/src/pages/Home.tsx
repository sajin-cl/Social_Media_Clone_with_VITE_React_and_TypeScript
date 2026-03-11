import Stories from "@/components/Stories";
import { stories } from "@/data/stories";
import { useLayoutEffect, useRef } from "react";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';

function Home() {

  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollAmountRef = useRef(0);

  useLayoutEffect(() => {
    const card = carouselRef.current?.querySelector('.story-card') as HTMLElement;
    if (card) {
      scrollAmountRef.current = card.clientWidth + 8;
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return

    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmountRef.current : scrollAmountRef.current,
      behavior: 'smooth'
    })
  };

  return (
    <div className="bg-darkbg min-h-screen  w-full">
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-2 p-4 border-b border-gray-600 overflow-x-auto carousel-scrollbar-hide"
        >
          <MdKeyboardDoubleArrowLeft
            size={35}
            className="absolute  left-0 top-10 bg-gray-300 rounded-full cursor-pointer z-10 p-2"
            onClick={() => scroll('left')}
          />
          {stories.map((story) => (
            <Stories key={story.id} story={story} />
          ))}
          <MdKeyboardDoubleArrowRight
            size={35}
            className="absolute right-0 top-10  bg-gray-300 rounded-full cursor-pointer z-10 p-2"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  )
};

export default Home;