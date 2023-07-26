"use client";
import React, { useState, useEffect } from "react";
import { RenderTagLines } from "./HomeRenders";
import BottomNavBar from "../nav/BottomNavBar";

export default function HomePage() {
    return (
        <div className="w-screen flex flex-col">
            <div>
                <h1 className="text-center text-xl p-0 m-0">
                    Welcome to DevHour
                </h1>
                <RenderTagLines />
            </div>
            <div className=" w-screen justify-center h-1/6 absolute bottom-0">
                <BottomNavBar />
            </div>
        </div>
    );
}
