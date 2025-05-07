"use client";

import React, { useRef, useState } from "react";
import "../style/smoothNoise.css"

interface CameraCaptureProps {
  onCapture: (dataUrl: string) => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsCameraOn(true);

      }
    } catch {
      alert("Unable to access camera.");
    }
  };

  const stopCamera = () => {
    const video = videoRef.current;
    if (video && video.srcObject) {
      const stream = video.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
    }
    setIsCameraOn(false);
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);
        onCapture(canvas.toDataURL("image/png"));
        const stream = video.srcObject as MediaStream;
        stream?.getTracks().forEach((t) => t.stop());
        setIsCameraOn(false);
        stopCamera();
      }
    }
  };

  return (
    <div className="space-y-2">
        {!isCameraOn ? (
            <>
            <button onClick={startCamera} className="px-4 py-2 bg-blue-600 text-white rounded">
                Start Camera
            </button>
            
            </>
        ) : (
            <div className="flex gap-2 justify-center">
            <button onClick={capturePhoto} className="px-4 py-2 bg-green-600 text-white rounded">
                Capture Photo
            </button>
            <button onClick={stopCamera} className="px-4 py-2 bg-red-600 text-white rounded">
                    Cancel Camera
            </button>
            </div>
        )}
         <video ref={videoRef} className="w-full bg-secondary rounded-sm mt-2 tv-noise" />
         <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default CameraCapture;
