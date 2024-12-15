import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

const SignLanguageDetector = () => {
  const videoRef = useRef(null);
  const [prediction, setPrediction] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    setupCamera();
  }, []);

  const setupCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const startDetection = () => {
    setIsRecording(true);
    // Here we'll add the sign language detection logic using TensorFlow.js
  };

  const stopDetection = () => {
    setIsRecording(false);
  };

  return (
    <div className="sign-language-detector">
      <h2>Sign Language Detection</h2>
      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{ width: '100%', maxWidth: '640px' }}
        />
      </div>
      <div className="controls">
        <button
          onClick={isRecording ? stopDetection : startDetection}
          className={isRecording ? 'stop' : 'start'}
        >
          {isRecording ? 'Stop Detection' : 'Start Detection'}
        </button>
      </div>
      {prediction && (
        <div className="prediction">
          <h3>Detected Sign:</h3>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default SignLanguageDetector;
