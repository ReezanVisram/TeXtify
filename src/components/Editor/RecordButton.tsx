import React, { useState } from 'react'
import axios from 'axios'
import useSpeechToText, { ResultType } from 'react-hook-speech-to-text'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

export default function RecordButton(props: {
    index: number
    appendLatex: (latex: string, index: number) => void
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
        googleApiKey: process.env.REACT_APP_GCLOUD_API_KEY,
        googleCloudRecognitionConfig: {
            encoding: 'LINEAR16',
            languageCode: 'en-US',
        },
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
                    props.appendLatex(latex, props.index)
                    console.log(props.index)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <div className="flex justify-end mt-2">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={isRecording ? stopSpeechToText : startSpeechToText}
            >
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            <ul>
                {results.map((result, index) => {
                    handleResultProcessing(result as string, index)
                    return <></>
                })}
            </ul>
        </div>
    )
}
