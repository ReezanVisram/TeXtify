import React from 'react'
import { Section_t } from '../../interfaces'

export default function Section(props: { section: Section_t }) {
    return (
        <div className="flex flex-col">
            <input value={props.section.subheading} />
            {props.section.latex.map((latexString) => {
                return <input value={latexString} />
            })}
        </div>
    )
}
