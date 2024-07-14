import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Horses from "./Horses"; // Adjust the import path if necessary
import { userSchema } from "../../validation/userValidation"; // Adjust the import path if necessary
import Modal from "./Modal"; // Adjust the import path if necessary

const Booking = () => {
  const [selectedHorse, setSelectedHorse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone_number: "",
      email: "",
      date: "",
      time: "00:00",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      console.log("Selected horse:", selectedHorse);
      setIsModalOpen(true);
    },
  });

  const handleTimeChange = (e) => {
    const time = e.target.value;
    const [hour] = time.split(":");
    formik.setFieldValue("time", `${hour}:00`);
  };

  // Function to calculate tomorrow's date
  const getTomorrowDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Move to tomorrow
    return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };

  const tomorrowDate = getTomorrowDate();
  console.log("Tomorrow's Date: ", tomorrowDate); // Check if the calculation is correct

  return (
    <div className="flex items-center justify-center p-12 m-10">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-center">Book a Horse</h1>
          </div>
          <Horses
            selectedHorse={selectedHorse}
            setSelectedHorse={setSelectedHorse}
          />
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${
                formik.touched.name && formik.errors.name ? "border-red-500" : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              placeholder="Enter your phone number"
              className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${
                formik.touched.phone_number && formik.errors.phone_number
                  ? "border-red-500"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone_number}
            />
            {formik.touched.phone_number && formik.errors.phone_number ? (
              <div className="text-red-500 text-sm">
                {formik.errors.phone_number}
              </div>
            ) : null}
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  min={tomorrowDate}
                  className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${
                    formik.touched.date && formik.errors.date
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className="text-red-500 text-sm">{formik.errors.date}</div>
                ) : null}
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${
                    formik.touched.time && formik.errors.time
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={handleTimeChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.time}
                />
                {formik.touched.time && formik.errors.time ? (
                  <div className="text-red-500 text-sm">{formik.errors.time}</div>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedHorse={selectedHorse}
      />
    </div>
  );
};

export default Booking;
