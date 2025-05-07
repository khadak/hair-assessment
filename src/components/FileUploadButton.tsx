"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const FileUploadButton = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    // Clean up the object URL when component unmounts or file changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <div className="text-center">
      <label
        htmlFor="uploadFile1"
        className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white text-base font-medium px-4 py-2.5 outline-none rounded w-max cursor-pointer mx-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 mr-2 fill-white inline"
          viewBox="0 0 32 32"
        >
          <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" />
          <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" />
        </svg>
        Upload
        <input
          type="file"
          id="uploadFile1"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {previewUrl && (
        <div className="mt-4">
          <p className="text-sm text-gray-700">Preview:</p>
          <Image
            src={previewUrl}
            alt="Preview"
            className="mx-auto mt-2 max-w-xs rounded shadow"
          />
        </div>
      )}
    </div>
  );
};

export default FileUploadButton;
