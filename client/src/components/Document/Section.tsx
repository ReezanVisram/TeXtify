import React from 'react'

import LaTeX from './LaTeX'
import SubHeading from './SubHeading'

export default function Section(props: {
    latex: string[]
    subheading: string
}) {
    return (
        <div className="relative w-full flex flex-col justify-center items-center">
            <SubHeading subHeading={props.subheading} />
            {props.latex.map((latex, index) => {
                return <LaTeX latex={latex} key={index} />
            }, [])}
        </div>
    )
}
