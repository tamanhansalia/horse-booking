import React from "react";
import { motion } from "framer-motion"; 
import horseList from "../../data/horseList";
import gif from "../../assets/icons8-tick.gif";

const Modal = ({ isOpen, onClose, formData }) => {
  const modalVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" }, 
    },
  };

  if (!isOpen) return null;

  const selectedHorse = horseList.find((horse) => horse.name === formData.selectedHorse);
  const price = selectedHorse ? selectedHorse.charges : 0;

  const formattedDate = new Date(formData.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Function to generate calendar event link
  const generateCalendarLink = () => {
    const { date, time, selectedHorse } = formData;
    const startDateTime = encodeURIComponent(`${date}T${time}`);
    const endDateTime = encodeURIComponent(`${date}T${time}`);

    const calendarLink = `https://calendar.google.com/calendar/r/eventedit?text=Horse%20Riding%20Event&dates=${startDateTime}/${endDateTime}&details=Join%20us%20for%20a%20horse%20riding%20event%20with%20${selectedHorse}&location=Horse%20Riding%20Venue&sf=true&output=xml`;

    return calendarLink;
  };

  return (
    <motion.div
      className="fixed z-10 inset-0 overflow-y-auto"
      initial="hidden"
      animate="visible"
      variants={modalVariants}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="relative bg-white rounded-lg p-8 max-w-md w-full">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4 p-2 text-gray-500 hover:text-gray-800"
          >
            <svg
              className="w-6 h-6 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center mb-4">
            <motion.img
              src={gif}
              alt="GIF"
              className="w-9 h-9 mr-4"
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.6 }} 
            />
            <h2 className="text-2xl mt-3 font-semibold text-green-600 mb-4">Booking Confirmation</h2>
          </div>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" } }} // Animation properties
          >
            Hi{" "}
            <span className="font-semibold">{formData.name}</span>,
            <br /> Thank you for booking a horse ride with us! You booked{" "}
            <span className="font-semibold">{formData.selectedHorse}</span> on{" "}
            <span className="font-semibold">{formattedDate}</span> at{" "}
            <span className="font-semibold">{formData.time}</span>.
          </motion.p>
          <div className="flex flex-col  justify-between items-center mb-4">
            <a
              href={generateCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500  hover:text-blue-700 mb-4"
            >
              Add Event to Calendar
            </a>
            <motion.button
              onClick={onClose}
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-[#6A64F1]"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              transition={{ duration: 0.3 }} 
            >
              Close
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
