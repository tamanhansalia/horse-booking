import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/ai-generated-horses-picture.jpg";
import horseList from "../../data/horseList";

const Heromain = () => {
  return (
    <div>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "90vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/ai-generated-horses-picture_23-2150650771.jpg?t=st=1721044360~exp=1721047960~hmac=365398903ebd07740c2f48b713f6752757687c29ab16d02f37d61edc7cc11d6a&w=1800')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <motion.div
                className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="pr-12">
                  <motion.h1
                    className="text-white font-semibold text-5xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    Discover Your Next Horse Riding Adventure
                  </motion.h1>
                  <motion.p
                    className="mt-4 text-lg text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    Welcome to our horse riding booking system. Plan your perfect
                    ride with our easy-to-use platform. Explore scenic trails,
                    book guided tours, and enjoy an unforgettable equestrian
                    experience.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Heromain;
