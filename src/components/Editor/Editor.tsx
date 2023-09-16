import React from 'react'
import { Document_t } from '../../interfaces'
import RecordButton from './RecordButton'
import Section from './Section'
import Title from './Title'

export default function Editor(props: {
    state: Document_t
    appendLatex: (latex: string, index: number) => void
    addSection: () => void
    updateTitle: (title: string) => void
    updateLatex: (latex: string, index: number, latexIndex: number) => void
    updateSubheading: (subheading: string, index: number) => void
}) {
    return (
        <div className="relative w-1/2 h-full bg-white flex flex-col justify-start items-left border-r-2 border-black">
            <Title title={props.state.title} updateTitle={props.updateTitle} />
            {props.state.sections.map((section) => {
                return (
                    <Section
                        section={section}
                        appendLatex={props.appendLatex}
                        updateLatex={props.updateLatex}
                        updateSubheading={props.updateSubheading}
                    />
                )
            })}
            <button onClick={props.addSection}>Add Section</button>
        </div>
    )
}
