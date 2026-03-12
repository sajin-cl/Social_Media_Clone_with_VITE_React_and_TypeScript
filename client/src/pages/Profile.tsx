// src/components/Profile.tsx
import { useState } from "react";
import { BsGrid3X3 } from "react-icons/bs";
import { RiYoutubeLine } from "react-icons/ri";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import  myPosts  from "@/data/myPosts";


function Profile() {

  const [activeTab, setActiveTab] = useState<"posts" | "reels" | "saved" | "tagged">("posts");
 
  const displayedPosts = activeTab === "posts" ? myPosts : [];

  return (
    <section className="min-h-screen w-full bg-darkbg text-white">

      {/* Profile Header */}
      <div className="profile-details max-w-4xl mb-4 mt-6 mx-auto">
        <div className="profile-container flex gap-8 mb-4 py-5">
          <div className="profile-image-container">
            <img
              src="/profile.webp"
              alt="profile"
              className="w-[200px] h-[200px] object-cover rounded-full"
            />
          </div>

          <div className="profile-info px-3 pt-3 flex-1">
            <h2 className="text-2xl mb-1">sajin_cl</h2>
            <p className="text-gray-400 mb-3">Sajin CL</p>
            <div className="profile-stats flex gap-6 mb-3">
              <span className="text-sm">47 posts</span>
              <span className="text-sm">394 followers</span>
              <span className="text-sm">391 following</span>
            </div>
            <p className="bio text-sm">MERN STACK DEVELOPER | REACT DEVELOPER | NODE DEVELOPER</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="button-container flex gap-3 mb-5">
          <button className="text-sm text-white p-3 bg-gray-700 rounded-xl w-1/2">
            Edit Profile
          </button>
          <button className="text-sm text-white p-3 bg-gray-700 rounded-xl w-1/2">
            View Archive
          </button>
        </div>

        {/* Tabs */}
        <div className="profile-tabs flex justify-between items-center gap-12 p-3 text-white">
          <BsGrid3X3
            size={24}
            className={`cursor-pointer ${activeTab === "posts" ? "text-white" : "text-gray-400"}`}
            onClick={() => setActiveTab("posts")}
          />
          <RiYoutubeLine
            size={35}
            className={`cursor-pointer ${activeTab === "reels" ? "text-white" : "text-gray-400"}`}
            onClick={() => setActiveTab("reels")}
          />
          <FaRegBookmark
            size={24}
            className={`cursor-pointer ${activeTab === "saved" ? "text-white" : "text-gray-400"}`}
            onClick={() => setActiveTab("saved")}
          />
          <FaRegUser
            size={24}
            className={`cursor-pointer ${activeTab === "tagged" ? "text-white" : "text-gray-400"}`}
            onClick={() => setActiveTab("tagged")}
          />
        </div>
      </div>

      {/* Grid Section */}
      {displayedPosts.length > 0 ? (
        <div className="post-details grid grid-cols-3 gap-[2px] max-w-4xl mx-auto border-t border-gray-600">
          {displayedPosts.map((post) => (
            <div key={post.id} className="w-full aspect-square overflow-hidden">
              <img
                src={post?.image}
                alt={`post-${post.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-tab text-gray-400 text-center py-20 border-t border-gray-600">
          No content yet
        </div>
      )}
    </section>
  );
}

export default Profile;