import React from 'react';
import styles from './SlideProgress.module.css';
import { SlideProps } from './types';

const progressSteps = [
  {
    type: 'split',
    title: 'Full-Stack Craftsmanship',
    desc: 'We deliver a seamless, native experience across <strong>iOS, Android, macOS, Windows, and Linux</strong> from a single, elegant codebase.',
    images: ['/assets/change-avatar.gif', '/assets/macos-app.png'],
  },
  {
    type: 'centered',
    title: 'Tiered AI Engine for Quality & Scale',
    desc: `
      <ul>
        <li><strong>Efficient Base Layer:</strong> Hosting lightweight models myself is quite easy — I can do it without trouble.</li>
        <li><strong>Premium Quality Fallback:</strong> Connecting to top-tier APIs is also so easy, I’ve already mastered it.</li>
        <li><strong>Future-Ready:</strong> But training our own models and embedding them on mobile devices — that’s the real challenge, and I’ll need skilled engineers to join me.</li>
      </ul>
    `,
    images: ['/assets/ai.png'],
  },
];

const SlideProgress: React.FC<SlideProps> = ({ step = 0, className = '' }) => {
  const currentStep = progressSteps[step] || progressSteps[0];

  const renderContent = () => {
    switch (currentStep.type) {
      case 'split':
        return (
          <div className={styles.layoutGrid}>
            <div className={styles.leftColumn}>
              <div className={styles.content}>
                <h2 className={styles.title}>{currentStep.title}</h2>
                <p className={styles.desc} dangerouslySetInnerHTML={{ __html: currentStep.desc as string }} />
              </div>
              <div className={styles.imageContainer} data-testid="image-container-left">
                <img src={currentStep.images[1]} alt="macOS app screenshot" className={styles.image} />
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.imageContainer} data-testid="image-container-right">
                <img src={currentStep.images[0]} alt="Avatar changing GIF" className={styles.image} />
              </div>
            </div>
          </div>
        );
      case 'centered':
        return (
          <div className={styles.centeredLayout}>
            <div className={styles.content}>
              <h2 className={styles.title}>{currentStep.title}</h2>
              <div className={styles.desc} dangerouslySetInnerHTML={{ __html: currentStep.desc as string }} />
            </div>
            <div className={styles.imageContainer}>
              <img src={currentStep.images[0]} alt="AI Strategy Diagram" className={styles.image} />
            </div>
          </div>
        );
      default:
        return <div>Unknown step type</div>;
    }
  };

  return (
    <div className={`slide ${className}`} data-testid="slide-progress-container">
      <div className="slide-content">{renderContent()}</div>
    </div>
  );
};

export default SlideProgress;
