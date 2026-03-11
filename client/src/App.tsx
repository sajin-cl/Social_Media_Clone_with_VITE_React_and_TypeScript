import { Outlet } from "react-router-dom";
import Navbar from "./components/Navabar";
import Suggestions from "./components/Suggestions";

function App() {


  return (
    <section className="flex min-h-screen">
      <Navbar />

      <div className="flex flex-1 justify-center min-w-0">
        <div className="w-full lg:max-w-2xl ">
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
