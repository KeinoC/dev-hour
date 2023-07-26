"use client"

import React, {useEffect, useState} from "react";

export function RenderTagLines() {
    const tagLineOptions = [
        "Where Every Developer Forges Their Fortune.",
        "Where Luck is Handcrafted, Not Handed Out.",
        "Where Opportunities are Forged, Not Found.",
        "Where Your Ambitions Are Hammered Into Success.",
        "Where Crafting Luck is Part of the Code.",
        "Where Success is Wrought With Your Own Hands.",
        "Where Fortunes are Forged, Not Fortuitous.",
        "Where the Anvil of Ambition Meets the Hammer of Hard Work.",
        "Where Every Line of Code Hammers Out Success.",
        "Where We Hammer Out Fortune, Not Wait For It.",
    ];

    const [currentTagline, setCurrentTagline] = useState("");

    function setTagline() {
        const randomIndex = Math.floor(Math.random() * tagLineOptions.length);
        setCurrentTagline(tagLineOptions[randomIndex]);
    }

    useEffect(() => {
        setTagline();
        const interval = setInterval(() => {
            setTagline();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="text-slate-600 flex text-center " >{currentTagline}</div>
        </div>
    );
}
