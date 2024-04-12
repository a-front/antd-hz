import React from 'react';

function TitleIcon() {
  return (
    <svg
      version="1.1"
      width="16px"
      height="16px"
      viewBox="0 0 100.0 100.0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="i0">
          <path d="M1280,0 L1280,2420 L0,2420 L0,0 L1280,0 Z" />
        </clipPath>
        <clipPath id="i1">
          <path d="M100,0 L100,100 L0,100 L0,0 L100,0 Z" />
        </clipPath>
        <clipPath id="i2">
          <path d="M37.5,0 L37.5,37.5 L0,37.5 L0,0 L37.5,0 Z" />
        </clipPath>
      </defs>
      <g transform="translate(-65.0 -40.0)">
        <g clipPath="url(#i0)">
          <g transform="translate(65.0 40.0)">
            <g clipPath="url(#i1)">
              <polygon points="0,0 100,0 100,100 0,100 0,0" stroke="none" fill="#198EEB" />
            </g>
            <g transform="translate(12.5 50.0)">
              <g clipPath="url(#i2)">
                <polygon points="0,0 37.5,0 37.5,37.5 0,37.5 0,0" stroke="none" fill="#FFFFFF" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default TitleIcon;
