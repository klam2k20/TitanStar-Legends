import React from 'react';
import { MAX_AVAILABLE_POINTS, useAvailablePoints } from '../hooks/useAvailablePoints';

function PointDisplay() {
  const { availablePoints } = useAvailablePoints();

  return (
    <div>
      {availablePoints} / {MAX_AVAILABLE_POINTS}
    </div>
  );
}

export default PointDisplay;
