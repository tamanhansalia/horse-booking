import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import img10 from "../../assets/ai-generated-horses-picture.jpg";
import img101 from "../../assets/close-up-black-horse.jpg";
import img102 from "../../assets/horses-running-through-old-western-town.jpg";
import img103 from "../../assets/ai-generated-horses-picture (3).jpg";
import img104 from "../../assets/ai-generated-horses-picture (5).jpg";

const Gallery = () => {
  const galleryImages = [img10, img101, img102, img103, img104];
  const galleryRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const directions = [
    { x: -100, y: 0 },
    { x: -100, y: -100 },
    { x: 100, y: 0 },
    { x: 0, y: -100 },
    { x: 0, y: 100 }
  ];

  const itemVariants = (direction) => ({
    hidden: { opacity: 0, x: direction.x, y: direction.y },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 2 } } 
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && galleryRef.current) {
        const top = galleryRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div id="gallery" ref={galleryRef} className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 text-3xl font-bold p-4">Gallery</h2>
      <motion.div
        className="grid sm:grid-cols-5 gap-4"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            className={`${index === 0 ? "sm:col-span-3 col-span-2 row-span-2" : ""}`}
            variants={itemVariants(directions[index % directions.length])}
          >
            <img className="w-full h-full object-cover" src={img} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
