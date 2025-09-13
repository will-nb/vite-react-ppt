// src/components/slides/SlideStory.tsx
import React from 'react';
import './SlideStory.css';
import { SlideProps } from './types';

const storySteps = [
  {
    title: 'Notes don’t stick',
    points: ['Notion / Obsidian', 'Forgotten later'],
    img: '/assets/obsidian.PNG',
    imgAlt: 'Obsidian notes'
  },
  {
    title: 'AI without context',
    points: ['Ask LLMs', 'Generic answers'],
    img: '/assets/grok.PNG',
    imgAlt: 'Ask AI'
  },
  {
    title: 'Make learning stick',
    points: ['Capture · Practice · Review', 'Personal context'],
    img: '/assets/granostack.PNG',
    imgAlt: 'Granostack'
  }
];

const SlideStory: React.FC<SlideProps> = ({ step, className }) => {
  const { title, points } = storySteps[step] || storySteps[0];

  return (
    <div className={`slide story ${className || ''}`}>
      <div className="grid">
        <div className="text">
          <h2>{title}</h2>
          <ul className="points">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="screen">
            {storySteps.map((s, index) => (
                <img
                    key={index}
                    src={s.img}
                    alt={s.imgAlt}
                    className={`story-img ${index === step ? 'active' : ''}`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SlideStory;
