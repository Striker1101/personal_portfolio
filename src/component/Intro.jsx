import React from 'react'

export default function Intro() {
  return (
    <div className="intro">
      <h1 className="introHeader">Hy,</h1>
      <svg
        className="downArrow"
        style={{width: '24px', height: '24px'}}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11,6V14L7.5,10.5L6.08,11.92L12,17.84L17.92,11.92L16.5,10.5L13,14V6H11M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22Z"
        />
      </svg>
    </div>
  )
}
