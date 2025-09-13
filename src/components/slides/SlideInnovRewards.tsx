// src/components/slides/SlideInnovRewards.tsx
import React from 'react';
import './SlideInnov.css';
import { SlideProps } from './types';

const SlideInnovRewards: React.FC<SlideProps> = ({ className }) => {
  return (
    <div className={`slide innov ${className || ''}`}>
      <div className="head">
        <h2><span className="idx">3</span>Progress Visualization & Raffle Rewards</h2>
        <p className="lead">We <strong>visualize progress</strong> with milestones and a <strong>study calendar</strong>, and add <strong>raffle-style rewards</strong> to keep motivation high.</p>
        <div className="tagline">
          <span className="tag">Milestones</span>
          <span className="tag">Study Calendar</span>
          <span className="tag alt">Raffle Rewards</span>
        </div>
      </div>
      <div className="grid">
        <div className="phone"><div className="screen"><img src="/assets/innov-3.png" alt="Progress and rewards" /></div></div>
        <div>
          <ul className="points">
            <li><span>Milestones</span>: first card, streaks, 100/500/1000-card achievements</li>
            <li><span>Study Calendar</span>: weekly/monthly/yearly reports, one-tap share</li>
            <li><span>Raffle Rewards</span>: light random rewards with cooldown to prevent abuse</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideInnovRewards;
