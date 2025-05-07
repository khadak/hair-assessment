"use client";

import React from "react";
import { FormWrapperProps } from "@/types/type";



const FormWrapper : React.FC<FormWrapperProps> = ({title, description,  children }: FormWrapperProps) => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
            <p className="text-center">{description}</p>
            {children}
        </>
    )
}

export default FormWrapper;