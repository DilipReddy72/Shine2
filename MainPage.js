import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatGPT from '../ChatGPT/ChatGPT';
import './MainPage.css';

const MainPage = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showChatbox, setShowChatbox] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const toggleChatbox = () => {
        setShowChatbox(!showChatbox);
    };

    return (
        <div className="main-page">
            <div className="top-bar">
                <div className="menu-icon" onClick={toggleSidebar}>
                    <i className="fas fa-bars"></i>
                </div>
                <h1 className="title">Shine Within</h1>
                <div className="user-icon">
                    <i className="fas fa-user"></i>
                    <div className="dropdown">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>

            <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
                <div className="menu-icon" onClick={toggleSidebar}>
                    <i className="fas fa-bars"></i>
                </div>
                <Link to="/health-module" className="feature">
                    <i className="fas fa-heartbeat"></i>
                    <span>Health Module</span>
                </Link>
                <Link to="/library" className="feature">
                    <i className="fas fa-book"></i>
                    <span>Library</span>
                </Link>
                <Link to="/games" className="feature">
                    <i className="fas fa-gamepad"></i>
                    <span>Games</span>
                </Link>
                <Link to="/mood-tracker" className="feature">
                    <i className="fas fa-smile"></i>
                    <span>Mood Tracker</span>
                </Link>
                <Link to="/group-sessions" className="feature">
                    <i className="fas fa-users"></i>
                    <span>Group Sessions</span>
                </Link>
                <Link to="/daily-challenges" className="feature">
                    <i className="fas fa-tasks"></i>
                    <span>Daily Challenges</span>
                </Link>
                <Link to="/signout" className="feature signout">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Sign Out</span>
                </Link>
            </div>

            <div className="hero-section">
                <div className="hero-text">
                    <h2>Welcome to Shine Within</h2>
                    <p>Your mental health is our priority. Explore the features we offer to help you on your journey.</p>
                </div>
            </div>

            {showChatbox && <ChatGPT />}

            <button className="chatbox-toggle" onClick={toggleChatbox}>
                {showChatbox ? 'Close Chatbox' : 'Open Chatbox'}
            </button>

            <div className="bottom-nav">
                <Link to="/careers">Careers</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/about">About Us</Link>
            </div>
        </div>
    );
};

export default MainPage;
