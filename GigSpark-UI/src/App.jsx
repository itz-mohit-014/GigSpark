import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import AuthLayout from "./pages/loginLogoutLayout/LoginLogoutPageLayout.jsx";
import { Toaster } from 'react-hot-toast'
import { useEffect } from "react";
import { fetchAllCategory } from "./utils/category.js";

const App = () => {
  const { pathname } = useLocation();
  const showAuthForm = useSelector((store) => store.showAuthForm?.isAuthenticate);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategory())
  }, [])

  return (
    // layout
    <section className="relative min-h-full">
      <Navbar />
      <Outlet /> {/* all page content */}
      {
        !pathname.includes("message") 
        && !pathname.includes("auth") 
        && ( <Footer /> )
      }
      {showAuthForm && <AuthLayout />}
      <Toaster  toastOptions={{duration: 1500}}/>
    </section>
  );
};

export default App;
