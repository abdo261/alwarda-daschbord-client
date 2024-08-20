import React from "react";
import { FaSchool } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { Tooltip } from "@nextui-org/react";

const Links = [{ name: "Eleves", href: "/eleves", icon: <PiStudent /> }];
const Sidebare = ({ open }) => {
  return (
    <aside
      className={`flex h-screen  ${
        open ? "w-16" : "w-0  "
      } overflow-hidden duration-500 ease-in-out  flex-col justify-between border-e dark:border-gray-800 dark:bg-[#242526] dark:text-white bg-white fixed top-0 left-0`}
    >
      <div>
        <div className="inline-flex size-16 items-center justify-center">
          <span className="grid size-10 place-content-center rounded-lg bg-gray-200  text-gray-600 font-bold text-lg">
            L
          </span>
        </div>

        <div className="border-t border-gray-100">
          <div className="px-2">
            <div className="py-4">
              <Tooltip
                content="Centres"
                showArrow
                placement="right"
                size="lg"
                color="primary"
                radius="sm"
              >
                <NavLink
                  to="/centres"
                  className={` group relative flex justify-center rounded p-2  text-gray-500 hover:bg-gray-100 hover:text-gray-700 text-2xl`}
                >
                  <FaSchool />
                </NavLink>
              </Tooltip>
            </div>

            <ul className="space-y-1 border-t border-gray-100 pt-4">
              {Links.map((l) => (
                <li>
                  <NavLink
                    to={l.href}
                    className="group relative flex justify-center rounded p-2  text-gray-500 hover:bg-gray-100 hover:text-gray-700  text-2xl"
                  >
                    {l.icon}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 p-2">
        <form action="#">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg p-2 text-gray-500  dark:text-gray-300 hover:bg-red-400  hover:text-white text-2xl"
          >
            <IoIosLogOut />

            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-red-400 px-2 py-1.5 text-lg  text-white group-hover:visible">
              Logout
            </span>
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebare;
