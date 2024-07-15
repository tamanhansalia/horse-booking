// src/components/DisplayFormData.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const DisplayFormData = () => {
  const formData = useSelector((state) => state.form.formData);

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Submitted Form Data</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Date:</strong> {formData.date}</p>
      <p><strong>Time:</strong> {formData.time}</p>
      <p><strong>Selected Horse:</strong> {formData.selectedHorse}</p>
    </div>
  );
};

export default DisplayFormData;
