import React from 'react'

export default function Title(props: { title: string }) {
    return (
        <div className="flex justify-center items-center">
            <h1
                className="text-4xl text-black font-bold mt-8"
                style={{
                    fontFamily: 'computer-modern',
                }}
            >
                {props.title}
            </h1>
        </div>
    )
}
