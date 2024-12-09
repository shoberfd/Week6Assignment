import React from 'react';
import { Link } from 'react-router-dom';

function IntroPage() {
  return (
    <div>
      <h1>Welcome to our A/B Testing App!</h1>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default IntroPage;