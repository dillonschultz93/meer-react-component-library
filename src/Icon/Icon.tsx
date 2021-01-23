// Generated with utilities/create-component.js
import React from 'react';

import { IconProps, ValidColors } from './Icon.types';
import { ICON } from './IconDef';

import './Icon.scss';

const Icon: React.FC<IconProps> = ({ name, size = 18, color = 'gray9', onClick, animate }) => {
  let innerPath = null;

  if (name) {
    innerPath =
      ICON[name].format === 'data' ? (
        <path fillRule="evenodd" clipRule="evenodd" d={ICON[name].path} fill="inherit" />
      ) : (
        ICON[name].markup
      );
  }

  const defaultStyles = ['icon'];
  onClick && defaultStyles.push('interactive');

  return (
    <svg
      data-testid="icon"
      className={defaultStyles.join(' ').trim()}
      width={`${size}px`}
      height={`${size}px`}
      viewBox={`0 0 0 ${size} ${size}`}
      fill={ValidColors[color]}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <title data-testid="icon-title">{name} icon</title>
      <g transform={`scale(${size / 24})`}>
        {animate ? (
          <path
            data-testid="animation-path"
            fill="inherit"
            fillRule="evenodd"
            d="M12 4c-4.41828 0-8 3.58172-8 8 0 .5523-.44772 1-1 1s-1-.4477-1-1C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10 0 .5523-.4477 1-1 1s-1-.4477-1-1c0-4.41828-3.5817-8-8-8z"
            clipRule="evenodd"
          >
            <animateTransform
              data-testid="animation-transform"
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from={`0 ${size / ((size / 24) * 2)} ${size / ((size / 24) * 2)}`}
              to={`360 ${size / ((size / 24) * 2)} ${size / ((size / 24) * 2)}`}
              repeatCount={`${animate === true ? 'indefinite' : `${animate.delay}`}`}
            />
          </path>
        ) : (
          innerPath
        )}
      </g>
    </svg>
  );
};

export default Icon;
