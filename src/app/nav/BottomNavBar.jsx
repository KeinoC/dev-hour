import React, { useState, useEffect } from "react";

export default function BottomNavBar() {
    return (
        <div className="overflow-x-hidden w-screen left-0 absolute bottom-20 justify-center item-center p-0 m-0 ">
            <div className="item-center flex flex-row max-w-screen justify-around">
                <button className="w-1/3 bg-slate-100 hover:bg-yellow-700 text-xs text-slate-900 font-bold py-2 px-4 mx-1 rounded-full">Job Board</button>
                <button className="w-1/3 bg-slate-100 hover:bg-yellow-700 text-xs text-slate-900 font-bold py-2 px-4 mx-1 rounded-full">Dev Directory</button>
            </div>
        </div>
    );
}
