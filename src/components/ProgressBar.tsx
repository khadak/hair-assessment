"use client";

import React from "react";

interface ProgressBarProp {
    current: number;
    total: number
}

const ProgressBar:React.FC<ProgressBarProp> = ({current, total}) => {

    const percent = Math.round((current / total) * 100);

    return(
        <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                className="bg-green-500 h-2.5 rounded-full transition-all"
                style={{ width: `${percent}%` }}
                ></div>
            </div>
            <p className="text-xs text-gray-600 mt-1 text-right">{percent}% completed</p>
        </div>
    )

}

export default ProgressBar;