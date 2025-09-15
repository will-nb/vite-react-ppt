// src/components/slides/SlideCreator.tsx
import React from 'react';
import styles from './SlideCreator.module.css';
import { SlideProps } from './types';

const creatorSteps = [
  {
    title: 'AI-Powered Knowledge Engine',
    description: 'We build your knowledge base with AI, generating new content and leveraging existing materials to provide more accurate, context-aware answers.',
    image: '/assets/output.gif',
  },
  {
    title: 'Effective Learning & Motivation',
    description: 'Commit to your goals with tailored learning paths. Choose from multiple-choice, fill-in-the-blank, or Q&A exercises, track your progress with calendars and milestones, and stay motivated with random point rewards.',
    image: '/assets/q.gif',
  },
];

const FeatureSlide: React.FC<{ title: string; description: string; image: string; }> = ({ title, description, image }) => (
  <div className={styles.featureLayout}>
    <div className={styles.featureImageContainer}>
      <img src={image} alt={title} className={styles.featureImage} />
    </div>
    <div className={styles.featureContent}>
      <h2 className={styles.featureTitle}>{title}</h2>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  </div>
);

const OriginalCreatorSlide: React.FC = () => (
  <div className={styles.creator}>
    <div className={styles.head}>
      <h2>Creator ecosystem · Activation key</h2>
      <p>Invite creators with free credits; give out activation keys for promotion and sales; partner with publishers in the future.</p>
    </div>
    <div className={styles.grid}>
      <div className={styles.phone}>
        <div className={styles.status}>Granostack</div>
        <div className={styles.screen}>
          <h3>Enter Activation Key</h3>
          <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" readOnly />
          <button>Activate</button>
          <p className={styles.hint}>You can buy or receive a key from a creator.</p>
        </div>
      </div>
      <ul className={styles.bullets}>
        <li>Use free credits to invite creators</li>
        <li>Provide activation keys (sell or give away)</li>
        <li>Extend the same model to publishers</li>
      </ul>
    </div>
  </div>
);

const SlideCreator: React.FC<SlideProps> = ({ step = 0, className = '' }) => {
  const renderContent = () => {
    switch (step) {
      case 0:
      case 1:
        const currentStep = creatorSteps[step];
        return <FeatureSlide {...currentStep} />;
      case 2:
        return <OriginalCreatorSlide />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className={`slide ${className}`}>
      <div className="slide-content">{renderContent()}</div>
    </div>
  );
};

export default SlideCreator;
