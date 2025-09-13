import { forwardRef, useImperativeHandle, useState } from 'react';
import { SlideHandle } from '../App';

const TITLES = [
  "What’s done · what’s next",
  'See progress · try the demo',
  'Hiring admin · streamline ops',
  'Creator decks · community growth',
];
const BULLETS = [
  ['Core flows ready', 'granostack.com/demo'],
  ['Progress updates', 'Demo builds'],
  ['Admin after launch', 'Daily operations'],
  ['Decks from creators', 'Free credits & incentives'],
];
const IMAGES = [
    { src: "/assets/granostack.PNG", alt: "Granostack demo" },
    { src: "/assets/granostack-logo.svg", alt: "Demo page" },
    { src: "/assets/grok.PNG", alt: "Admin hiring placeholder" },
    { src: "/assets/obsidian.PNG", alt: "Creator decks placeholder" },
];

export const SlideProgress = forwardRef<SlideHandle, { isActive: boolean }>((props, ref) => {
  const [step, setStep] = useState(0);

  useImperativeHandle(ref, () => ({
    getStepCount: () => 4,
    nextStep: () => {
      if (step < 3) { setStep(s => s + 1); return true; }
      return false;
    },
    prevStep: () => {
      if (step > 0) { setStep(s => s - 1); return true; }
      return false;
    },
    setStep,
  }));

  return (
    <section className={`slide progress3 ${props.isActive ? 'active' : 'inactive'}`}>
      <h2>{TITLES[step]}</h2>
      <p className="sub">We build fast, show progress, and keep shipping.</p>
      <ul className="bullets">
        {BULLETS[step].map(text => <li key={text} className="reveal">{text}</li>)}
      </ul>
      <div className="hero">
        {IMAGES.map((img, index) => (
            <img key={img.src} className={`s3-img ${step === index ? 'active' : ''}`} src={img.src} alt={img.alt} />
        ))}
      </div>
    </section>
  );
});
