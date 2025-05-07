"use client";

import React from "react";
import Image from "next/image";
import { useFormStore } from "@/store/formStore";

const SuccessScreen = () => {
  const { formData } = useFormStore();

  return (
    <div className="max-w-md mx-auto p-6 space-y-4 text-center">
      <h2 className="text-2xl font-bold text-green-600">Assessment Complete!</h2>
      <p className="text-gray-700">Thanks, {formData.name}. Our team will review it and get back to you shortly.</p>

      <div className="bg-white p-4 shadow rounded space-y-2 text-center">
      {formData.profilePhoto && (
          <Image src={formData.profilePhoto} alt="Uploaded Profile" className="w-32 h-32 rounded-full mx-auto mt-4" />
        )}
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        
      </div>
    </div>
  );
};

export default SuccessScreen;
