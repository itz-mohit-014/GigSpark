import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  const { pathname } = useLocation();
  
  return (
    // layout
    <section className="relative min-h-full">
      <Navbar />
      <Outlet /> {/* all page content */}
      { !pathname.includes("message") && !pathname.includes("auth")  && <Footer /> }
    </section>
  );
};

export default App;
