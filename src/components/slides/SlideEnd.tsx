// src/components/slides/SlideEnd.tsx
import React from 'react';
import './SlideEnd.css';
import { SlideProps } from './types';

const SlideEnd: React.FC<SlideProps> = ({ className }) => {
  return (
    <div className={`slide slide-dark end ${className || ''}`}>
      <div className="slide-content">
        <div className="logo-container">
          <img src="/assets/granostack-logo.svg" alt="Granostack Logo" />
        </div>
        <h2>Thank You</h2>
        <p className="subtitle">Public beta is coming soon.</p>
        <blockquote className="slogan">
          “Turn knowledge into memory, memory into thinking, and thinking into strength.”
        </blockquote>
        <div className="presenter">William Lynn | 林炯</div>
        <div className="links">
          <a href="https://granostack.com/demo" target="_blank" rel="noreferrer">
            granostack.com/demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideEnd;
