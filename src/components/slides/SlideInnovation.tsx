// src/components/slides/SlideInnovation.tsx
import React from 'react';
import './SlideInnovation.css';
import { SlideProps } from './types';
import DeviceMockup from '../common/DeviceMockup'; // Import the new component

const innovationSteps = [
  {
    type: 'story',
    layout: 'split',
    title: 'Knowledge in Silos',
    description: "We pour our knowledge into great tools, only to forget it. We turn to powerful AI, but it can't access our unique insights. Our best ideas remain locked away.",
    images: [
      { src: '/assets/obsidian.PNG', alt: 'Obsidian notes' },
      { src: '/assets/grok.PNG', alt: 'Generic AI interface' }
    ]
  },
  {
    type: 'feature',
    layout: 'center',
    title: 'AI-Powered Memory System',
    description: "Granostack empowers your thinking. We turn your scattered notes into a smart memory card system. So you can truly learn, and think independently.",
    image: '/assets/output.gif'
  },
  {
    type: 'feature',
    layout: 'center',
    title: 'Master What You Know',
    description: 'Go beyond just storing information. Our system helps you truly learn with tailored review decks, diverse exercises, and progress tracking. Stay motivated with gamified rewards.',
    image: '/assets/q.gif'
  },
  {
    type: 'creator',
    layout: 'split',
    title: 'Empower & Monetize Your Knowledge',
    description: "For creators, Granostack is a platform to build and share. We provide the tools—like activation keys and promotional credits—to turn your expertise into a valuable, monetizable asset.",
  }
];

const CreatorSlideContent: React.FC = () => (
  <div className="creator-content">
    <div className="phone-status-bar">Granostack</div>
    <div className="phone-screen">
      <h3>Activate Creator Deck</h3>
      <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" readOnly />
      <button>Activate</button>
      <p className="hint">Get a key from a creator to unlock their shared deck.</p>
    </div>
  </div>
);

const SlideInnovation: React.FC<SlideProps> = ({ step, className }) => {
  const currentStep = innovationSteps[step] || innovationSteps[0];
  const { type, layout, title, description } = currentStep;

  const renderContent = () => {
    if (layout === 'split') {
      return (
        <div className="grid-split">
          <div className="text-content">
            <h2>{title}</h2>
            <p>{description}</p>
            {type === 'creator' &&
              <div className="creator-features">
                <ul>
                  <li>Activation key system</li>
                  <li>Free promotional credits</li>
                  <li>Share with your community</li>
                </ul>
              </div>
            }
          </div>
          <div className="visual-content">
            {type === 'story' && 'images' in currentStep && (
              <div className="split-images">
                <DeviceMockup type="phone"><img src={currentStep.images[0].src} alt={currentStep.images[0].alt} /></DeviceMockup>
                <DeviceMockup type="phone"><img src={currentStep.images[1].src} alt={currentStep.images[1].alt} /></DeviceMockup>
              </div>
            )}
            {type === 'creator' && (
              <DeviceMockup type="phone">
                <CreatorSlideContent />
              </DeviceMockup>
            )}
          </div>
        </div>
      );
    }
    
    if (layout === 'center' && 'image' in currentStep) {
      return (
        <div className="grid-center">
          <div className="text-content">
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
          <div className="visual-content">
            <DeviceMockup type="phone">
              <img src={currentStep.image} alt={title} />
            </DeviceMockup>
          </div>
        </div>
      );
    }

    return <div>Unsupported slide type</div>;
  };

  return (
    <div className={`slide innovation ${className || ''}`}>
      <div className="slide-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default SlideInnovation;
