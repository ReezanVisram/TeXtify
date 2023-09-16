import React from 'react';
import axios from 'axios';
import useSpeechToText, { ResultType } from 'react-hook-speech-to-text';

export default function RecordButton() {
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
    },
    onStoppedSpeaking: () => {
      console.log(results);
      while (results.length === 0) {
          console.log('waiting');
      }
      console.log(results);
      axios.post('https://hack-the-north-2023-server-bbgxeko6ga-uc.a.run.app/transcription/translate', {
              raw_speech: results[0],
          }, {
              headers: {
                  'Content-Type': 'application/json',
              },
          }).then((response) => {
              console.log(response);
          }).catch((error) => {
              console.log(error);
          });
    }
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div className='relative w-1/2 h-1/2 bg-red-100'>
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <ul>
        {interimResult && <li>{interimResult}</li>}
      </ul>
    </div>
  );
}