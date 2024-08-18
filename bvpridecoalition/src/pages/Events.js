// src/pages/Events.js
import React from 'react';

function Events() {
  return (
    <div>
      <h1>Calendar</h1>
      <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '75%' }}>
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=fe38394c922b882e3fd58f5f749a158002a0fa4cd50ae0e226296d7e5812990f%40group.calendar.google.com&ctz=America%2FDenver"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
            frameborder: '0',
            scrolling: 'no',
          }}
          title="Google Calendar"
        ></iframe>
      </div>
    </div>
  );
}

export default Events;
