import React from 'react'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

export default function LaTeX(props: { latex: string }) {
    return (
        <div className="relative w-full flex justify-center items-center">
            <h3 className="text-lg text-black font-bold mt-4">
                <Latex>{props.latex}</Latex>
            </h3>
        </div>
    )
}
