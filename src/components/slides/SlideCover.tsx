// src/components/slides/SlideCover.tsx

import React from 'react';
import './SlideCover.css';
import { SlideProps } from './types';

const SlideCover: React.FC<SlideProps> = ({ className }) => {
  return (
    <div className={`slide cover ${className || ''}`}>
      <div className="slide-content">
        <img src="/assets/cover.png" alt="Granostack Cover" className="cover-image" />
      </div>
    </div>
  );
};

export default SlideCover;
