import { FaInstagram } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "@/data/links";

function Navbar() {

  return (

    <nav className="hidden md:block  min-h-screen border-r bg-darkbg p-5">
      <FaInstagram size={25} color="white" className="mb-2" />
      {navLinks.map((link) => {
        const Icon = link?.icon;
        return (
          <div
            key={link.id}
            className="flex items-center gap-3 py-4"
          >
            <Icon size={25} color="white" />
            <span className="text-white text-sm">{link.name}</span>
          </div>
        )
      })}

      <div className="fixed bottom-0 py-3">
         <div className="flex gap-4 items-center py-2 mb-3">
           <img src="https://i.pravatar.cc/150?img=3" alt="profile-image"  className="w-8 h-8 rounded-full border-2 border-pink-600"/>
           <span className="text-white text-sm">Profile</span>
         </div>

         <div className="flex items-center gap-5">
           <RxHamburgerMenu  size={25} color="white"/>
            <span className="text-white text-sm">More</span>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;