import React, { useState } from 'react'
import './App.css'

import { Document_t } from './interfaces'
import Panel from './components/Panel'

function App() {
    const [state, setState] = useState<Document_t>({
        title: 'TeXtify',
        sections: [
            {
                index: 0,
                subheading: 'Behold the quadratic formula:',
                latex: ['$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$'],
            },
        ],
    })

    const addSection = () => {
        const newState = { ...state }
        newState.sections.push({
            index: newState.sections.length,
            subheading: '',
            latex: [],
        })
        setState(newState)
    }

    const appendLatex = (latex: string, index: number) => {
        const newState = { ...state }
        newState.sections[index].latex.push(latex)
        setState(newState)
        console.log(state)
    }

    const removeLatex = (sectionIndex: number, latexIndex: number) => {
        const newState = { ...state }
        newState.sections[sectionIndex].latex.splice(latexIndex, 1)
        setState(newState)
    }

    const removeSection = (sectionIndex: number) => {
        const newState = { ...state }
        newState.sections.splice(sectionIndex, 1)
        setState(newState)
    }

    const updateTitle = (title: string) => {
        const newState = { ...state }
        newState.title = title
        setState(newState)
    }

    const updateLatex = (latex: string, index: number, latexIndex: number) => {
        const newState = { ...state }
        newState.sections[index].latex[latexIndex] = latex
        setState(newState)
    }

    const updateSubheading = (subheading: string, index: number) => {
        const newState = { ...state }
        newState.sections[index].subheading = subheading
        setState(newState)
    }

    return (
        <div>
            <Panel
                state={state}
                appendLatex={appendLatex}
                addSection={addSection}
                updateTitle={updateTitle}
                updateLatex={updateLatex}
                updateSubheading={updateSubheading}
                removeLatex={removeLatex}
                removeSection={removeSection}
            />
        </div>
    )
}

export default App
