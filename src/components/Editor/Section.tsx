import React from 'react'
import { Section_t } from '../../interfaces'
import RecordButton from './RecordButton'

export default function Section(props: {
    section: Section_t
    appendLatex: (latex: string, index: number) => void
    updateLatex: (latex: string, index: number, latexIndex: number) => void
    updateSubheading: (subheading: string, index: number) => void
    removeLatex: (sectionIndex: number, latexIndex: number) => void
    removeSection: (sectionIndex: number) => void
    index: number
}) {
    return (
        <div className="flex flex-col m-1 border-2 border-black rounded-md p-4">
            <div className="flex justify-between">
                <p className="font-bold">Section {props.index + 1}</p>
                <button onClick={() => props.removeSection(props.index)}>
                    X
                </button>
            </div>
            <span className="font-bold">
                <input
                    value={props.section.subheading}
                    onChange={(e) =>
                        props.updateSubheading(
                            e.target.value,
                            props.section.index
                        )
                    }
                    placeholder="Subheading"
                    className="w-full border-2 border-grey-900 rounded-md p-2"
                />
            </span>
            {props.section.latex.map((latexString, latexIndex) => {
                return (
                    <>
                        <div className="flex items-center">
                            <p className="text-grey-400 mr-2">
                                {latexIndex + 1}
                            </p>
                            <input
                                value={latexString}
                                onChange={(e) =>
                                    props.updateLatex(
                                        e.target.value,
                                        props.section.index,
                                        latexIndex
                                    )
                                }
                                className="border-2 border-grey-900 rounded-md my-2 p-1 grow"
                            />
                            <button
                                onClick={() =>
                                    props.removeLatex(props.index, latexIndex)
                                }
                                className="ml-2"
                            >
                                X
                            </button>
                        </div>
                    </>
                )
            })}
            <RecordButton
                appendLatex={props.appendLatex}
                index={props.section.index}
            />
        </div>
    )
}
