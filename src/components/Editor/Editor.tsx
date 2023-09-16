import React from 'react'
import { Document_t } from '../../interfaces'
import RecordButton from './RecordButton'
import Section from './Section'
import Title from './Title'

export default function Editor(props: {
    state: Document_t
    appendLatex: (latex: string) => void
}) {
    return (
        <div className="relative w-1/2 h-full bg-white flex flex-col justify-start items-left border-r-2 border-black">
            <Title title={props.state.title} />
            {props.state.sections.map((section) => {
                return <Section section={section} />
            })}
        </div>
    )
}
