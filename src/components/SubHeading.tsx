import React from "react";

export default function SubHeading(props: { subHeading: string }) {
    return (
        <div className="relative w-full flex justify-left items-center">
            <h2 className="text-2xl text-black font-bold ml-8 mt-8" style={{
                fontFamily: 'computer-modern'
            }}>
                {props.subHeading}
            </h2>
        </div>
    );
}