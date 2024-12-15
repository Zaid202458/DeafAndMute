import React, { useState } from 'react';

const SignLanguageTutorial = () => {
  const [currentLesson, setCurrentLesson] = useState(0);

  const lessons = [
    {
      id: 1,
      title: 'Basic Greetings',
      signs: [
        { name: 'Hello', videoUrl: '/signs/hello.mp4', description: 'Wave your open hand side to side' },
        { name: 'Thank You', videoUrl: '/signs/thankyou.mp4', description: 'Touch your chin with your fingertips and move your hand forward' },
        { name: 'Please', videoUrl: '/signs/please.mp4', description: 'Rub your palm in a circular motion on your chest' }
      ]
    },
    {
      id: 2,
      title: 'Common Phrases',
      signs: [
        { name: 'How are you?', videoUrl: '/signs/howareyou.mp4', description: 'Point to the person, then make the sign for "how"' },
        { name: 'Good Morning', videoUrl: '/signs/goodmorning.mp4', description: 'Make the sign for "good" followed by "morning"' },
        { name: 'I understand', videoUrl: '/signs/understand.mp4', description: 'Touch your temple with your index finger' }
      ]
    }
  ];

  const nextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const previousLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  return (
    <div className="sign-language-tutorial">
      <h2>Learn Sign Language</h2>
      <div className="lesson-container">
        <h3>{lessons[currentLesson].title}</h3>
        <div className="signs-grid">
          {lessons[currentLesson].signs.map((sign, index) => (
            <div key={index} className="sign-card">
              <h4>{sign.name}</h4>
              <div className="video-placeholder">
                {/* Video will be implemented here */}
                <div className="placeholder-text">Sign Video Demo</div>
              </div>
              <p className="description">{sign.description}</p>
            </div>
          ))}
        </div>
        <div className="lesson-navigation">
          <button 
            onClick={previousLesson} 
            disabled={currentLesson === 0}
            className="nav-button"
          >
            Previous Lesson
          </button>
          <button 
            onClick={nextLesson} 
            disabled={currentLesson === lessons.length - 1}
            className="nav-button"
          >
            Next Lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignLanguageTutorial;
