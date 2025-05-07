"use client";

import React from "react";
import { useFormStore } from "@/store/formStore";


const LogoutButton = () => {

    const resetData = useFormStore( (state) => state.resetForm)

    const handleLogout = () => {
        resetData();
        useFormStore.persist?.clearStorage?.();
        window.location.reload();
    }
    return(
        <button
        onClick={handleLogout}
        className="cursor-pointer px-6 py-2 bg-white text-black rounded hover:bg-primary hover:text-white transition"
      >
        Logout
      </button>
    )
}

export default LogoutButton;