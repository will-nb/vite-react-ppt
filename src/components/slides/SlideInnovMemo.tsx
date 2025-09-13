// src/components/slides/SlideInnovMemo.tsx
import React from 'react';
import './SlideInnov.css';
import { SlideProps } from './types';

const SlideInnovMemo: React.FC<SlideProps> = ({ className }) => {
  return (
    <div className={`slide innov ${className || ''}`}>
      <div className="head">
        <h2><span className="idx">2</span>Notes × Memorization</h2>
        <p className="lead">We combine <strong>note-taking with memorization</strong>: every card can stay as a note, or be set to one of three memory levels, and we generate the right practice card.</p>
        <div className="tagline">
          <span className="tag">Notes as Cards</span>
          <span className="tag">3 Memory Levels</span>
          <span className="tag alt">Adaptive Practice</span>
        </div>
      </div>
      <div className="grid">
        <div className="phone"><div className="screen mock-ui">
          {/* Mock UI for memorization levels */}
        </div></div>
        <div>
          <ul className="points">
            <li><span>Notes as Cards</span>: every piece of knowledge is a card, easy to manage</li>
            <li><span>3 Memory Levels</span>: Familiar / Proficient / Verbatim for different needs</li>
            <li><span>Adaptive Practice</span>: generates different types of practice based on memory level</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideInnovMemo;
