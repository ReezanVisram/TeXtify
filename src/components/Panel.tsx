import React from "react";

import RecordButton from "./RecordButton";

export default function Panel() {
    return (
        <div className="absolute w-full h-full bg-slate-900" style={
            {
                background: 'black'
            }
        }>
            <RecordButton />
        </div>
    );
}