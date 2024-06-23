import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { AppContext } from '../../context/AppContext';
import './MoodTracker.css';

const MoodTracker = () => {
  const { moodHistory } = useContext(AppContext);

  const data = {
    labels: moodHistory.map(entry => entry.date),
    datasets: [
      {
        label: 'Mood Score',
        data: moodHistory.map(entry => entry.moodScore),
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="mood-tracker">
      <h2>Mood Tracker</h2>
      <Line data={data} />
    </div>
  );
};

export default MoodTracker;
