import React, { useState } from "react";
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="app">
      <nav className="bg-gray-300">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center py-6">
            <div>
              <span className="text-gray-700 text-2xl font-bold">
                HorseHaven
              </span>
            </div>

            <div className="hidden lg:flex lg:space-x-8 font-medium">
              <a href="/" className="text-gray-700 hover:text-[#6A64F1]">
                Home
              </a>
              <a href="/" className="text-gray-700 hover:text-[#6A64F1]">
                About us
              </a>

              <a href="/" className="text-gray-700 hover:text-[#6A64F1]">
                Contact Us
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="/booking"
                className="rounded-md border font-bold border-gray-900 py-2 px-6 text-gray-700 hover:bg-[#6A64F1] hover:text-gray-100 transition duration-300"
              >
                Book Now
              </a>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className="text-gray-700 focus:outline-none"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="lg:hidden bg-gray-300 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-4 text-lg px-10">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col gap-4 font-semibold tracking-wide"
                >
                  <a
                    href="/"
                    onClick={closeMenu}
                    className="text-gray-700 hover:text-[#6A64F1]"
                  >
                    Home
                  </a>
                  <a
                    href="/"
                    onClick={closeMenu}
                    className="text-gray-700 hover:text-[#6A64F1]"
                  >
                    About us
                  </a>
                  <a
                    href="/"
                    onClick={closeMenu}
                    className="text-gray-700 hover:text-[#6A64F1]"
                  >
                    Contact us
                  </a>
                 
                </motion.div>
                <motion.a
                  href="/booking"
                  onClick={closeMenu}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="rounded-md border border-gray-900 py-2 px-6 text-gray-700 hover:bg-[#6A64F1] hover:text-gray-100 transition duration-300 mt-4 block w-max"
                >
                  Book Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
