import { stories as storiesData } from "@/data/stories";
import { useParams, useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function ViewStory() {

  const { id } = useParams();
  const navigate = useNavigate();

  const storyIndex = storiesData.findIndex(s => s.id === Number(id));
  const story = storiesData[storyIndex];

  if (!story) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-white">Story not found</p>
      </div>
    );
  };

  const closeStory = () => {
    navigate('/');
  };

  const nextStory = () => {
    if (storyIndex < storiesData.length - 1) {
      navigate(`/story/${storiesData[storyIndex + 1].id}`);
    }
    else {
      navigate('/');
    }
  };

  const prevStory = () => {
    if (storyIndex > 0) {
      navigate(`/story/${storiesData[storyIndex - 1].id}`);
    }
    else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative  ">

      {/* Close Button */}
      <IoMdClose
        onClick={closeStory}
        color="white"
        size={40}
        className="absolute top-10 right-5  bg-gray-700 rounded-full p-2 cursor-pointer"
      />

      {/* Left Arrow */}
      <MdKeyboardDoubleArrowLeft
        size={40}
        className="absolute left-20 text-white bg-gray-700 rounded-full p-2 cursor-pointer "
        onClick={prevStory}
      />

      {/* Story Content */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={story.userImage}
            className="w-10 h-10 rounded-full"
          />
          <h2 className="text-white">{story.userName}</h2>
        </div>

        <img
          src={story.storyImage}
          className="max-h-[80vh] object-contain"
        />
      </div>

      {/* Right Arrow */}
      <MdKeyboardDoubleArrowRight
        size={40}
        className="absolute right-20 text-white bg-gray-700 rounded-full p-2 cursor-pointer"
        onClick={nextStory}
      />

    </div>
  );
}

export default ViewStory;