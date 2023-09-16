import React from 'react'

import RecordButton from './Editor/RecordButton'
import Document from './Document/Document'
import Editor from './Editor/Editor'

import { Document_t } from '../interfaces'

export default function Panel(props: {
    state: Document_t
    appendLatex: (latex: string, index: number) => void
    addSection: () => void
    updateTitle: (title: string) => void
    updateLatex: (latex: string, index: number, latexIndex: number) => void
    updateSubheading: (subheading: string, index: number) => void
}) {
    return (
        <div className="w-screen h-screen justify-center items-center flex">
            <Editor
                state={props.state}
                appendLatex={props.appendLatex}
                addSection={props.addSection}
                updateTitle={props.updateTitle}
                updateLatex={props.updateLatex}
                updateSubheading={props.updateSubheading}
            />
            <div className="w-full h-full flex justify-center items-center">
                <Document state={props.state} />
            </div>
        </div>
    )
}
