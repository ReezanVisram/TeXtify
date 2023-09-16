import React from 'react'
import { Section_t } from '../../interfaces'
import RecordButton from './RecordButton'

export default function Section(props: {
    section: Section_t
    appendLatex: (latex: string, index: number) => void
    updateLatex: (latex: string, index: number, latexIndex: number) => void
    updateSubheading: (subheading: string, index: number) => void
}) {
    return (
        <div className="flex flex-col">
            <input
                value={props.section.subheading}
                onChange={(e) =>
                    props.updateSubheading(e.target.value, props.section.index)
                }
            />
            {props.section.latex.map((latexString, latexIndex) => {
                return (
                    <input
                        value={latexString}
                        onChange={(e) =>
                            props.updateLatex(
                                e.target.value,
                                props.section.index,
                                latexIndex
                            )
                        }
                    />
                )
            })}
            <RecordButton
                appendLatex={props.appendLatex}
                index={props.section.index}
            />
        </div>
    )
}
