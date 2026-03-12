import { HiDotsHorizontal } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";

function Post() {

  return (
    <div className="post-container py-3">

      {/*   Post Header */}
      <div className="post-header flex justify-between px-3 pb-3">

        <div className="post-user-profile flex gap-3 items-center">
          <img
            src="/profile.webp"
            alt="user-profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="space-y-1">
            <p className="text-xs text-white ">sajin_cl</p>
            <p className="text-[10px] text-gray-300">Original Audio</p>
          </div>
        </div>
        <div className="buttons flex items-center gap-2">
          <button className="text-sm text-blue-500">Follow</button>
          <HiDotsHorizontal color="white" />
        </div>
      </div>

      {/* Post View */}
      <div className="post-view w-full h-[500px]">
        <img
          src="https://picsum.photos/400/700?random=1"
          alt="post"
          className="w-full h-full object-cover rounded" />
      </div>

      {/* Post Details */}
      <div className="post-details p-2">

        {/* like,comment,share & saved icons */}
        <div className="user-interactive-btns flex justify-between">
          <div className="flex gap-3">
            <IoHeartOutline size={28} className="text-gray-200 cursor-pointer" />
            <FaRegComment size={24} className="text-gray-200 cursor-pointer" />
            <RiTelegram2Line size={28} className="text-gray-200 cursor-pointer" />
          </div>
          <div className="saveed-post-btn">
            <FaRegBookmark size={21} className="text-gray-200 cursor-pointer" />
          </div>
        </div>

        {/* user name & caption showed here */}
        <div className="user-post-captions py-3 flex items-center">
          <span className="text-white text-sm mr-3">sajin_cl</span>
          <span className="text-sm text-gray-300 max-w-[250px] truncate inline-block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum expedita sint necessitatibus accusantium ipsa! Nobis iusto repudiandae officiis nulla, vero ab, iure unde necessitatibus porro, similique architecto placeat? Voluptatum, ea!
          </span>
        </div>

      </div>
    </div>
  );
};

export default Post;