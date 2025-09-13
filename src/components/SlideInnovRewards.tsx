import { forwardRef, useImperativeHandle } from 'react';
import { SlideHandle } from '../App';

export const SlideInnovRewards = forwardRef<SlideHandle, { isActive: boolean }>((props, ref) => {
  useImperativeHandle(ref, () => ({
    getStepCount: () => 1,
    nextStep: () => false,
    prevStep: () => false,
    setStep: () => {},
  }));

  return (
    <section className={`slide innov innov-rewards ${props.isActive ? 'active' : 'inactive'}`}>
      <div className="head">
        <h2><span style={{color: 'var(--brand-orange)', marginRight: '8px'}}>3</span>Progress Visualization & Raffle Rewards</h2>
        <p className="lead">We <strong>visualize progress</strong> with milestones and a <strong>study calendar</strong>, and add <strong>raffle-style rewards</strong> to keep motivation high.</p>
        <div className="tagline">
          <span className="tag">Milestones</span>
          <span className="tag">Study Calendar</span>
          <span className="tag alt">Raffle Rewards</span>
        </div>
      </div>
      <div className="grid">
        <div className="phone">
          <div className="screen">
            <img src="/assets/innov-3.png" alt="Milestones, study calendar, and raffle-style rewards" />
          </div>
        </div>
        <div>
          <ul className="points">
            <li><span>Milestones</span>: first card, streaks, 100/500/1000-card achievements</li>
            <li><span>Study Calendar</span>: weekly/monthly/yearly reports, one-tap share</li>
            <li><span>Raffle Rewards</span>: light random rewards with cooldown to prevent abuse</li>
          </ul>
          <div className="note">Spoken: Third, we visualize progress with milestones and a study calendar, and add raffle-style rewards to keep motivation high.</div>
        </div>
      </div>
    </section>
  );
});
