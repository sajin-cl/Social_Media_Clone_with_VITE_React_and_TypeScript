import Stories from "@/components/Stories";
import { stories } from "@/data/stories";
import { useLayoutEffect, useRef } from "react";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';

function Feed() {

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
    <div className="bg-darkbg min-h-screen w-full flex justify-center">

      {/* Stories section */}
      <div className="relative stories-section max-w-2xl">
        <div
          ref={carouselRef}
          className="flex gap-2 p-4 overflow-x-auto carousel-scrollbar-hide"
        >

          {/* Left Arrow */}
          <MdKeyboardDoubleArrowLeft
            size={30}
            className=" absolute sm:left-[-20]  md:left-0 top-10 text-pink-500 bg-gray-300 rounded-full cursor-pointer z-10 p-2"
            onClick={() => scroll('left')}
          />

          {/*  Stories Component */}
          {stories.map((story) => (
            <Stories key={story.id} story={story} />
          ))}

          {/* Right Arrow */}
          <MdKeyboardDoubleArrowRight
            size={30}
            className="absolute right-0 top-10 text-pink-500 bg-gray-300 rounded-full cursor-pointer z-10 p-2"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  )
};

export default Feed;