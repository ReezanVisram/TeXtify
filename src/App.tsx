import React, { useState } from 'react'
import './App.css'

import { Document_t } from './interfaces'
import Panel from './components/Panel'

function App() {
    const [state, setState] = useState<Document_t>({
        title: 'TeXtify',
        sections: [
            {
                subheading: 'Behold the quadratic formula:',
                latex: ['$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$'],
            },
        ],
    })

    const appendLatex = (latex: string) => {
        const newState = { ...state }
        newState.sections[0].latex.push(latex)
        setState(newState)
    }

    return (
        <div>
            <Panel state={state} appendLatex={appendLatex} />
        </div>
    )
}

export default App
