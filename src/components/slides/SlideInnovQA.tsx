// src/components/slides/SlideInnovQA.tsx
import React from 'react';
import './SlideInnov.css';
import { SlideProps } from './types';

const SlideInnovQA: React.FC<SlideProps> = ({ className }) => {
  return (
    <div className={`slide innov ${className || ''}`}>
      <div className="head">
        <h2><span className="idx">1</span>AI Q&A with Context</h2>
        <p className="lead">We merge <strong>card search with AI Q&A</strong> — when you ask AI inside Granostack, your existing cards are fed into the context, making answers more accurate.</p>
        <div className="tagline">
          <span className="tag">In-app AI Q&A</span>
          <span className="tag">Personalized Context</span>
          <span className="tag alt">Answer to Card</span>
        </div>
      </div>
      <div className="grid">
        <div className="phone"><div className="screen"><img src="/assets/grok.PNG" alt="AI Q&A" /></div></div>
        <div>
          <ul className="points">
            <li><span>AI Q&A with Context</span>: your notes provide context for more accurate answers</li>
            <li><span>Answer to Card</span>: turn useful answers into new cards in one click</li>
            <li><span>Deepen Understanding</span>: ask follow-up questions to explore topics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideInnovQA;
