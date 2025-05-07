"use client";

import React from "react";
import Image from "next/image";
import LogoutButton from "./LogoutButton";
import { useFormStore } from "@/store/formStore";
import { HeaderProps } from "@/types/type";




const Header: React.FC<HeaderProps> = ({name}) => {
    const isSubmitted = useFormStore((state) => state.isSubmitted);

    return(
        <>
        <header className="w-full py-4 px-6 bg-secondary shadow-sm flex justify-between items-center md:mb-6 max-md:py-3">
            <div>
                <Image width={120} height={40}  alt="Traya" src="/images/traya-logo.webp" className="max-md:h-6 max-md:w-auto" />
                <h1 className="text-xl font-semibold text-white max-md:text-base">
                    {name ? `Hi, ${name} 👋` : 'Welcome to Hair Assessment'}
                </h1>
            </div>
            {isSubmitted && <LogoutButton />}
        </header>
        </>
    )
}

export default Header;