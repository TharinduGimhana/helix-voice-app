import React, { ReactNode } from "react";
import "./Background.css"; // Import external CSS

interface BackgroundWidgetProps {
    title: ReactNode;
    overlayColor?: string;
    opacity?: number;
}

const Background: React.FC<BackgroundWidgetProps> = ({
    title,
    overlayColor = "rgb(177, 214, 235)", // Default to semi-transparent black
    opacity = 0.8,
}) => {
    return (
        <div
            className="background-widget"
        >
            <div
                className="overlay"
                style={{ backgroundColor: overlayColor, opacity }}
            ></div>
            <h1 className="title">{title}</h1>
        </div>
    );
};

export default Background;
