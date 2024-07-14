import React, { useState } from "react";
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
            <div
              key={index}
              onClick={() => handleHorseClick(item)}
              className={`m-2 p-2 border rounded-md hover:border-[#6A64F1] 
                text-[#6B7280] outline-none
                cursor-pointer hover:shadow-md ${
                  item === selectedHorse ? "border-2 border-[#6A64F1]" : null
                }`}
            >
              <img
                src={item.image}
                alt={item.name}
                width={75}
                height={90}
                className="w-full rounded-md"
              />
              <h2 className="flex flex-col sm:flex-row justify-between items-center pt-1 px-5 text-gray-800 ">
                {item.name}
                <span className="">{item.charges * 2}₹</span>
              </h2>
            </div>
          ))}
        </div>
        {/* {selectedHorse && (
          <div className="mt-5">
            <h2 className="text-lg font-bold">Selected Horse Details:</h2>
            <p>Name: {selectedHorse.name}</p>
            <p>Charges: {selectedHorse.charges * 2}₹</p>
            <img
              src={selectedHorse.image}
              alt={selectedHorse.name}
              width={150}
              height={180}
              className="mt-2 rounded-md"
            />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Horses;
