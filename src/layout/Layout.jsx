import React, { useEffect, useRef, useState } from "react";
import Sidebare from "../components/Sidebare";
import Header from "../components/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { Button, Tooltip } from "@nextui-org/react";

const Layout = () => {
  // Custom hook to track previous route
  const usePreviousRoute = () => {
    const location = useLocation();
    const previousPath = useRef(null); // Start as null to identify direct entry
    const currentPath = location.pathname;

    useEffect(() => {
      previousPath.current = currentPath;
    }, [currentPath]);

    return previousPath.current;
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const prevRoute = usePreviousRoute();
  const [open, setOpen] = useState(true);

  const toggleSideBare = () => setOpen(!open);

  const handelNavigate = () => {
    if (prevRoute && pathname !== "/") {
      navigate(-1); // Go back if there's a valid previous route
    } else {
      navigate("/"); // If no previous route or at the root, navigate to home
    }
  };

  // Hide back button on home page
  const showBackButton = pathname !== "/";

  return (
    <div
      className={`min-h-screen pr-4 pb-4 ${
        open ? "pl-[5rem]" : "pl-3"
      } duration-500 ease-in-out pt-[5rem] dark:bg-[#18191A] bg-gray-200`}
    >
      <Sidebare open={open} />
      <section className="text-black dark:text-gray-100 grid grid-cols-1 h-full">
        <Header toggleSideBare={toggleSideBare} open={open} />
        <main className="h-full flex flex-col gap-5">
          {showBackButton && (
            <Tooltip content="Précédent" placement="right" showArrow color="foreground" delay={0} closeDelay={0}>
              <span className="w-fit">
                <motion.span
                  transition={{ duration: 0.7 }}
                  whileTap={{ scale: 0.7 }}
                  className="mb-8"
                >
                  <Button
                    isIconOnly
                    size="sm"
                    variant="bordered"
                    className="text-lg"
                    onClick={handelNavigate}
                  >
                    <IoIosArrowBack />
                  </Button>
                </motion.span>
              </span>
            </Tooltip>
          )}
          <div>
            <Outlet />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Layout;
