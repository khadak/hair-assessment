"use client";

import React from "react";
import { InputProps } from "@/types/type";


const Input: React.FC<InputProps> = ({id, name, label, value, placeholder, type ="text", error, onChange, onBlur, style}) => {
    return(
        <div className="relative mb-6">
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                className={`peer p-4 block w-full bg-gray-100 border-transparent rounded-lg sm:text-sm placeholder:text-transparent focus:border-secondary outline-secondary focus-visible:ring-secondary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600
                            focus:pt-6
                            focus:pb-2
                            not-placeholder-shown:pt-6
                            not-placeholder-shown:pb-2
                            autofill:pt-6
                            autofill:pb-2`}
                style={style}
            />
            

            <label htmlFor={id} className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                        peer-not-placeholder-shown:scale-90
                        peer-not-placeholder-shown:t  ranslate-x-0.5
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500 dark:text-neutral-500">
                {label}
            </label>
            
            {error && <div className="text-sm text-red-500 mt-1">{error}</div>}

        </div>
    );
}

export default Input;