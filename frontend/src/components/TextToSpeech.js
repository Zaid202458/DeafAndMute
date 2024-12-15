import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');

  const speak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in your browser.');
    }
  };

  return (
    <div className="text-to-speech">
      <h2>Text to Speech</h2>
      <div className="input-container">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type text here to convert to speech..."
          rows={4}
        />
      </div>
      <button onClick={speak} className="speak-button">
        Speak
      </button>
    </div>
  );
};

export default TextToSpeech;
