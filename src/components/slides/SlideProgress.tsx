import React from 'react';
import styles from './SlideProgress.module.css';
import { SlideProps } from './types';
import DeviceMockup from '../common/DeviceMockup'; // Re-using our beautiful mockup component

const progressSteps = [
  {
    type: 'split',
    title: 'Full-Stack Craftsmanship',
    desc: "We deliver a seamless, native experience across iOS, Android, macOS, and Windows from a single, elegant codebase.",
    images: {
      desktop: '/assets/macos-app.png',
      mobile: '/assets/change-avatar.gif',
    }
  },
  {
    type: 'centered',
    title: "Tiered AI Engine for Quality & Scale",
    cards: [
      { title: 'Efficient Base', description: 'Lightweight models running locally for speed and privacy.' },
      { title: 'Premium Quality', description: 'Seamless fallback to top-tier APIs for complex queries.' },
      { title: 'Future-Ready', description: 'Training our own models for on-device, specialized intelligence.' },
    ],
    summary: 'This is all orchestrated with OCR, semantic search, and Qdrant caching to make answers faster and more accurate.'
  },
  {
    type: 'hiring',
    title: 'Hiring: Owners, Not Employees',
    subtitle: 'Our first hires are power users. Inside the company they take ownership; as creators they keep building their own audiences.',
    images: [
      '/assets/two_key_roles.png',
      '/assets/in_company.png',
      '/assets/as_creators.png',
    ],
  },
];

const SlideProgress: React.FC<SlideProps> = ({ step = 0, className = '' }) => {
  const currentStep = progressSteps[step] || progressSteps[0];

  const renderContent = () => {
    switch (currentStep.type) {
      case 'split':
        return (
          <div className={styles.gridSplit}>
            <div className={styles.textColumn}>
              <h2 className={styles.title}>{currentStep.title}</h2>
              <p className={styles.desc} dangerouslySetInnerHTML={{ __html: currentStep.desc }} />
              <div className={styles.desktopMockup}>
                <DeviceMockup type="browser">
                  <img src={currentStep.images.desktop} alt="Desktop App" />
                </DeviceMockup>
              </div>
            </div>
            <div className={styles.visualColumn}>
              <DeviceMockup type="phone">
                <img src={currentStep.images.mobile} alt="Mobile App GIF" />
              </DeviceMockup>
            </div>
          </div>
        );
      case 'centered':
        return (
          <div className={styles.gridCenter}>
            <h2 className={styles.title}>{currentStep.title}</h2>
            <div className={styles.cardsContainer}>
              {currentStep.cards.map((card, index) => (
                <div key={index} className={styles.card}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
            <p className={styles.summary}>{currentStep.summary}</p>
          </div>
        );
      case 'hiring':
        return (
          <div className={styles.hiringLayout}>
            <div className={styles.hiringHeader}>
              <h1 className={styles.title}>{currentStep.title}</h1>
              <p className={styles.desc}>{currentStep.subtitle}</p>
            </div>
            <div className={styles.hiringGrid}>
              <div className={`${styles.hiringImageWrapper} ${styles.hiringImageMain}`}>
                <img src={currentStep.images[0]} alt="Two key roles" />
              </div>
              <div className={`${styles.hiringImageWrapper} ${styles.hiringImageSideTop}`}>
                <img src={currentStep.images[1]} alt="Growth inside the company" />
              </div>
              <div className={`${styles.hiringImageWrapper} ${styles.hiringImageSideBottom}`}>
                <img src={currentStep.images[2]} alt="Growth as a creator" />
              </div>
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
