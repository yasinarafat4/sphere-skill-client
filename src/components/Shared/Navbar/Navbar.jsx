import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  // States
  const [navToggle, setNavToggle] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");

  const { user } = useAuth();

  // Dark and Light Mood effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Dark & Light Mood handler
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="navbar sticky top-0 z-10 bg-slate-200 shadow-lg dark:bg-slate-800  dark:text-white lg:pr-3">
      <div className="flex-1">
        <Link
          to="/"
          className="cursor-pointer text-2xl normal-case font-semibold"
        >
          SphereSkill
        </Link>
      </div>
      <div
        className={`absolute ${
          navToggle ? "left-0" : "left-[-120%]"
        } top-[4rem] flex w-full flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent`}
      >
        <div className="menu menu-horizontal flex-col px-1 lg:flex-row lg:gap-4 xl:gap-6">
          <NavLink
            to="/"
            onClick={() => setNavToggle(!navToggle)}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-slate-600 dark:text-slate-300"
            }
          >
            <p className="text-lg lg:text-base 2xl:text-lg font-medium hover:duration-500">
              Home
            </p>
          </NavLink>
          <NavLink
            to="/dashboard"
            onClick={() => setNavToggle(!navToggle)}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-slate-600 dark:text-slate-300"
            }
          >
            <p className="text-lg lg:text-base 2xl:text-lg font-medium hover:duration-500">
              Dashboard
            </p>
          </NavLink>
          <NavLink
            to="/courses"
            onClick={() => setNavToggle(!navToggle)}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-slate-600 dark:text-slate-300"
            }
          >
            <p className="text-lg lg:text-base 2xl:text-lg font-medium hover:duration-500">
              Courses
            </p>
          </NavLink>
          <NavLink
            to="/instructors"
            onClick={() => setNavToggle(!navToggle)}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-slate-600 dark:text-slate-300"
            }
          >
            <p className="text-lg lg:text-base 2xl:text-lg font-medium hover:duration-500">
              Instructors
            </p>
          </NavLink>
        </div>

        {/* conditional rendering for navbar view */}
        {user ? (
          <div
            title={user?.displayName || "No User"}
            className="dropdown-end dropdown lg:mx-2"
          >
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-8 rounded-full">
                <img
                  alt="user-logo"
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                  }
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li className="mb-2 mt-1 text-center font-semibold">
                {user?.displayName || "No User"}
              </li>
              <div className="divider my-0"></div>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-lg"
                  activeClassName="text-blue-500"
                >
                  Profile
                </Link>
              </li>
              <li className="">
                <button
                  // onClick={handleLogout}
                  className="btn-warning btn content-center text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-sm md:text-base font-semibold md:px-5 md:py-2 lg:mx-4 duration-500 rounded-full">
              Login
            </button>
          </Link>
        )}

        {/* Dark & Light mode */}
        <label className="swap swap-rotate lg:mr-3">
          <input type="checkbox" />

          {isDarkMode ? (
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={handleThemeSwitch}
            >
              <title>Make Light</title>
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          ) : (
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={handleThemeSwitch}
            >
              <title>Make Dark</title>
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          )}
        </label>
      </div>
      <label className="swap-rotate swap btn-ghost btn-circle btn ml-2 bg-white dark:bg-slate-800 lg:hidden">
        <input
          checked={navToggle}
          onChange={() => setNavToggle((pre) => !pre)}
          type="checkbox"
        />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </nav>
  );
};

export default Navbar;
