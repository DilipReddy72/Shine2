import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DailyChallenges.css';

const DailyChallenges = () => {
  const { goals } = useContext(AppContext);

  return (
    <div className="daily-challenges">
      <h2>Daily Challenges</h2>
      <Calendar />
      <h3>Short Term Goals</h3>
      <ul>
        {goals.shortTerm.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
      <h3>Long Term Goals</h3>
      <ul>
        {goals.longTerm.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default DailyChallenges;
