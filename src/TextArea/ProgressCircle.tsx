import React from 'react';
import { ProgressCircleProps } from './TextArea.types';

import './ProgressCircle.scss';

const ProgressCircle: React.FC<ProgressCircleProps> = ({ charCount, percentage }) => {
  const radius = 100 / (2 * Math.PI);

  return (
    <div className="progress-circle">
      <svg viewBox="0 0 32 32">
        <circle
          data-testid="inside-stroke"
          cx="16"
          cy="16"
          r={radius}
          fill="transparent"
          stroke="#d1d3d4"
          strokeWidth="2"
        />
        <circle
          data-testid="outside-stroke"
          cx="16"
          cy="16"
          r={radius}
          fill="transparent"
          stroke={percentage >= 90 ? '#e6483d' : percentage >= 80 ? '#ca8a36' : '#877eff'}
          strokeWidth="2"
          strokeDasharray={`${percentage} ${100 - percentage}`}
          strokeDashoffset="25"
        />
      </svg>
      <span className={percentage >= 90 ? 'end' : undefined}>{percentage >= 80 && charCount}</span>
    </div>
  );
};

export default ProgressCircle;
