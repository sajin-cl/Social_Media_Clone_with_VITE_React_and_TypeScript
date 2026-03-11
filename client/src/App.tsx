import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Suggestions from "@/components/Suggestions";

function App() {


  return (
    <section className="flex min-h-screen bg-darkbg">
      <nav className="w-20 hover:w-48 min-h-screen border-r bg-darkbg p-5 group transition-all duration-400">

      <Navbar />
      </nav>

      <div className="flex flex-1 justify-center min-w-0">
        <div className="w-full lg:max-w-4xl">
          <Outlet />
        </div>
      </div>

      <aside className="hidden lg:block lg:w-110 min-h-screen bg-darkbg py-3 px-3">
        <Suggestions />
      </aside>
    </section>
  );
};

export default App
