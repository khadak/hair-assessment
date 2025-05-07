"use client";

import React from "react";

import { CTAButtonProps } from "@/types/type";

const CTAButton:React.FC<CTAButtonProps> = ({label, onClick, disabled, className = ""}) => {
    return(
        <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`mt-4 max-md:mt-3 px-6 py-2 cursor-pointer rounded-md font-medium text-white  transition-all duration-200  hover:bg-secondary
          ${ disabled ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary"
        } ${className}`}
      >
        {label}
      </button>
    );
}

export default CTAButton ;
