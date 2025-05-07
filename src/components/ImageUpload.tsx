"use client";

import React from "react";
import { ImageUploadProps } from "@/types/type";


const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => onImageSelect(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <label className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded cursor-pointer">
      Upload Photo
      <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
    </label>
  );
};

export default ImageUpload;
