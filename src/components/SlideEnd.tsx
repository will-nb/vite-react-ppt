import { forwardRef, useImperativeHandle } from 'react';
import { SlideHandle } from '../App';

export const SlideEnd = forwardRef<SlideHandle, { isActive: boolean }>((props, ref) => {
  useImperativeHandle(ref, () => ({
    getStepCount: () => 1,
    nextStep: () => false,
    prevStep: () => false,
    setStep: () => {},
  }));

  return (
    <section className={`slide end-card ${props.isActive ? 'active' : 'inactive'}`}>
        <div className="logo anim-fade" style={{ animationDelay: '0.2s' }}>
            <span className="logo-card">
                <img src="/assets/granostack-logo.svg" alt="Granostack Logo" />
            </span>
        </div>
        <h2 className="anim-scale" style={{ animationDelay: '0.5s' }}>Thank You</h2>
        <p className="subtitle anim-fade" style={{ animationDelay: '0.8s' }}>Public beta is coming soon.</p>
        <div className="final-links anim-fade" style={{ animationDelay: '1.1s' }}>
            <a href="https://granostack.com/demo" target="_blank" rel="noreferrer">granostack.com/demo</a>
        </div>
    </section>
  );
});
