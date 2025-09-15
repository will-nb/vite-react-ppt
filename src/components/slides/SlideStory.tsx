// src/components/slides/SlideStory.tsx
import React from 'react';
import './SlideStory.css';
import { SlideProps } from './types';

const storySteps = [
  {
    title: 'Why Our Notes Fail Us',
    points: [
      'We pour our knowledge into great tools like Notion and Obsidian.',
      'But a year later, that knowledge is often lost and forgotten.'
    ],
    img: '/assets/obsidian.PNG',
    imgAlt: 'Obsidian notes'
  },
  {
    title: 'The Problem with Generic AI',
    points: [
      'So when we need real insights, we turn to AI instead of our own notes.',
      'But if everyone is using the same AI, where is our personal edge?'
    ],
    img: '/assets/grok.PNG',
    imgAlt: 'Ask AI'
  },
  {
    title: 'The Granostack Approach',
    points: [
      '<strong>Capture on the go:</strong> Instantly turn a copy, photo, or voice memo into a knowledge card.',
      '<strong>Context-aware AI:</strong> Your personal knowledge base empowers the AI, giving you answers that are truly yours.',
      '<strong>Tiered Learning:</strong> Master key info with review decks, organized by tiers: Familiar, Proficient, and Verbatim.'
    ],
    img: '/assets/output.gif',
    imgAlt: 'Granostack'
  }
];

const SlideStory: React.FC<SlideProps> = ({ step, className }) => {
  const { title, points } = storySteps[step] || storySteps[0];

  return (
    <div className={`slide story ${className || ''}`}>
      <div className="slide-content">
        <div className="grid">
          <div className="text">
            <h2>{title}</h2>
            <ul className="points">
              {points.map((point, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
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
    </div>
  );
};

export default SlideStory;
