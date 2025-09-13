import { forwardRef, useImperativeHandle } from 'react';
import { SlideHandle } from '../App';

export const SlideCover = forwardRef<SlideHandle, { isActive: boolean }>((props, ref) => {
  useImperativeHandle(ref, () => ({
    getStepCount: () => 1,
    nextStep: () => false,
    prevStep: () => false,
    setStep: () => {},
  }));

  return (
    <section className={`slide cover ${props.isActive ? 'active' : 'inactive'}`}>
       <div className="content">
        <div className="logo anim-fade" style={{ animationDelay: '0s' }}>
          <span className="logo-card">
            <img src="/assets/granostack-logo.svg" alt="Granostack Logo" />
          </span>
        </div>
        <h1 className="title anim-scale" style={{ animationDelay: '0.5s' }}>Granostack</h1>
        <div className="company anim-fade" style={{ animationDelay: '1.0s' }}>A New Zero Innovations Limited</div>
        <div className="slogan anim-fade" style={{ animationDelay: '1.0s' }}>Turn Knowledge into Power</div>
        <div className="meta anim-fade" style={{ animationDelay: '1.5s' }}>
          <span className="speaker">William Lynn · Founder</span>
          <a className="link" href="https://granostack.com/demo" target="_blank" rel="noreferrer">granostack.com/demo</a>
        </div>
      </div>
    </section>
  );
});
