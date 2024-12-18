import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CategoryMeuList from "./CategoryMeuList";
import MenuPopup from "./MenuPopup";
import Logo from "../ui/Logo";

import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

import darkLogo from "../../assets/logo/logo-dark.png";
import lightLogo from "../../assets/logo/logo-light.png";

import { showAuthenticatePage } from "../../slices/showLoginForm.slice";
import { logout } from "../../services/authApi";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeHamburMenu, setActiveHamburMenu] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const currentUser = useSelector((store) => store.user.user);

  const changeBg = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const handleLogoutUser = async (e) => {
    dispatch(logout(navigate));
  };

  const handleShowAuthPage = (formName) => {
    dispatch(showAuthenticatePage(formName));
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  return (
    <header
      className={`${
        active || pathname !== "/"
          ? "bg-[#fbf5f5] text-blue-950 "
          : "bg-slate-950 text-blue-50"
      }  transition-all duration-300 sticky top-0 z-20`}
    >
      <nav className="px-4 bg-inherit text-inherit">
        <div className="max-w-screen-xl bg-inherit text-inherit flex justify-between items-center mx-auto">
          <div
            className={`border border-black md:hidden block text-3xl  ${
              activeHamburMenu &&
              "bg-gray-700/70 w-full h-dvh absolute top-0 left-0 z-[2] p-6"
            }`}
            onClick={() => setActiveHamburMenu(!activeHamburMenu)}
          >
            <div
              className={`border border-black text-3xl relative z-[20] ml-auto w-fit`}
              onClick={() => setActiveHamburMenu(!activeHamburMenu)}
            >
              {!activeHamburMenu ? <IoMenu /> : <IoClose />}
            </div>
          </div>
          <Logo src={active || pathname !== "/" ? lightLogo : darkLogo} />
          <div
            className={`flex gap-3 items-center ${
              active || pathname !== "/" ? "text-slate-600" : "text-slate-200"
            } ${
              activeHamburMenu &&
              "absolute top-0 left-0 flex-col w-full max-w-[400px] bg-inherit h-dvh p-6 z-[2] items-stretch"
            }`}
          >
            <ul
              className={`gap-3 *:font-primary *:tracking-tighter ${
                !activeHamburMenu
                  ? "hidden"
                  : "*:tracking-wider *:p-2 space-y-2 *:text-xl"
              } md:flex`}
            >
              <li>GigSpark Business</li>
              <li>Explore</li>
              {!currentUser?.isSeller && <li>Become a Seller</li>}
            </ul>
            {currentUser ? (
              <div
                className={`flex gap-2 items-center cursor-pointer px-2.5 py-2 relative ${
                  activeHamburMenu ? "justify-start" : "justify-center"
                }`}
                onClick={() => setOpenMenu(!openMenu)}
              >
                <span className="h-6 w-6 rounded-full inline-block overflow-hidden border border-blue-950">
                  <img
                    src={currentUser?.profile?.url}
                    alt={currentUser.firstName}
                    className="w-full h-full object-cover"
                  />
                </span>
                <span
                  className={`${
                    active || pathname !== "/"
                      ? "text-blue-950"
                      : "text-blue-50"
                  }
                  ${
                    !activeHamburMenu && "hidden"
                  } min-[400px]:block font-bold capitalize`}
                >
                  {currentUser.firstName}
                </span>
                {currentUser && openMenu && (
                  <MenuPopup
                    handleLogoutUser={handleLogoutUser}
                    setOpenMenu={setOpenMenu}
                  />
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => handleShowAuthPage("login")}
                  className={`font-primary tracking-tighter font-semibold mr-3 sm:block ${
                    !activeHamburMenu ? "hidden " : "pl-2"
                  }`}
                >
                  Sign in
                </button>
                <button
                  onClick={() => handleShowAuthPage("signup")}
                  className={`${
                    activeHamburMenu &&
                    "border-none text-start text-lg pl-2 font-bold"
                  } rounded-md sm:border-2 px-1 sm:px-3 py-1 sm:font-bold  ${
                    active || pathname !== "/"
                      ? " border-blue-700 text-blue-700 hover:bg-blue-900 hover:text-blue-100"
                      : "border-blue-100 text-blue-100 hover:bg-[#fbfbfb] hover:text-blue-900 transition-all duration-300"
                  }`}
                >
                  Join
                </button>
              </>
            )}
          </div>
        </div>

        {(active || pathname !== "/") && <CategoryMeuList />}
      </nav>
    </header>
  );
};

export default Navbar;
