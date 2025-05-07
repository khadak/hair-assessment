"use client";

import React, { useState } from "react";
import ImageUpload from "@/components/ImageUpload";
import CameraCapture from "@/components/CameraCapture";
import ImagePreview from "@/components/ImagePreview";
import { useFormStore } from "@/store/formStore";



const Step4ScalpAssessment = () => {
    const { updateField, nextStep, setSubmitted } = useFormStore();

    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [showOptions, setShowOptions] = useState(true);
    
  
    const handleSubmit = () => {
        if (imageSrc) {
            updateField("profilePhoto", imageSrc); 
            setSubmitted(true);
            nextStep();
          }
    };
  
    return (
      <div className="max-w-md mx-auto p-4 space-y-6">
        {showOptions ? (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold">Upload or Capture Profile Photo</h2>
            <ImageUpload
              onImageSelect={(dataUrl) => {
                setImageSrc(dataUrl);
                setShowOptions(false);
              }}
            />
            <div className="inline-flex relative items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="absolute uppercase px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
            </div>
            <CameraCapture
              onCapture={(dataUrl) => {
                setImageSrc(dataUrl);
                setShowOptions(false);
              }}
            />
          </div>
        ) : (
          <ImagePreview
            imageSrc={imageSrc!}
            onChange={() => {
              setImageSrc(null);
              setShowOptions(true);
            }}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    );
   
}

export default Step4ScalpAssessment;