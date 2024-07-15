import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { userSchema } from "../../validation/userValidation";
import Horses from "./Horses";
import Modal from "./Modal";

const Booking = () => {
  const [isSaturday, setIsSaturday] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone_number: "",
      email: "",
      date: "",
      time: "",
      selectedHorse: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      dispatch({ type: "SET_BOOKING_DETAILS", payload: values });
      setIsModalOpen(true);
    },
  });

  useEffect(() => {
    const selectedDate = new Date(formik.values.date);
    setIsSaturday(selectedDate.getDay() === 6);
  }, [formik.values.date]);

  const fieldVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 0.5, type: "spring", stiffness: 120 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 1, type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={formik.handleSubmit}>
          <motion.div
            className="mb-10"
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl font-bold text-center">Book a Horse</h1>
          </motion.div>
          <Horses
            selectedHorse={formik.values.selectedHorse}
            setSelectedHorse={(horse) =>
              formik.setFieldValue("selectedHorse", horse)
            }
          />
          {formik.errors.selectedHorse && formik.touched.selectedHorse && (
            <div className="text-red-500 text-sm">
              {formik.errors.selectedHorse}
            </div>
          )}
          <motion.div
            className="mb-5"
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
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
          </motion.div>
          <motion.div
            className="mb-5"
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <label
              htmlFor="phone_number"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
            />
            {formik.errors.phone_number && formik.touched.phone_number && (
              <div className="text-red-500 text-sm">
                {formik.errors.phone_number}
              </div>
            )}
          </motion.div>
          <motion.div
            className="mb-5"
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
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
          </motion.div>
          <motion.div
            className="-mx-3 flex flex-wrap"
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
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
                  min={
                    new Date(Date.now() + 86400000)
                      .toISOString()
                      .split("T")[0]
                  }
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                />
                {formik.errors.date && formik.touched.date && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.date}
                  </div>
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
                <select
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                >
                  {!isSaturday && (
                    <>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                    </>
                  )}
                  {isSaturday && (
                    <>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                      <option value="23:00">23:00</option>
                    </>
                  )}
                </select>
                {formik.errors.time && formik.touched.time && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.time}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-[#6A64F1]"
            >
              Book Now
            </button>
          </motion.div>
        </form>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formik.values}
      />
    </div>
  );
};

export default Booking;
