import React from "react";
import { motion } from "framer-motion"; 
import horseList from "../../data/horseList";

const Horses = ({ selectedHorse, setSelectedHorse }) => {
  const handleHorseClick = (horse) => {
    setSelectedHorse(horse.name);
  };

  return (
    <div>
      <div className="mb-5 font-medium">
        <label
          htmlFor="horse"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Select Horse
        </label>
        <div className="grid grid-cols-2">
          {horseList.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => handleHorseClick(item)}
              className={`m-2 p-2 border rounded-md hover:border-[#6A64F1] 
                text-[#6B7280] outline-none
                cursor-pointer hover:shadow-md ${
                  item.name === selectedHorse ? "border-2 border-[#6A64F1]" : ""
                }`}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
            >
              <img
                src={item.image}
                alt={item.name}
                width={75}
                height={90}
                className="w-full rounded-md"
              />
              <h2 className="flex flex-col sm:flex-row justify-between items-center pt-1 px-5 text-gray-800">
                {item.name}
                <span className="">{item.charges * 2}₹</span>
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horses;
