// src/components/slides/SlideCover.tsx

import React from 'react';
import './SlideCover.css';
import { SlideProps } from './types';

const SlideCover: React.FC<SlideProps> = ({ className }) => {
  return (
    <div className={`slide cover ${className || ''}`}>
      <div className="logo">
        <span className="logo-card">
          <img src="/assets/granostack-logo.svg" alt="Granostack Logo" />
        </span>
      </div>
      <h1 className="title">Granostack</h1>
      <div className="company">A New Zero Innovations Limited</div>
      <div className="slogan">Turn Knowledge into Power</div>
      <div className="meta">
        <span className="speaker">William Lynn · Founder</span>
        <a className="link" href="https://granostack.com/demo" target="_blank" rel="noreferrer">
          granostack.com/demo
        </a>
      </div>
    </div>
  );
};

export default SlideCover;
