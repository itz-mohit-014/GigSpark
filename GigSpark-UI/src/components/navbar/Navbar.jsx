import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryMeuList from "./CategoryMeuList";
import MenuPopup from "./MenuPopup";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  let [currentUser, setCurrentuser] = useState({
    name: "Mohit",
    isSeller: false,
    profile:
      "https://imgs.search.brave.com/SwiDO9sr6G4hLK41pGqoqGP_7kxs13FFhRqzFbfF4XQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NDMyMzUyOC9waG90/by9zaG90LW9mLWEt/eW91bmctYnVzaW5l/c3NtYW4td29ya2lu/Zy1vbi1hLWNvbXB1/dGVyLWluLWFuLW9m/ZmljZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NjJJX3B4/ZExfZ3VQZmpXSzA1/VXlKbzIxWVNNQ29f/aDB5bnNjNm5IWmgz/bz0",
  }); // get from the store.

  const changeBg = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const handleLogoutUser = (e) => {
    setCurrentuser(null); // reset the user.
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  return (
    <nav
      className={`${
        active ? "bg-[#f0f0f0] text-blue-950 sticky top-0" : "bg-blue-950"
      }  transition-all duration-500`}
    >
      <div className="max-w-screen-xl flex justify-between items-center mx-auto p-4">
        <h2 className="font-logo text-2xl">
          GigSpark
          <span className="bg-[#e8af13] h-2 w-2 rounded-sm inline-block ml-1"></span>
        </h2>
        <div className="flex gap-3 items-center relative">
          <ul className="flex gap-3 *:font-primary *:tracking-tighter *:font-semibold">
            <li>GigSpark Business</li>
            <li>Explore</li>
            {!currentUser?.isSeller && <li>Become a Seller</li>}
          </ul>
          {currentUser ? (
            <div
              className="flex gap-2 items-center justify-center cursor-pointer px-2.5 py-1.5"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span className="h-6 w-6 rounded-full inline-block overflow-hidden">
                <img
                  src={currentUser?.profile}
                  alt={currentUser.name}
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="font-semibold">{currentUser.name}</span>
            </div>
          ) : (
          <>
            <span className="font-primary tracking-tighter font-semibold mr-3">Sign in</span>
            <button
              className={`rounded-md border-2  px-4 py-1.5 font-bold  ${
                active
                ? " border-blue-700 text-blue-700 hover:bg-blue-900 hover:text-blue-100"
                : "border-blue-100 text-blue-100 hover:bg-[#fbfbfb] hover:text-blue-900 transition-all duration-300"
              }`}
              >
              Join
            </button>
              </>
          )}
          {currentUser && openMenu && (
            <MenuPopup
              handleLogoutUser={handleLogoutUser}
              setOpenMenu={setOpenMenu}
            />
          )}
        </div>
      </div>

      {active && <CategoryMeuList />}
    </nav>
  );
};

export default Navbar;
