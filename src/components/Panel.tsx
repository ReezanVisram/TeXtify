import React from 'react'

import RecordButton from './RecordButton'
import Document from './Document'

import { Document_t } from '../interfaces'

export default function Panel(props: {
    state: Document_t
    appendLatex: (latex: string) => void
}) {
    return (
        <div className="absolute w-full h-full bg-slate-900 justify-center items-center flex">
            <RecordButton appendLatex={props.appendLatex} />
            <Document state={props.state} />
        </div>
    )
}
