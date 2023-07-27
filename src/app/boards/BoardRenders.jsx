"user client"
import React from "react";
import { BsLinkedin, BsBook } from "react-icons/bs";
import "./board.css"
import BottomNavBar from "../nav/BottomNavBar";

const jobBoardsArray = [
    {
        id: 1,
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/search/?f_LF=f_AL&geoId=103644278&keywords=software%20engineer&location=United%20States",
        rating: 0,
        icon: "IN",
        description: "testing linkedin description"
    },
    {
        id: 2,
        name: "Career Builder",
        url: "https://www.careerbuilder.com/jobs-software-engineer",
        rating: 0,
        icon: "CB",
        description: "testing cb description"
    }
];



const renderJobBoards = jobBoardsArray.map((jobBoard, index) => {
    return (
        <div key={index} className="board-card">
            <h1>{jobBoard.name}</h1>
            <a href={jobBoard.url}>
                <div className="icon-wrapper">
                    <div className="icon">

                    {jobBoard.icon}
                    </div>
                    <div className="description">

                    {jobBoard.description}
                    </div>
                </div>
            </a>
        </div>
    );
})


export function RenderBoardCards() {
    return (<>
{renderJobBoards}
    </>
    );
}