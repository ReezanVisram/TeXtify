import React from "react";

import Title from "./Title";
import SubHeading from "./SubHeading";
import Section from "./Section";

export default function Document() {
    return (
        <div className="relative w-1/2 h-full bg-white flex flex-col justify-start items-left">
            <Title title="Record" />
            <Section latex={["$x^2 + y^2 = z^2$", "$E=mc^2$"]} subheading="Record your voice and see the text appear on the screen."/>
        </div>
    );
}