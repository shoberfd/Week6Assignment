import React from 'react';

function HomePageA() {
  const trackButtonClick = (version, buttonId) => {
    // Send data to server 
    fetch('http://localhost:3000/track', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ version, buttonId }),
    });
  };

  return (
    <div>
      <h2>Home Page - Version A</h2>
      <button onClick={() => trackButtonClick('A', 'button1')}>Button 1</button>
    </div>
  );
}

export default HomePageA;