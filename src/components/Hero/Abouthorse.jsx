import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AboutHorse = () => {
  const horses = [
    {
      name: "Chetak",
      description:
        "Chetak is a majestic white horse known for its grace and speed. With a shimmering coat that glows in the sunlight, Chetak embodies elegance and strength.",
      image: "./white-horse-pp2.jpg",
    },
    {
      name: "Pawan",
      description:
        "Pawan is a powerful black stallion with a muscular build and a mane that flows like midnight. Known for its agility and stamina, Pawan is a favorite among riders seeking adventure.",
      image: "./black-horse-pp2.jpg",
    },
    {
      name: "Agni",
      description:
        "Agni is a fiery-colored horse with a coat that shimmers like flames. Agile and spirited, Agni is as vibrant in personality as it is in appearance, making it ideal for riders who crave excitement.",
      image: "./color-horse-pp.jpg",
    },
    {
      name: "Bala",
      description:
        "Bala is a sturdy brown horse with a gentle disposition and a steady gait. Reliable and calm, Bala is perfect for riders looking for a peaceful journey through scenic trails.",
      image: "./brown-horse-pp.jpg",
    },
  ];

  const motionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      motionRefs.current.forEach((ref, index) => {
        const top = ref.getBoundingClientRect().top;
        const bottom = ref.getBoundingClientRect().bottom;

        if (top < window.innerHeight && bottom >= 0) {
          ref.classList.add("animate");
        } else {
          ref.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-[1140px] m-auto px-4 pb-24">
      <h2 className="text-center text-gray-700 text-3xl font-bold p-4">
        Horse Chronicles
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="w-96 md:w-96">
          <motion.img
            ref={(el) => (motionRefs.current[0] = el)}
            src={horses[0].image}
            alt={horses[0].name}
            className="w-96 h-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.div
          ref={(el) => (motionRefs.current[1] = el)}
          className="w-96 md:w-96"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">{horses[0].name}</h3>
          <p>{horses[0].description}</p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <motion.div
          ref={(el) => (motionRefs.current[2] = el)}
          className="w-96 md:w-96 order-last md:order-first"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">{horses[1].name}</h3>
          <p>{horses[1].description}</p>
        </motion.div>
        <div className="w-96 md:w-96 order-first md:order-last">
          <motion.img
            ref={(el) => (motionRefs.current[3] = el)}
            src={horses[1].image}
            alt={horses[1].name}
            className="w-96 h-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="w-96 md:w-96">
          <motion.img
            ref={(el) => (motionRefs.current[4] = el)}
            src={horses[2].image}
            alt={horses[2].name}
            className="w-96 h-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.div
          ref={(el) => (motionRefs.current[5] = el)}
          className="w-96 md:w-96"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">{horses[2].name}</h3>
          <p>{horses[2].description}</p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <motion.div
          ref={(el) => (motionRefs.current[6] = el)}
          className="w-96 md:w-96 order-last md:order-first"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">{horses[3].name}</h3>
          <p>{horses[3].description}</p>
        </motion.div>
        <div className="w-96 md:w-96 order-first md:order-last">
          <motion.img
            ref={(el) => (motionRefs.current[7] = el)}
            src={horses[3].image}
            alt={horses[3].name}
            className="w-96 h-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHorse;
