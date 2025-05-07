"use client";

import React from "react";
import Image from "next/image";
import { ImagePreviewProps } from "@/types/type";


const ImagePreview: React.FC<ImagePreviewProps> = ({ imageSrc, onChange, onSubmit }) => {
  return (
    <div className="text-center space-y-4">
      <Image src={imageSrc} alt="Preview" className="rounded border w-full max-w-xs mx-auto" />
      <div className="space-x-4">
        <button onClick={onChange} className="px-4 cursor-pointer py-2 bg-gray-600 text-white rounded">
          Change Photo
        </button>
        <button onClick={onSubmit} className="px-4 py-2 cursor-pointer bg-secondary text-white rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ImagePreview;
