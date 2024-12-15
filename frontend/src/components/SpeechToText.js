import React, { useState } from 'react';

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript(transcript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  };

  return (
    <div className="speech-to-text">
      <h2>Speech to Text</h2>
      <div className="controls">
        <button
          onClick={startListening}
          className={isListening ? 'listening' : ''}
        >
          {isListening ? 'Listening...' : 'Start Listening'}
        </button>
      </div>
      <div className="transcript">
        <h3>Transcript:</h3>
        <p>{transcript || 'Start speaking to see the text here...'}</p>
      </div>
    </div>
  );
};

export default SpeechToText;
