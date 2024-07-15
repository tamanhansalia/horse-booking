import React from "react";
import horseList from "../../data/horseList"; // Adjust the import path if necessary

const Modal = ({ isOpen, onClose, formData }) => {
  if (!isOpen) return null;

  const { name, phone, email, date, time, selectedHorse } = formData;

  const selectedHorseDetails = horseList.find(
    (horse) => horse.name === selectedHorse
  );

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-gray-500 opacity-75">
        </div>
        <div className="relative bg-white rounded-lg p-8 max-w-md w-full">
        <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4 p-2 text-gray-500 hover:text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          <h2 className="text-2xl font-bold mb-4">Booking Confirmation</h2>
          <p className="mb-4">Thank you for booking a horse ride with us!</p>
          <p className="mb-2">
            <strong>Date:</strong> {date}
          </p>
          <p className="mb-2">
            <strong>Time:</strong> {time}
          </p>
          <p className="mb-2">
            <strong>Horse:</strong> {selectedHorse}
          </p>
          <p className="mb-2">
            <strong>Price:</strong> {selectedHorseDetails?.charges * 2}₹
          </p>

          <img
            src={selectedHorseDetails.image}
            alt={selectedHorseDetails.name}
            width={150}
            height={180}
            className="mt-2 rounded-md"
          />
          <p className="mt-4">
            We look forward to your ride! If you have any questions, please
            contact us at [Contact Information].
          </p>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
