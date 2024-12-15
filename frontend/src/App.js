import React, { useState } from 'react';
import './App.css';
import SignLanguageDetector from './components/SignLanguageDetector';
import TextToSpeech from './components/TextToSpeech';
import SpeechToText from './components/SpeechToText';
import SignLanguageTutorial from './components/SignLanguageTutorial';
import LiveChat from './components/LiveChat';

function App() {
  const [activeTab, setActiveTab] = useState('communication');

  const renderContent = () => {
    switch(activeTab) {
      case 'communication':
        return (
          <div className="communication-tools">
            <SignLanguageDetector />
            <TextToSpeech />
            <SpeechToText />
          </div>
        );
      case 'learn':
        return <SignLanguageTutorial />;
      case 'chat':
        return <LiveChat />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SignConnect</h1>
        <p>Breaking Communication Barriers</p>
        <nav className="main-nav">
          <button 
            className={activeTab === 'communication' ? 'active' : ''} 
            onClick={() => setActiveTab('communication')}
          >
            Communication Tools
          </button>
          <button 
            className={activeTab === 'learn' ? 'active' : ''} 
            onClick={() => setActiveTab('learn')}
          >
            Learn Sign Language
          </button>
          <button 
            className={activeTab === 'chat' ? 'active' : ''} 
            onClick={() => setActiveTab('chat')}
          >
            Live Support
          </button>
        </nav>
      </header>
      <main className="App-main">
        {renderContent()}
      </main>
      <footer className="App-footer">
        <p>SignConnect - Empowering Communication for All</p>
      </footer>
    </div>
  );
}

export default App;
