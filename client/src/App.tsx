import { Outlet } from "react-router-dom";
import Navbar from "./components/Navabar";
import Suggestions from "./components/Suggestions";

function App() {


  return (
    <section className="flex">
      <Navbar />
      <div className="max-w-2xl  mx-auto">
        <Outlet />
      </div>
      <Suggestions />
    </section>
  );
};

export default App
