import React from 'react';

import './style.css';

// https://dev.to/stackfindover/how-to-create-a-dot-loading-animation-hc7
export default function Loading() {
  return (
    <div className="loader-outer">
      <div className="loader">
        <span className="dot dot-1"></span>
        <span className="dot dot-2"></span>
        <span className="dot dot-3"></span>
    </div>
  </div>
  )
}