import { HiDotsHorizontal } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import type { Posts } from "@/types/model";

type PostProps = {
  post: Posts
}


function Post({ post }: PostProps) {

  return (
    <div className="post-container py-3">

      {/*   Post Header */}
      <div className="post-header flex justify-between px-3 pb-3">

        <div className="post-user-profile flex gap-3 items-center">
          <img
            src={post?.userImage}
            alt="user-profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="space-y-1">
            <p className="text-xs text-white ">{post?.userName}</p>
            <p className="text-[10px] text-gray-300">Original Audio</p>
          </div>
        </div>
        <div className="buttons flex items-center gap-2">
          <button className="text-sm text-blue-500">Follow</button>
          <HiDotsHorizontal color="white" />
        </div>
      </div>

      {/* Post View */}
      <div className="post-view w-full aspect-square">
        <img
          src={post?.postImage}
          alt="post"
          className="w-full h-full object-cover rounded" />
      </div>

      {/* Post Details */}
      <div className="post-details p-2">

        {/* like,comment,share & saved icons */}
        <div className="user-interactive-btns flex justify-between">
          <div className="flex gap-3">

            {/* LIkes */}
            <div className="flex items-center gap-1">
              <IoHeartOutline size={28} className="text-gray-200 cursor-pointer" />
              <span className="text-white text-xs">{post?.likes}</span>
            </div>

            {/* comments */}
            <div className="flex items-center gap-1">
              <FaRegComment size={24} className="text-gray-200 cursor-pointer scale-x-[-1]" />
              <span className="text-white text-xs">{post?.comments.length}</span>
            </div>

            {/* share */}
            <div className="flex items-center gap-1">
              <RiTelegram2Line size={28} className="text-gray-200 cursor-pointer" />
              <span className="text-white text-xs">{post?.shares} </span>
            </div>
          </div>
          <div className="saveed-post-btn">
            <FaRegBookmark size={21} className="text-gray-200 cursor-pointer" />
          </div>
        </div>

        {/* user name & caption showed here */}
        <div className="user-post-captions py-3 flex items-center">
          <span className="text-white text-sm mr-3">{post?.userName}</span>
          <span className="text-sm text-gray-300 max-w-[250px] truncate inline-block">
           {post?.caption}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Post;