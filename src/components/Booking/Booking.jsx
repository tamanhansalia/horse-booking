import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Horses from "./Horses"; 
import { userSchema } from "../../validation/userValidation";
import Modal from "./Modal";

const Booking = () => {
  const [isSaturday, setIsSaturday] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      selectedHorse: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      setFormData(values);
      setIsModalOpen(true);
      console.log("Form Submitted", values);
    },
  });

  useEffect(() => {
    const selectedDate = new Date(formik.values.date);
    const dayOfWeek = selectedDate.getDay();
    setIsSaturday(dayOfWeek === 6);
  }, [formik.values.date]);

  // Calculate tomorrow's date
  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  return (
    <div className="flex items-center justify-center p-12 m-10">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-center">Book a Horse</h1>
          </div>
          <Horses
            selectedHorse={formik.values.selectedHorse}
            setSelectedHorse={(horse) => formik.setFieldValue("selectedHorse", horse)}
          />
          {formik.errors.selectedHorse && formik.touched.selectedHorse && (
            <div className="text-red-500 text-sm">{formik.errors.selectedHorse}</div>
          )}
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
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
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
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            )}
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
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
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
                  min={getTomorrowDate()} // Set the minimum date to tomorrow
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                />
                {formik.errors.date && formik.touched.date && (
                  <div className="text-red-500 text-sm">{formik.errors.date}</div>
                )}
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
                  type="text"
                  name="time"
                  id="time"
                  readOnly // Make the input read-only
                  value={formik.values.time ? `${formik.values.time.split(':')[0]}:00` : ''} // Set minutes to '00'
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {/* Hidden input to submit actual time value */}
                <input
                  type="hidden"
                  name="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                />
                {formik.errors.time && formik.touched.time && (
                  <div className="text-red-500 text-sm">{formik.errors.time}</div>
                )}
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} formData={formData} />
    </div>
  );
};

export default Booking;
