import React from 'react'

export default function Title(props: {
    title: string
    updateTitle: (title: string) => void
}) {
    return (
        <input
            value={props.title}
            className="text-4xl h-12 font-bold text-center mb-2"
            placeholder="Title"
            type="text"
            onChange={(e) => props.updateTitle(e.target.value)}
        />
    )
}
