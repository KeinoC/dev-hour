import React from "react";
import { RenderTagLines } from "./HomeRenders";


export default function HomePage() {
    return (
        <div>
            <h1 className="text-center text-xl p-0 m-0">Welcome to DevHour</h1>
            <RenderTagLines />
        </div>
    );
}