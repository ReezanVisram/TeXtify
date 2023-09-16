import React from "react";

import RecordButton from "./RecordButton";
import Document from "./Document";

export default function Panel() {
    return (
        <div className="absolute w-full h-full bg-slate-900 justify-center items-center flex">
            <RecordButton />
            <Document />
        </div>
    );
}