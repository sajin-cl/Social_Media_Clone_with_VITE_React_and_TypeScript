import { FaInstagram } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "@/data/links";


function Navbar() {

  return (

    <>
      <FaInstagram size={25} color="white" className="mb-3" />
      {navLinks.map((link) => {
        const Icon = link?.icon;
        return (
          <div
            key={link.id}
            className="flex items-center gap-3 hover:cursor-pointer py-4"
          >
            <Icon size={25} color="white"/>
            <span className="text-white text-sm hidden group-hover:block">{link.name}</span>
          </div>
        )
      })}

      <div className="mt-auto py-3">
         <div className="flex gap-4 items-center py-2 mb-3">
           <img src="/profile.webp" alt="profile-image"  className="w-8 h-8 rounded-full border-2 border-pink-600"/>
           <span className="text-white text-sm hidden group-hover:block">Profile</span>
         </div>

         <div className="flex items-center gap-5">
           <RxHamburgerMenu  size={25} color="white"/>
            <span className="text-white text-sm hidden group-hover:block">More</span>
         </div>
      </div>
    </>
  );
};

export default Navbar;