import { forwardRef, useImperativeHandle, useState } from 'react';
import { SlideHandle } from '../App';

const TITLES = ['Notes don’t stick', 'AI without context', 'Make learning stick'];
const BULLETS = [
  ['Notion / Obsidian', 'Forgotten later'],
  ['Ask LLMs', 'Generic answers'],
  ['Capture · Practice · Review', 'Personal context'],
];
const IMAGES = [
  { src: '/assets/obsidian.PNG', alt: 'Obsidian notes' },
  { src: '/assets/grok.PNG', alt: 'Ask AI' },
  { src: '/assets/granostack.PNG', alt: 'Granostack' },
];

export const SlideStory = forwardRef<SlideHandle, { isActive: boolean }>((props, ref) => {
  const [step, setStep] = useState(0);

  useImperativeHandle(ref, () => ({
    getStepCount: () => 3,
    nextStep: () => {
      if (step < 2) { setStep(s => s + 1); return true; }
      return false;
    },
    prevStep: () => {
      if (step > 0) { setStep(s => s - 1); return true; }
      return false;
    },
    setStep,
  }));

  return (
    <section className={`slide story ${props.isActive ? 'active' : 'inactive'}`}>
      <div className="grid">
        <div className="text">
          <h2 id="s2-title">{TITLES[step]}</h2>
          <ul className="points" id="s2-points">
            {BULLETS[step].map(text => <li key={text} className="reveal">{text}</li>)}
          </ul>
        </div>
        <div className="screen anim-fade">
          {IMAGES.map((img, index) => (
            <img key={img.src} className={`s2-img ${step === index ? 'active' : ''}`} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </section>
  );
});
