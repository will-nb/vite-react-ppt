// src/components/slides/SlideRoadmap.tsx
import React from 'react';
import './SlideRoadmap.css';
import { SlideProps } from './types';

const quarters = [
  { milestone: 'M1-3', title: 'Public Beta', tasks: ['Learning App', 'Gather Feedback', 'Collect Training Data'] },
  { milestone: 'M4-6', title: 'Creator Tools', tasks: ['LoRA Fine-tuning', 'Creator Tool Launch', 'Original Decks'] },
  { milestone: 'M7-9', title: 'Compliance', tasks: ['ISBN Verification', 'Reporting System', 'Web-based Payments'] },
  { milestone: 'M10-12', title: 'Global Launch', tasks: ['On-device Models', 'Multi-language', 'Worldwide Rollout'] }
];

const SlideRoadmap: React.FC<SlideProps> = ({ className }) => {
  return (
    <div className={`slide roadmap ${className || ''}`}>
      <div className="slide-content">
        <h2>Roadmap</h2>
        <div className="timeline">
          {quarters.map((q, i) => (
            <div className="quarter" key={i}>
              <div className="milestone">{q.milestone}</div>
              <h3>{q.title}</h3>
              <ul>{q.tasks.map((t, ti) => <li key={ti}>{t}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideRoadmap;
