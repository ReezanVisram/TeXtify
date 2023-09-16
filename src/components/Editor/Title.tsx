import React from 'react'

export default function Title(props: {
    title: string
    updateTitle: (title: string) => void
}) {
    return (
        <input
            value={props.title}
            className="text-4xl font-bold"
            placeholder="Title"
            type="text"
            onChange={(e) => props.updateTitle(e.target.value)}
        />
    )
}
