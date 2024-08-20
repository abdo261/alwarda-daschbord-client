import React, { useState } from "react";
import Sidebare from "../components/Sidebare";
import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { Button, Tooltip } from "@nextui-org/react";
const Layout = () => {
  const [open, setOpen] = useState(true);
  const toggleSideBare = () => setOpen(!open);
  const navigate = useNavigate();
  
  return (
    <div
      className={` min-h-screen  pr-4 pb-4  ${
        open ? "pl-[5rem]" : "pl-3"
      } duration-500 ease-in-out pt-[5rem]  dark:bg-[#18191A] bg-gray-200 [#F0F2F5]`}
    >
      <Sidebare open={open} />
      <section className="text-black dark:text-gray-100 grid grid-cols-1 h-full">
        <Header toggleSideBare={toggleSideBare} open={open} />
        <main className="h-full ">
          <Tooltip content="precedent" placement="right">
            <span>
              <motion.span
                transition={{ duration: 0.7 }}
                whileTap={{ scale: 0.7 }}
                className="mb-5"
              >
                <Button
                  isIconOnly
                  size="sm"
                  variant="bordered"
                  className=" text-lg"
                  onClick={() => navigate(-1)}
                >
                  <IoIosArrowBack />
                </Button>
              </motion.span>
            </span>
          </Tooltip>
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default Layout;
