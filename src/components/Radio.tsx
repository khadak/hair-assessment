"use client";

import React from "react";
import Image from "next/image";
import { RadioProps } from "@/types/type";


const Radio: React.FC<RadioProps> = ({label, name, options, value, error, onChange, style, className, imgWidth, imgHeigth, labelPaddingY="py-4", labelUppercase}) => {
    return(
        <div className="mb-4">
            <div className="block text-lg text-gray-700 font-bold mb-4 max-md:mb-2 max-md:text-base">{label}</div>
            <div className={`flex flex-wrap gap-4 max-md:gap-3 ${className}`}>
                {options.map((options, index) => {
                    
                    const isSelected = value === options.label;
                    const optionIcon = options.icons;
                    console.log(options, "options")
                    return(
                        <label
                            key={`${options.label}-${index}`}
                            style={style}
                            className={`${labelPaddingY} ${labelUppercase ? 'uppercase' : ''} max-md:py-3 max-md:px-2 cursor-pointer flex justify-between items-center border border-secondary rounded-lg px-4  text-base max-md:text-sm font-medium min-w-[80px] text-center transition-all duration-200 hover:scale-[1.04] 
                                ${isSelected ? 'bg-secondary text-white border-secondary' : 'bg-white text-gray-700 border-gray-300 hover:border-primary'}`}
                            >
                            <input
                                type="radio"
                                name={name}
                                value={options.label}
                                checked={isSelected}
                                onChange={onChange}
                                onClick={() => {
                                    if (isSelected && onChange && name) {
                                      // Manually trigger the same logic again
                                      const syntheticEvent = {
                                        target: {
                                          name,
                                          value: options.label,
                                        },
                                      } as unknown as React.ChangeEvent<HTMLInputElement>;
                                      onChange(syntheticEvent);
                                    }
                                  }}
                                className="hidden"
                            />
                            {options.label}
                            {optionIcon && optionIcon?.length != 0  && (
                                <div className="flex justify-center gap-4 p-2 ml-3 max-md:ml-2 rounded-sm bg-gray-100">
                                    {optionIcon.map((src, iconIndex) => (
                                        <Image
                                        key={iconIndex}
                                        src={src}
                                        width={Number(imgWidth || 24)}
                                        height={Number(imgHeigth || 24)}
                                        alt={`${options.label}`}
                                        className={`object-contain`}
                                        />

                                    ))}
                                </div>
                                )
                            }


                        </label>
                    )
                })}
            </div>
            {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
      </div>
    )
}

export default Radio;