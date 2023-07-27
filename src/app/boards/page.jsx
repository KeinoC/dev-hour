"use client"
import React from 'react';
import { RenderBoardCards } from "./BoardRenders"
import BottomNavBar from "../nav/BottomNavBar";

export default function BoardPage() {
    return (
        <div>
            <RenderBoardCards />
            <BottomNavBar />
        </div>
    )
}