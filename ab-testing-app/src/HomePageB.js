import React from 'react';

function HomePageB() {
  const trackButtonClick = (version, buttonId) => {
    // Send data to the server
    fetch('http://localhost:3000/track', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ version, buttonId }),
    });
  };

  return (
    <div>
      <h2>Home Page - Version B</h2>
      <button onClick={() => trackButtonClick('B', 'button2')}>Button 2</button>
    </div>
  );
}

export default HomePageB;