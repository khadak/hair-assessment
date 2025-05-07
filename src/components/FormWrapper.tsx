"use client";

import React from "react";
import { FormWrapperProps } from "@/types/type";



const FormWrapper : React.FC<FormWrapperProps> = ({title, description,  children }: FormWrapperProps) => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-center max-md:text-xl max-md:mb-3">{title}</h2>
            <p className="text-center max-md:mb-3">{description}</p>
            {children}
        </>
    )
}

export default FormWrapper;