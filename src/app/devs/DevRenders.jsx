"user client"
import React from "react";
import { BsLinkedin, BsBook } from "react-icons/bs";
import "./dev.css";

const devArray = [
    {
        id: 1,
        name: "Keino Chichester",
        profileImg: "https://ca.slack-edge.com/T04BU5DT3T7-U05G4BTH5B8-2e7d73edfcbe-512",
        portfolio: "http://hello@keino.dev",
        stack: [
            { name: "react", icon: "react" },
            { name: "flask", icon: "flask" },
        ],
        bio: "Always up to no good, this guy",
        social: [
            { name: "linkedin", icon: "icon", link: "#" },
            { name: "github", icon: "icon", link: "#" },
        ],
    },
    {
        id: 2,
        name: "Forrest Jones",
        profileImg: "https://forrest-jones.github.io/Forrest-Jones-Website/img/img-2.png",
        portfolio: "https://forrest-jones.github.io/Forrest-Jones-Website/",
        stack: [
            { name: "react", icon: "react" },
            { name: "flask", icon: "flask" },
        ],
        bio: "Hey y'all I'm Forrest and... what's that? ... ugh! say run one more time and i'll #%$$ing bop you!!",
        social: [
            { name: "linkedin", icon: "icon", link: "#" },
            { name: "github", icon: "icon", link: "#" },
        ],
    },
];

const devCards = devArray.map((dev, index) => {
    return (
        <div key={index} className="dev-card">
        <div className="profile-image-wrapper">
            <img src={dev.profileImg} alt="profile image" />
        </div>
        <div className="dev-details">
            <h1 className="dev-name">{dev.name}</h1>
            <div className="dev-bio">{dev.bio}</div>
            </div>
        </div>
    )
});

export default function RenderDevCards() {

    return (
        <div className="dev-card-container">{devCards}</div>
    )
}