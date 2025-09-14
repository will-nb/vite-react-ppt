import React from 'react';
import styles from './SlideProgress.module.css';
import { SlideProps } from './types';

const progressSteps = [
  {
    title: 'Full-Stack Craftsmanship',
    desc: 'We deliver a seamless, native experience across <strong>iOS, Android, macOS, Windows, and Linux</strong> from a single, elegant codebase.',
    images: ['/assets/change-avatar.gif', '/assets/macos-app.png']
  },
  // Data for other steps can be added here later
];

const SlideProgress: React.FC<SlideProps> = ({ step = 0, className = '' }) => {
  const currentStep = progressSteps[step] || progressSteps[0];

  return (
    <div className={`slide ${className}`} data-testid="slide-progress-container">
      <div className="slide-content">
        {step === 0 ? (
          <div className={styles.layoutGrid}>
            <div className={styles.leftColumn}>
              <div className={styles.content}>
                <h2 className={styles.title}>{currentStep.title}</h2>
                <p className={styles.desc} dangerouslySetInnerHTML={{ __html: currentStep.desc }} />
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
        ) : (
          <div className={styles.defaultLayout}>
            <h2>Default Layout</h2>
            <p>Content for other steps.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideProgress;
