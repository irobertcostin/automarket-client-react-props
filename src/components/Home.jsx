import React, { useState } from "react";
import Navbar from "./Navbar";
import Filters from "./Filters";







export default function Home() {




    return (
        <div className="relative">
            <div className="test-drive-div flex flex-col items-center justify-end">
                <div className="w-full test-drive h-[200px]"></div>
            </div>

            <div className=" absolute top-8 left-6 border border-fuchsia-500 rounded-lg p-0 shadow-[0_20px_50px_rgba(8,_112,_184,_1)]">
                <Filters />
            </div>





        </div>
    )
}

// Progress section
// loader for every section that contains 
