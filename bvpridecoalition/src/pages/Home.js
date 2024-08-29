// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Add this file for custom styles

function Home() {
  return (
    <div>
      <div className="hero-section">
        {/* <div className="hero-content">
          <h1>Welcome to Our Community</h1>
          <p>A safe and welcoming space for LGBTQIA+ individuals and allies.</p>
          <Link to="/events" className="btn btn-primary btn-lg">View Upcoming Events</Link>
        </div> */}
      </div>
      <div className="intro-text text-center mt-5">
        <h2>About Us</h2>
        <p>Our mission is to promote a welcoming and inclusive culture to uplift our local LGBTQIA+ community.</p>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <h3>Events</h3>
            <p>Join us at our upcoming events and connect with the community.</p>
            <Link to="/events" className="btn btn-outline-primary">See Events</Link>
          </div>
          <div className="col-md-4 text-center">
            <h3>Resources</h3>
            <p>Access valuable resources to support you and your loved ones.</p>
            <Link to="/resources" className="btn btn-outline-primary">Explore Resources</Link>
          </div>
          <div className="col-md-4 text-center">
            <h3>Get Involved</h3>
            <p>Learn how you can make a difference by getting involved with our community.</p>
            <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Google Calendar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
