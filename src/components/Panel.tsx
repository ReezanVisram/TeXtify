import React from 'react'

import RecordButton from './Editor/RecordButton'
import Document from './Document/Document'
import Editor from './Editor/Editor'

import { Document_t } from '../interfaces'

export default function Panel(props: {
    state: Document_t
    appendLatex: (latex: string) => void
}) {
    return (
        <div className="w-screen h-screen justify-center items-center flex">
            <Editor state={props.state} appendLatex={props.appendLatex} />
            <div className="w-full h-full flex justify-center items-center">
                <Document state={props.state} />
            </div>
        </div>
    )
}
