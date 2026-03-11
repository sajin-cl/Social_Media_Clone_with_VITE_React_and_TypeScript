import { Outlet } from "react-router-dom";
import Navbar from "./components/Navabar";
import Suggestions from "./components/Suggestions";

function App() {


  return (
    <section className="flex min-h-screen">
      <Navbar />
      <div className="flex flex-1 justify-center min-w-0">
        <div className="w-full max-w-2xl ">
          <Outlet />
        </div>
      </div>
      <Suggestions />
    </section>
  );
};

export default App
