// src/components/slides/SlideInnovations.tsx
import React from 'react';
import './SlideInnov.css';
import { SlideProps } from './types';

// Content for each innovation slide
const innovations = [
  {
    idx: 1,
    title: 'AI Q&A with Context',
    lead: 'We merge <strong>card search with AI Q&A</strong> — when you ask AI inside Granostack, your existing cards are fed into the context, making answers more accurate.',
    tags: ['In-app AI Q&A', 'Personalized Context'],
    altTag: 'Answer to Card',
    imgSrc: '/assets/grok.PNG',
    imgAlt: 'AI Q&A',
    points: [
      '<span>AI Q&A with Context</span>: your notes provide context for more accurate answers',
      '<span>Answer to Card</span>: turn useful answers into new cards in one click',
      '<span>Deepen Understanding</span>: ask follow-up questions to explore topics'
    ]
  },
  {
    idx: 2,
    title: 'Notes × Memorization',
    lead: 'We combine <strong>note-taking with memorization</strong>: every card can stay as a note, or be set to one of three memory levels, and we generate the right practice card.',
    tags: ['Notes as Cards', '3 Memory Levels'],
    altTag: 'Adaptive Practice',
    imgSrc: '/assets/innov-2.png',
    imgAlt: 'Memorization levels',
    points: [
      '<span>Notes as Cards</span>: every piece of knowledge is a card, easy to manage',
      '<span>3 Memory Levels</span>: Familiar / Proficient / Verbatim for different needs',
      '<span>Adaptive Practice</span>: generates different types of practice based on memory level'
    ]
  },
  {
    idx: 3,
    title: 'Progress Visualization & Raffle Rewards',
    lead: 'We <strong>visualize progress</strong> with milestones and a <strong>study calendar</strong>, and add <strong>raffle-style rewards</strong> to keep motivation high.',
    tags: ['Milestones', 'Study Calendar'],
    altTag: 'Raffle Rewards',
    imgSrc: '/assets/innov-3.png',
    imgAlt: 'Progress and rewards',
    points: [
      '<span>Milestones</span>: first card, streaks, 100/500/1000-card achievements',
      '<span>Study Calendar</span>: weekly/monthly/yearly reports, one-tap share',
      '<span>Raffle Rewards</span>: light random rewards with cooldown to prevent abuse'
    ]
  }
];

const SlideInnovations: React.FC<SlideProps> = ({ step, className }) => {
  const currentStep = step || 0;
  const innovation = innovations[currentStep];
  const isVerticalLayout = currentStep === 0;

  const headContent = (
    <div className="head">
      <h2><span className="idx">{innovation.idx}</span>{innovation.title}</h2>
      <p className="lead" dangerouslySetInnerHTML={{ __html: innovation.lead }}></p>
      <div className="tagline">
        {innovation.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        <span className="tag alt">{innovation.altTag}</span>
      </div>
    </div>
  );

  const pointsContent = (
    <ul className="points">
      {innovation.points.map(point => <li key={point} dangerouslySetInnerHTML={{ __html: point }}></li>)}
    </ul>
  );

  const phoneContent = (
    <div className="phone">
      <div className="screen">
        <img src={innovation.imgSrc} alt={innovation.imgAlt} />
      </div>
    </div>
  );

  return (
    <div className={`slide innov ${isVerticalLayout ? 'vertical-layout' : ''} ${className || ''}`}>
      <div className="slide-content">
        {isVerticalLayout ? (
          <>
            {phoneContent}
            <div className="content">
              {headContent}
              {pointsContent}
            </div>
          </>
        ) : (
          <>
            {headContent}
            <div className="grid">
              {phoneContent}
              <div>
                {pointsContent}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SlideInnovations;
