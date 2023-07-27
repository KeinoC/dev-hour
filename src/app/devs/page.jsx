"use client"
import React from "react";
import BottomNavBar from "../nav/BottomNavBar";
import RenderDevCards from "./DevRenders";
import "./dev.css"

export default function DevsPage() {
    return (
        <div className="dev-card-page">
            <h1 className="dev-directory">Dev Directory</h1>
            <RenderDevCards />
            <BottomNavBar />
        </div>
    );
}
