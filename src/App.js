import React, { useState } from 'react';
import questions from './question.json';
import Display from './display';
import './App.css';

const App = () => {
  const [marks, setMarks] = useState(Array(questions.length).fill(null));

  const handleEvent = (value, index) => {
    setMarks(prevMarks => {
      const newMarks = [...prevMarks];
      newMarks[index] = value;
      return newMarks;
    });
  };

  const calculateTotalMarks = () => {
    const totalMarks = marks.reduce((a, b) => a + (b || 0), 0);
    alert(totalMarks);
  };

  return (
    <div>
      <center>
        <h1>Quizz</h1>
        {questions.map((que, index) => (
          <Display key={index} que={que} index={index} event={handleEvent} />
        ))}
        <button onClick={calculateTotalMarks}>End Quizz</button>
      </center>
    </div>
  );
};

export default App;