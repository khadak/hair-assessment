"use client";

import React from "react";
import { StepHeaderProps } from "@/types/type";
import "../style/stepHeader.css"


const StepHeader: React.FC<StepHeaderProps> = ({ currentStep, steps }) => {
  
  return (
    <div className="flex justify-between items-center min-md:-ml-[52px] min-md:-me-[22px] max-md:-ml-[24px]  max-md:-me-[20px]  py-6">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={label} className="flex-1 flex items-center step-container">
            <div className="flex flex-col items-center text-center w-full relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm z-10 transition delay-150 duration-300 md:w-12 md:h-12
                    ${isCompleted ? "bg-green-500" : isActive ? "bg-primary transform: scale-125" : "bg-secondary text-gray-700"}
                    }`}
              >
                {stepNumber}
              </div>
              <div className={`relative pt-1  ${isActive ? "transform scale-125 top-2 max-md:block max-md:absolute max-md:top-[48]" : "max-md:hidden"}`}>
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent transition delay-150 duration-300
                  ${isCompleted? "border-b-green-500" : isActive ? "border-b-primary" : "border-b-secondary"}`
                }
                ></div>
                <span
                className={`mt-2 text-xs whitespace-nowrap rounded-sm bg-gray-300 py-1 text-white text-shadow-lg px-1 transition delay-150 duration-300 font-medium md:text-sm md:px-2
                  ${isCompleted? "bg-green-500" : isActive ? "text-primary relative  bg-primary" : "bg-secondary"}`}
              >
                {label}
              </span>
              </div>    
            

              {/* Line connecting to the next step */}
              {!isLast && (
                <div className="absolute max-md:top-4 md:top-6 left-1/2 w-full h-0.5 z-0">
                  <div className="bg-secondary w-full h-full relative">
                    <div
                      className={`absolute top-0 left-0 h-full transition delay-150 duration-900 ${
                        isCompleted ? "bg-green-400 w-full isCompleted" : "w-0"

                      }`}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepHeader;
