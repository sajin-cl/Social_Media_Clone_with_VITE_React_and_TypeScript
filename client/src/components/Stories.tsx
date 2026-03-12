import type { Stories as StoriesType } from "@/types/model";
import { useNavigate } from "react-router-dom";

type props = {
  story: StoriesType
};

function Stories({ story }: props) {

  const navigate = useNavigate();
  const borderColor = story.isViewed ? "bg-gray-700" : "bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600";

  const openStory = () => {
    navigate(`/story/${story.id}`);
  };

  return (
    <div
      onClick={openStory}
      className="story-card h-28 p-2 flex flex-col items-center shrink-0 hover:cursor-pointer"
    >
      <div className={`p-[3px] rounded-full ${borderColor}`}>
        <img
          src={story.userImage}
          alt={story.userName}
          className="w-16 h-16 rounded-full object-cover bg-white p-[1px]"
        />
      </div>

      <p className="text-gray-300 text-xs w-16 truncate mt-1">
        {story.userName}
      </p>
    </div>
  );
}

export default Stories;