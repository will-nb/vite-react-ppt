// src/components/slides/SlideRoadmap.tsx
import React from 'react';
import styles from './SlideRoadmap.module.css';
import { SlideProps } from './types';

const quarters = [
  { milestone: 'M1-3', title: 'Public Beta', tasks: ['Learning App', 'Gather Feedback', 'Collect Training Data'] },
  { milestone: 'M4-6', title: 'Creator Tools', tasks: ['LoRA Fine-tuning', 'Creator Tool Launch', 'Original Decks'] },
  { milestone: 'M7-9', title: 'Compliance', tasks: ['ISBN Verification', 'Reporting System', 'Web-based Payments'] },
  { milestone: 'M10-12', title: 'Global Launch', tasks: ['On-device Models', 'Multi-language', 'Worldwide Rollout'] }
];

const SlideRoadmap: React.FC<SlideProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.slideRoadmap} ${className}`}>
      <div className={styles.content}>
        <h2 className={styles.mainTitle}>Roadmap</h2>
        <div className={styles.timeline}>
          {quarters.map((quarter, index) => (
            <div key={index} className={styles.quarterCard}>
              <div className={styles.milestone}>{quarter.milestone}</div>
              <h3 className={styles.title}>{quarter.title}</h3>
              <ul className={styles.tasks}>
                {quarter.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideRoadmap;
