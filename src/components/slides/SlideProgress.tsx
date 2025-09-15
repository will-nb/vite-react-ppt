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
    title: "On the backend, we’ve built a <em>Tiered AI Engine for Quality & Scale</em>.",
    desc: `
      <ul>
        <li><strong>Efficient Base Layer:</strong> Running lightweight models is trivial — anyone can set them up, and so can I.</li>
        <li><strong>Premium Quality Fallback:</strong> Connecting to top-tier APIs is also routine — it’s something any developer can do.</li>
        <li><strong>Future-Ready:</strong> The real challenge is training our own models and embedding them directly on mobile devices — and for that, I’ll need talented engineers to join me.</li>
      </ul>
      <p class="tech-summary">We also combine OCR, semantic search, and Qdrant caching to make answers faster and more accurate.</p>
    `,
    images: ['/assets/ai.png'],
  },
  {
    type: 'hiring',
    title: 'Hiring Plan: Two Roles, One Double Dream',
    subtitle: 'Our first hires are power users. Inside the company they take ownership; as creators they keep building their own audiences.',
    images: [
      '/assets/two_key_roles.png',   // Left main image
      '/assets/in_company.png',      // Right top image
      '/assets/as_creators.png',     // Right bottom image
    ],
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
              <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: currentStep.title as string }} />
              <div className={styles.desc} dangerouslySetInnerHTML={{ __html: currentStep.desc as string }} />
            </div>
            <div className={styles.imageContainer}>
              <img src={currentStep.images[0]} alt="AI Strategy Diagram" className={styles.image} />
            </div>
          </div>
        );
      case 'hiring':
        return (
          <div className={styles.hiringLayout}>
            <div className={styles.hiringHeader}>
              <h1 className={styles.hiringTitle}>{currentStep.title}</h1>
              <p className={styles.hiringSubtitle}>{currentStep.subtitle}</p>
            </div>
            <div className={styles.hiringGridNew}>
              <div className={styles.leftImageContainer}>
                <img src={currentStep.images[0]} alt="Two key roles" />
              </div>
              <div className={styles.rightImageContainer}>
                <img src={currentStep.images[1]} alt="Growth inside the company" />
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
