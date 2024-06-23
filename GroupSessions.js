import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './GroupSessions.css';

const demoChannels = [
  { id: 1, name: 'General Discussion', roomName: 'general-discussion' },
  { id: 2, name: 'Mental Health Support', roomName: 'mental-health-support' },
  { id: 3, name: 'Exercise and Wellness', roomName: 'exercise-wellness' }
];

const GroupSessions = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [roomName, setRoomName] = useState('');
  const [meetingTitle, setMeetingTitle] = useState('');
  const [channels] = useState(demoChannels); // Removed setChannels

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split('T')[0];
    setRoomName(`meeting-${formattedDate}`);
  };

  const handlePostTopic = () => {
    setMeetingTitle(`Meeting on ${selectedDate.toDateString()}`);
  };

  const joinChannel = (channel) => {
    setRoomName(channel.roomName);
    setMeetingTitle(channel.name);
  };

  return (
    <div className="group-sessions-page">
      <div className="top-bar">
        <h1 className="title">Group Sessions</h1>
      </div>
      <div className="content">
        <div className="left-panel">
          <h2>Schedule a Session</h2>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
          />
          <button className="post-topic-button" onClick={handlePostTopic}>
            Post Topic
          </button>
          {meetingTitle && <p className="meeting-title">{meetingTitle}</p>}
        </div>
        <div className="right-panel">
          {roomName && (
            <iframe
              src={`https://meet.jit.si/${roomName}`}
              style={{ width: '100%', height: '500px', border: '0' }}
              allow="camera; microphone; fullscreen; display-capture"
              title="Jitsi Meet Session"
            ></iframe>
          )}
        </div>
      </div>
      <div className="channels-section">
        <h2>Available Channels</h2>
        <div className="channel-list">
          {channels.map((channel) => (
            <div key={channel.id} className="channel" onClick={() => joinChannel(channel)}>
              <p>{channel.name}</p>
              <button className="join-button">Join</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupSessions;
