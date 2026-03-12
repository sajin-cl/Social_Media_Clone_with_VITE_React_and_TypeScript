import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Suggestions from "@/components/Suggestions";

function App() {

  const locaion = useLocation();
  return (
    <section className="flex min-h-screen bg-darkbg">
      <nav
        className="fixed bottom-0 md:bottom-auto md:top-0 hidden md:block md:w-20 hover:w-48 min-h-screen border-r bg-darkbg p-5 group transition-all duration-400 z-50"
      >
        <Navbar />
      </nav>

      <div className="flex flex-1 justify-center min-w-0">
        <div className="w-full lg:max-w-4xl">
          <Outlet />
        </div>
      </div>

      {locaion.pathname === '/' && (
        <aside className="hidden xl:block xl:w-110 min-h-screen bg-darkbg py-3 px-3 z-40">
          <Suggestions />
        </aside>
      )}

    </section>
  );
};

export default App
