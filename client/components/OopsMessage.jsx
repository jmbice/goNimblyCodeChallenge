import React from 'react';

const oopsMessage = () => (
  <div className="oopsMessage-wrapper">
    <div className="oopsMessage-title">
      <h1>!</h1>
    </div>
    <h4>
      Weather data not found.
      Unfortunately, we only provide weather data for major cities.
      We may not have the data you are looking for.
    </h4>
  </div>
);

export default oopsMessage;
