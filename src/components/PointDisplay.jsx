import React from 'react';
import { MAX_AVAILABLE_POINTS, useAvailablePoints } from '../hooks/useAvailablePoints';
import '../styles/point-display.css';

function PointDisplay() {
  const { availablePoints } = useAvailablePoints();

  return (
    <div className='point-display'>
      <span>
        {MAX_AVAILABLE_POINTS - availablePoints} / {MAX_AVAILABLE_POINTS}
      </span>
      <h2>Points Spent</h2>
    </div>
  );
}

export default PointDisplay;
