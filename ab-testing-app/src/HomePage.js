import React, { useState, useEffect } from 'react';
import HomePageA from './HomePageA';
import HomePageB from './HomePageB';

function HomePage() {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    const storedVersion = localStorage.getItem('homePageVersion');
    if (storedVersion) {
      setVersion(storedVersion);
    } else {
      const randomVersion = Math.random() < 0.5 ? 'A' : 'B'; // randomly gives user A or B endpoint
      localStorage.setItem('homePageVersion', randomVersion);
      setVersion(randomVersion);
    }
  }, []);

  return (
    <div>
      {version === 'A' ? <HomePageA /> : <HomePageB />}
    </div>
  );
}

export default HomePage;