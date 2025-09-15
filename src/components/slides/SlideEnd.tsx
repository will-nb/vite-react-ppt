// src/components/slides/SlideEnd.tsx
import React from 'react';
import './SlideEnd.css';
import { SlideProps } from './types';

const SlideEnd: React.FC<SlideProps> = ({ className }) => {
  return (
    <div className={`slide end-card ${className || ''}`}>
      <div className="slide-content">
        <div className="logo">
          <span className="logo-card">
            <img src="/assets/granostack-logo.svg" alt="Granostack Logo" />
          </span>
        </div>
        <h2>Thank You</h2>
        <p className="subtitle">Public beta is coming soon.</p>
        <blockquote className="end-slogan">
          “Turn knowledge into memory, memory into thinking, and thinking into strength.”
        </blockquote>
        <div className="presenter-name">William Lynn | 林炯</div>
        <div className="final-links">
          <a href="https://granostack.com/demo" target="_blank" rel="noreferrer">
            granostack.com/demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideEnd;
