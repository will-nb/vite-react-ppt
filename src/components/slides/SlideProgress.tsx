// src/components/slides/SlideProgress.tsx
import React from 'react';
import './SlideProgress.css';
import { SlideProps } from './types';

const progressSteps = [
  {
    title: "What’s done · what’s next",
    points: ['Core flows ready', 'granostack.com/demo'],
    img: '/assets/granostack.PNG',
  },
  {
    title: 'See progress · try the demo',
    points: ['Progress updates', 'Demo builds'],
    img: '/assets/granostack-logo.svg',
  },
  {
    title: 'Hiring admin · streamline ops',
    points: ['Admin after launch', 'Daily operations'],
    img: '/assets/grok.PNG',
  },
  {
    title: 'Creator decks · community growth',
    points: ['Decks from creators', 'Free credits & incentives'],
    img: '/assets/obsidian.PNG',
  },
];

const SlideProgress: React.FC<SlideProps> = ({ step, className }) => {
  const { title, points } = progressSteps[step] || progressSteps[0];

  return (
    <div className={`slide progress ${className || ''}`}>
      <h2>{title}</h2>
      <p className="sub">We build fast, show progress, and keep shipping.</p>
      <ul className="bullets">
        {points.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
      <div className="hero">
        {progressSteps.map((s, index) => (
          <img key={index} src={s.img} alt="" className={`progress-img ${index === step ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default SlideProgress;
