import React, { useState } from 'react'
import axios from 'axios'
import useSpeechToText, { ResultType } from 'react-hook-speech-to-text'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

export default function RecordButton(props: {
    appendLatex: (latex: string) => void
}) {
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        crossBrowser: true,
        useOnlyGoogleCloud: true,
        googleApiKey: 'AIzaSyDVVYrU28BchOb75bO_3rcpzE3Y3pydBUY',
        googleCloudRecognitionConfig: {
            encoding: 'LINEAR16',
            languageCode: 'en-US',
        }
    })
    const [list, setList] = useState<string[]>([])
    const [processedResults, setProcessedResults] = useState<number[]>([])

    if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>

    const handleResultProcessing = (result: string, index: number) => {
        if (!processedResults.includes(index)) {
            axios
                .post(
                    'https://hack-the-north-2023-server-bbgxeko6ga-uc.a.run.app/transcription/translate',
                    {
                        raw_speech: result,
                    }
                )
                .then((response) => {
                    const latex = `$${response.data.latex}$`
                    setList((prevList) => [...prevList, latex])
                    setProcessedResults((prevProcessed) => [
                        ...prevProcessed,
                        index,
                    ])
                    props.appendLatex(latex)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <div className="relative w-1/2 h-full bg-white flex flex-col justify-start items-left border-r-2 border-black">
            <h1>Recording: {isRecording.toString()}</h1>
            <button
                onClick={isRecording ? stopSpeechToText : startSpeechToText}
            >
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            <ul>
                {list.map((listElement, index) => {
                    return (
                        <li key={index}>
                            <Latex>{listElement}</Latex>
                        </li>
                    )
                })}
                {results.map((result, index) => {
                    handleResultProcessing(result as string, index)
                    return <li key={index}></li>
                })}
            </ul>
        </div>
    )
}
